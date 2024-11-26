import { cva, cx, RecipeVariantProps } from "@drakang4/styled-system/css";

const buttonRecipe = cva({
  base: {
    appearance: "none",
    display: "inline-flex",
    alignItems: "center",
  },
  variants: {
    variant: {
      solid: {},
      outline: {
        border: "1px solid",
      },
    },
    size: {
      "52": {
        height: "52px",
        borderRadius: "12",
        px: "20",
        textStyle: "contents1",
        fontWeight: "bold",
      },
      "48": {
        height: "48",
        borderRadius: "12",
        px: "20",
        textStyle: "contents1",
        fontWeight: "bold",
      },
      "44": {
        height: "44",
        borderRadius: "12",
        px: "20",
        textStyle: "contents2",
        fontWeight: "bold",
      },
      "40": {
        height: "40",
        borderRadius: "12",
        px: "20",
        textStyle: "contents2",
        fontWeight: "bold",
      },
      "36": {
        height: "36",
        borderRadius: "8",
        px: "20",
        textStyle: "contents2",
        fontWeight: "bold",
      },
      "32": {
        height: "32",
        borderRadius: "8",
        px: "16",
        textStyle: "contents2",
        fontWeight: "bold",
      },
      "28": {
        height: "28",
        borderRadius: "8",
        px: "12",
        textStyle: "contents2",
      },
    },
    colorPalette: {
      primary: {},
      secondary: {},
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      colorPalette: "primary",
      css: {
        backgroundColor: "primary",
        color: "neutralW.100",
        _active: {
          backgroundColor:
            "color-mix(in srgb, {colors.primary}, rgba(0,0,0) 16%)",
        },
        _hover: {
          backgroundColor:
            "color-mix(in srgb, {colors.primary}, rgba(0,0,0) 16%)",
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
    },
    {
      variant: "solid",
      colorPalette: "secondary",
      css: {
        backgroundColor: "neutralB.100",
        color: "neutralW.100",
        _active: {
          backgroundColor:
            "color-mix(in srgb, {colors.neutralB.100}, rgba(0,0,0) 16%)",
        },
        _hover: {
          backgroundColor:
            "color-mix(in srgb, {colors.neutralB.100}, rgba(0,0,0) 16%)",
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
    },
    {
      variant: "outline",
      colorPalette: "primary",
      css: {
        backgroundColor: "neutralW.100",
        border: "1px solid",
        borderColor: "primary",
        color: "primary",
        _active: {
          backgroundColor:
            "color-mix(in srgb, {colors.neutralW.100}, rgba(0,0,0) 8%)",
        },
        _hover: {
          backgroundColor:
            "color-mix(in srgb, {colors.neutralW.100}, rgba(0,0,0) 8%)",
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
    {
      variant: "outline",
      colorPalette: "secondary",
      css: {
        backgroundColor: "neutralW.100",
        border: "1px solid",
        borderColor: "neutralB.30",
        color: "neutralB.100",
        _active: {
          backgroundColor:
            "color-mix(in srgb, {colors.neutralW.100}, rgba(0,0,0) 8%)",
        },
        _hover: {
          backgroundColor:
            "color-mix(in srgb, {colors.neutralW.100}, rgba(0,0,0) 8%)",
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
  ],
  defaultVariants: {
    variant: "outline",
    size: "52",
    colorPalette: "primary",
  },
});

export type ButtonProps = RecipeVariantProps<typeof buttonRecipe> &
  React.HTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    className?: string;
  };

export const Button = ({
  children,
  className,
  colorPalette,
  size,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cx(buttonRecipe({ colorPalette, size, variant }), className)}
      {...props}
    >
      {children}
    </button>
  );
};
