import { defineSemanticTokens, defineTokens } from "@pandacss/dev";
import { colors } from "./colors";
import { spacing } from "./spacing";

export const tokens = defineTokens({
  colors,
  spacing,
});

export const semanticTokens = defineSemanticTokens({
  colors: {
    primary: {
      value: {
        _tourTheme: "{colors.primitive.blue}",
        _ticketTheme: "{colors.primitive.purple}",
        _tripleTheme: "{colors.triple.blue}",
      },
    },
    button: {
      primary: {
        solid: {
          background: {
            value: "{colors.primary}",
          },
          text: {
            value: "{colors.neutralW.100}",
          },
        },
        outline: {
          border: {
            value: "{colors.primary}",
          },
          text: {
            value: "{colors.primary}",
          },
        },
      },
      secondary: {
        solid: {
          background: {
            value: "{colors.neutralB.100}",
          },
          text: {
            value: "{colors.neutralW.100}",
          },
        },
        outline: {
          border: {
            value: "{colors.neutralB.30}",
          },
          text: {
            value: "{colors.neutralB.100}",
          },
        },
      },
    },
  },
});
