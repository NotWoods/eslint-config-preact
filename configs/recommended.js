// @ts-check
import react from "eslint-plugin-react";
import base from "./base.js";

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  // @ts-ignore
  react.configs.flat.recommended,
  base,
];

export default config;
