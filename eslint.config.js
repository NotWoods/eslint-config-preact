import js from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: ["test/fixtures/**", "test/__snapshots__/**"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
      },
    },

    rules: {
      "no-empty": "off",
      "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    },
  },
];

export default config;
