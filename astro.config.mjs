import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svgr from "@svgr/rollup";

import preact from "@astrojs/preact";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://luisbazandev.github.io",
  integrations: [tailwind(), preact({ compat: true }), mdx()],
  vite: {
    plugins: [svgr()],
    resolve: {
      alias: {
        "@assets": new URL("./src/assets", import.meta.url).pathname,
      },
    },
  },
  output: "static",
  compressHTML: true,
});