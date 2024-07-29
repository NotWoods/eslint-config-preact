# @notwoods/eslint-config-preact

A truly unopinionated baseline ESLint configuration for [Preact](https://preactjs.com/) codebases.

It helps you avoid bugs, and lets you know when there's a more optimal way to do things.

✅ **What's included:** sensible defaults for Preact development.

⛔️ **What's not included:** no stylistic or subjective rules are provided.

Right now, this plugin contains two configurations:

- `base` - Just includes the React ESLint plugin, and some rules to avoid legacy APIs not supported in Preact.
- `recommended` - enables recommended rules from [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules), configured to use Preact instead.

## Compared to Preact's eslint-config-preact

This config only includes rules from [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react), unlike the official Preact config which prescribes Jest and Mocha rules.

## Installation

Install eslint and this config:

```
npm i -D eslint @notwoods/eslint-config-preact
```

## Usage (flat config)

Use in your [`eslint.config.js`](https://eslint.org/docs/latest/use/configure/configuration-files) file anytime you want to extend one of the configs:

```js
import preact from "@notwoods/eslint-plugin-react";

export default [
  // apply base Preact rules
  preact.configs.base,

  // apply recommended Preact rules
  ...preact.configs.recommended,
];
```

Make sure you're running eslint `v8.21.0`, `v9.0.0`, or higher for this configuration format to work.

## Usage (legacy .eslintrc config)

The [legacy format](https://eslint.org/docs/latest/use/configure/configuration-files-deprecated) is not supported by this config.
