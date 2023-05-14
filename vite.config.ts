/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    include: ["./src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "c8",
      all: true,
      src: ["src"],
      exclude: [
        "src/index.ts",
        "src/main.tsx",
        "src/components/App/App.tsx",
        " **/*.test.{ts,tsx}",
        "**/types.ts",
        "**/*.d.ts",
        "src/main.tsx",
      ],
    },
  },
});
