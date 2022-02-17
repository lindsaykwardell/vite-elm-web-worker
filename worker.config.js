import { defineConfig } from "vite";
import elmPlugin from "vite-plugin-elm";
const path = require("path");

export default defineConfig({
  publicDir: false,
  plugins: [elmPlugin()],
  build: {
    outDir: "./elm-worker",
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, "./src/elm-worker.js"),
      name: "elm-worker",
      fileName: (format) => `elm-worker.${format}.js`,
    },
  },
});
