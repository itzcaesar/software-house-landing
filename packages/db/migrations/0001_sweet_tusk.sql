ALTER TABLE `leads` ADD `utm_source` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `leads` ADD `utm_medium` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `leads` ADD `utm_campaign` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `leads` ADD `referrer` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `leads` ADD `next_action` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `leads` ADD `next_action_at` text;