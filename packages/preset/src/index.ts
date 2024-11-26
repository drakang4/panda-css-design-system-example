import { definePreset } from "@pandacss/dev";
import { conditions } from "./conditions";
import { recipes } from "./recipes";
import { textStyles } from "./text-styles";
import { tokens, semanticTokens } from "./tokens";
import { ticketTheme, tourTheme, tripleTheme } from "./themes";

export const preset = definePreset({
  name: "@drakang4/preset",
  theme: {
    recipes,
    tokens,
    textStyles,
    semanticTokens,
  },
  themes: {
    tour: tourTheme,
    ticket: ticketTheme,
    triple: tripleTheme,
  },
});

export default preset;
