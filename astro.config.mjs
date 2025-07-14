import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svgr from "@svgr/rollup";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://luisbazandev.github.io",
  integrations: [tailwind(), preact({ compat: true })],
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
