import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const buttonFn = /* @__PURE__ */ createRecipe('button', {
  "variant": "outline",
  "size": "52",
  "colorPalette": "primary"
}, [])

const buttonVariantMap = {
  "variant": [
    "solid",
    "outline"
  ],
  "size": [
    "28",
    "32",
    "36",
    "40",
    "44",
    "48",
    "52"
  ],
  "colorPalette": [
    "primary",
    "secondary"
  ]
}

const buttonVariantKeys = Object.keys(buttonVariantMap)

export const button = /* @__PURE__ */ Object.assign(memo(buttonFn.recipeFn), {
  __recipe__: true,
  __name__: 'button',
  __getCompoundVariantCss__: buttonFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: buttonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys)
  },
  getVariantProps: buttonFn.getVariantProps,
})