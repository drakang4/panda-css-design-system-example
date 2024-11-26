import { defineConfig } from "@pandacss/dev";
import preset from "./src";

export default defineConfig({
  presets: [preset],
  preflight: true,
  include: [],
  exclude: [],
  outdir: "../styled-system",
});
