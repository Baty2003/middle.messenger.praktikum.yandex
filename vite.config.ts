import { defineConfig } from "vite";
import handlebars from "./plugins/vite-plugin-handlebars-precompile";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [handlebars()],
});