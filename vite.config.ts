import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), TanStackRouterVite()],
  resolve: {
    preserveSymlinks: true,
    // TODO remove from here when migrated to typescript and styled-components
    alias: {
      "@hooks": "/src/03-hooks",
      "@views": "/src/02-views",
      "@layouts": "/src/07-layouts",
      "@utils": "/src/05-utils",
      "@store": "/src/04-store",
      "@containers": "/src/01-containers",
      "@components": "/src/00-components",
      "@constants": "/src/09-constants",
      "@types": "/src/06-types",
      "@assets": "/src/assets",
      "@services": "/src/08-services",
    },
  },
});
