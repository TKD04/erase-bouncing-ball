import { defineConfig } from "vite";

/**
 * @see https://vite.dev/config/
 */
const config = defineConfig({
  base: "https://tkd04.github.io/erase-bouncing-ball/",
  build: {
    outDir: "./docs",
  },
});

export default config;
