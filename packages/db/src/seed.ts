import { randomBytes } from "node:crypto";
import { eq } from "drizzle-orm";
import { getDb } from "./client";
import { activities, leads, users } from "./schema";
import { hashPassword } from "./password";

/**
 * Seeds the two founder accounts (idempotent — skips existing emails) and,
 * with --demo, a handful of sample leads for UI development.
 * Generated passwords are printed ONCE — store them, or change in Settings.
 */

const FOUNDERS = [
  { email: "caesar@craftbyte.studio", name: "Muhammad Caesar Rifqi" },
  { email: "gerrard@craftbyte.studio", name: "Gerrard Setiawan" },
];

const DEMO_LEADS = [
  { name: "Amara Wijaya", email: "amara@fintrail.example", company: "Fintrail", budget: "$15k – $50k", message: "We need a dashboard rebuild for our personal-finance product. Timeline is aggressive — can we talk this week?", status: "new" as const },
  { name: "Daniel Reyes", email: "daniel@nomad.example", company: "Nomad", budget: "$5k – $15k", message: "Looking for a React Native team to take over our travel app MVP and ship it to both stores.", status: "contacted" as const },
  { name: "Sarah Chen", email: "sarah@atlas.example", company: "Atlas Health", budget: "$50k+", message: "Patient portal + design system. HIPAA experience required. Send your process and a ballpark.", status: "discovery" as const },
  { name: "Marcus Bauer", email: "marcus@lumen.example", company: "Lumen", budget: "$15k – $50k", message: "We want RAG search over internal docs with citations. Prototype first, then production.", status: "proposal" as const },
  { name: "Priya Nair", email: "priya@cobalt.example", company: "Cobalt Commerce", budget: "$15k – $50k", message: "Headless storefront migration — current site takes 4s to load on mobile. Help.", status: "won" as const },
];

async function main() {
  const db = getDb();
  const demo = process.argv.includes("--demo");
  const now = new Date().toISOString();

  for (const founder of FOUNDERS) {
    const existing = await db.select().from(users).where(eq(users.email, founder.email));
    if (existing.length > 0) {
      console.log(`= ${founder.email} already exists, skipping`);
      continue;
    }
    const password = randomBytes(9).toString("base64url");
    await db.insert(users).values({
      email: founder.email,
      name: founder.name,
      passwordHash: hashPassword(password),
      createdAt: now,
    });
    console.log(`+ ${founder.name}`);
    console.log(`  login:    ${founder.email}`);
    console.log(`  password: ${password}   <-- shown once, change it in Settings`);
  }

  if (demo) {
    const existing = await db.select({ id: leads.id }).from(leads);
    if (existing.length > 0) {
      console.log("= leads table not empty, skipping demo data");
    } else {
      for (const [i, demoLead] of DEMO_LEADS.entries()) {
        const created = new Date(Date.now() - i * 2 * 86_400_000).toISOString();
        const [row] = await db
          .insert(leads)
          .values({ ...demoLead, source: "landing", createdAt: created, updatedAt: created })
          .returning({ id: leads.id });
        await db.insert(activities).values({
          leadId: row.id,
          actorId: null,
          type: "created",
          detail: "Demo seed",
          createdAt: created,
        });
      }
      console.log(`+ ${DEMO_LEADS.length} demo leads inserted`);
    }
  }

  console.log("Seed complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
