"use client";

import { type ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { CurrencyProvider } from "@/lib/currency";
import { LocaleProvider } from "@/lib/i18n";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LocaleProvider>
        <CurrencyProvider>
          <TooltipProvider>
            {children}
            <Toaster position="top-center" richColors />
          </TooltipProvider>
        </CurrencyProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}
