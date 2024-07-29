// @ts-check
import react from "eslint-plugin-react";
import base from "./base.js";

/** @type {import('eslint').Linter.Config[]} */
const config = [
  // @ts-ignore
  react.configs.flat.recommended,
  base,
  {
    name: "preact/recommended",
    rules: {
      "react/jsx-key": ["error", { checkFragmentShorthand: true }],
      "react/prefer-es6-class": "error",
    },
  },
];

export default config;
