import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "./src") },
      {
        find: "@components",
        replacement: resolve(__dirname, "./src/components"),
      },
      {
        find: "@containers",
        replacement: resolve(__dirname, "./src/containers"),
      },
      {
        find: "@assets",
        replacement: resolve(__dirname, "./public/assets"),
      },
      {
        find: "@styles",
        replacement: resolve(__dirname, "./src/styles"),
      },
      {
        find: "@types",
        replacement: resolve(__dirname, "./src/types"),
      },
      {
        find: "@interfaces",
        replacement: resolve(__dirname, "./src/interfaces"),
      },
      {
        find: "@constants",
        replacement: resolve(__dirname, "./src/constants"),
      },
    ],
  },
});
