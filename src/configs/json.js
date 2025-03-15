import json from "eslint-plugin-jsonc";

const jsonConfig = json.configs["flat/recommended-with-jsonc"]
  .map(config => ({
    ...config,
    files: [
      "*.json",
      "**/*.json",
      "*.json5",
      "**/*.json5",
      "*.jsonc",
      "**/*.jsonc"
    ]
  }));

export default [
  ...jsonConfig
];
