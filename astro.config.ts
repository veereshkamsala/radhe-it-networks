import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://veereshkamsala.github.io",
  base: "/radhe-it-networks/",
  vite: {
    plugins: [tailwindcss()],
  },
});
