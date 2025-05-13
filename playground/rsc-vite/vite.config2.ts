import rsc from "@hiogawa/vite-rsc/plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import inspect from "vite-plugin-inspect";

// usage:
// pnpm vite2 dev
// pnpm vite2 build
// pnpm vite2 preview

export default defineConfig({
  plugins: [
    react(),
    rsc({
      entries: {
        client: "./src/browser/entry.browser2.tsx",
        ssr: "./src/ssr/entry.ssr2.tsx",
        rsc: "./src/rsc/entry.rsc2.tsx",
      },
    }),
    inspect(),
  ],
}) as any;
