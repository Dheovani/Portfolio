import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  site: "https://dheovani.github.io",
  base: "/Portfolio",
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
