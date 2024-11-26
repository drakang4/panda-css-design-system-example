import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@drakang4/preset"],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["../packages/ui/src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  staticCss: {
    themes: ["tour", "ticket", "triple"],
  },

  importMap: "@drakang4/styled-system",
});
