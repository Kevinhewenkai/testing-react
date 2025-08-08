import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vite.setup.ts"],
    exclude: ["node_modules", "dist", "e2e"],
    include: ["**/*.{test,spec}.{js,ts,jsx,tsx}"],
  },
});
