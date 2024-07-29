// @ts-check
import react from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig} */
const config = {
  name: "preact/base",

  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  plugins: {
    // @ts-ignore
    react,
  },

  settings: {
    react: {
      // eslint-plugin-preact interprets this as "h.createElement",
      // however we only care about marking h() as being a used variable.
      pragma: "h",
      // We use "react 16.0" to avoid pushing folks to UNSAFE_ methods.
      version: "16.0",
    },
  },

  rules: {
    // Legacy APIs not supported in Preact:
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-is-mounted": "error",
    "react/no-string-refs": "error",
  },
};

export default config;
