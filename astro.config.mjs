import { defineConfig } from "astro/config";
import svgr from "@svgr/rollup";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import tailwind from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig(async () => {
  return {
    site: "https://luisbazandev.github.io",
    integrations: [preact({ compat: true }), mdx()],
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
