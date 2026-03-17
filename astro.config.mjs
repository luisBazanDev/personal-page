import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svgr from "@svgr/rollup";
import mdx from "@astrojs/mdx";

async function createPreactIntegration() {
  // Vite 6 may invoke plugin hooks (like `config`) without binding `this`.
  // @preact/preset-vite expects `this.meta` to exist, so wrap the plugin factory
  // to bind `config` to the returned plugin object.
  const preset = await import("@preact/preset-vite");
  const originalPreact = preset.preact;
  const patchedPreact = (...args) => {
    const plugin = originalPreact(...args);
    if (Array.isArray(plugin)) {
      for (const p of plugin) {
        if (p && typeof p.config === "function") {
          p.config = p.config.bind(p);
        }
      }
    } else if (plugin && typeof plugin.config === "function") {
      plugin.config = plugin.config.bind(plugin);
    }
    return plugin;
  };
  preset.preact = patchedPreact;

  const astroPreact = await import("@astrojs/preact");
  return astroPreact.default ?? astroPreact;
}

// https://astro.build/config
export default defineConfig(async () => {
  const preact = await createPreactIntegration();

  return {
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
  };
});
