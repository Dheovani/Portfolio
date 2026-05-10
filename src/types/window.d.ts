import type { Locale } from "../data/locales";

declare global {
  interface Window {
    PORTFOLIO_MESSAGES?: Record<Locale, Record<string, string>>;
    renderProjectsForLocale?: () => void;
  }
}

export {};
