import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// The lovable-tagger plugin was removed because it depends on magic-string and
// can cause installation errors on Windows. If you need component tagging
// support during development, install lovable-tagger locally and reintroduce
// the plugin here.

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Removed componentTagger plugin to prevent optional dependency errors.
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
