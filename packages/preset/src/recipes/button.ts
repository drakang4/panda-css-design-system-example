import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    appearance: "none",
    display: "inline-flex",
    alignItems: "center",
  },
  variants: {
    variant: {
      solid: {
        backgroundColor: "colorPalette.solid.background",
        color: "colorPalette.solid.text",
        _active: {
          backgroundColor:
            "color-mix(in srgb, {colors.colorPalette.solid.background}, rgba(0,0,0) 16%)",
        },
        _hover: {
          backgroundColor:
            "color-mix(in srgb, {colors.colorPalette.solid.background}, rgba(0,0,0) 16%)",
        },
        _disabled: {
          backgroundColor: "neutralB.10",
          color: "neutralB.30",
          _active: {
            backgroundColor: "neutralB.10",
          },
          _hover: {
            backgroundColor: "neutralB.10",
          },
        },
      },
      outline: {
        backgroundColor: "neutralW.100",
        border: "1px solid",
        borderColor: "colorPalette.outline.border",
        color: "colorPalette.outline.text",
        _active: {
          backgroundColor:
            "color-mix(in srgb, {colors.neutralW.100}, rgba(0,0,0) 16%)",
        },
        _hover: {
          backgroundColor:
            "color-mix(in srgb, {colors.neutralW.100}, rgba(0,0,0) 16%)",
        },
        _disabled: {
          backgroundColor: "neutralB.5",
          color: "neutralB.30",
          borderColor: "neutralB.15",
          _active: {
            backgroundColor: "neutralB.5",
          },
          _hover: {
            backgroundColor: "neutralB.5",
          },
        },
      },
    },
    size: {
      "52": {
        height: "52px",
        borderRadius: "12",
        paddingLeft: "20",
        paddingRight: "20",
        textStyle: "contents1",
        fontWeight: "bold",
      },
      "48": {
        height: "48",
        borderRadius: "12",
        paddingLeft: "20",
        paddingRight: "20",
        textStyle: "contents1",
        fontWeight: "bold",
      },
      "44": {
        height: "44",
        borderRadius: "12",
        paddingLeft: "20",
        paddingRight: "20",
        textStyle: "contents2",
        fontWeight: "bold",
      },
      "40": {
        height: "40",
        borderRadius: "12",
        paddingLeft: "20",
        paddingRight: "20",
        textStyle: "contents2",
        fontWeight: "bold",
      },
      "36": {
        height: "36",
        borderRadius: "8",
        paddingLeft: "20",
        paddingRight: "20",
        textStyle: "contents2",
        fontWeight: "bold",
      },
      "32": {
        height: "32",
        borderRadius: "8",
        paddingLeft: "16",
        paddingRight: "16",
        textStyle: "contents2",
        fontWeight: "bold",
      },
      "28": {
        height: "28",
        borderRadius: "8",
        paddingLeft: "12",
        paddingRight: "12",
        textStyle: "contents2",
      },
    },
    colorPalette: {
      primary: {
        colorPalette: "button.primary",
      },
      secondary: {
        colorPalette: "button.secondary",
      },
    },
  },

  defaultVariants: {
    variant: "outline",
    size: "52",
    colorPalette: "primary",
  },
});
