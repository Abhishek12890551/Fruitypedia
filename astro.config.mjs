// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config - Fruitypedia Monograph Engine
export default defineConfig({
  site: "https://fruitypedia.com",
  output: "static",
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
        "@layouts": "/src/layouts",
        "@data": "/src/data",
        "@types": "/src/types",
        "@schemas": "/src/schemas",
        "@styles": "/src/styles",
        "@utils": "/src/utils",
      },
    },
  },
});
