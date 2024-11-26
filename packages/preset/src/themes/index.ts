import { defineTheme } from "./contract";

export const tourTheme = defineTheme({
  semanticTokens: {
    colors: {
      primary: {
        value: "{colors.primitive.blue}",
      },
    },
  },
});

export const ticketTheme = defineTheme({
  semanticTokens: {
    colors: {
      primary: {
        value: "{colors.primitive.purple}",
      },
    },
  },
});

export const tripleTheme = defineTheme({
  semanticTokens: {
    colors: {
      primary: {
        value: "{colors.triple.blue}",
      },
    },
  },
});
