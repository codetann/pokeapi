import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import paths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), paths()],
});
