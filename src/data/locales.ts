export type Locale = "pt" | "en" | "es";

export const defaultLocale: Locale = "pt";

export const languages = [
  { value: "pt", label: "Português" },
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
] as const;
