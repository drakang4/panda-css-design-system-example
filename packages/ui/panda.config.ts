import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@drakang4/preset"],
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
});
