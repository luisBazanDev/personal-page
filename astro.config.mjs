import { defineConfig } from "astro/config";
import svgr from "@svgr/rollup";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import tailwind from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig(async () => {
  return {
    site: "https://luisb.space", // Cambia esto por tu dominio real
    integrations: [mdx(), preact({
      compat: true
    }), sitemap()],
    vite: {
      plugins: [svgr(), tailwind()],
      resolve: {
        alias: {
          "@assets": new URL("./src/assets", import.meta.url).pathname,
        },
      },
    },
    output: "static",
    compressHTML: true,
  };
});
