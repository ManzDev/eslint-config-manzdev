import css from "@eslint/css";

export default {
  name: "manzdev/css",
  files: ["**/*.css"],
  plugins: { css },
  language: "css/css",
  rules: {
    "css/no-duplicate-imports": "error",
    "css/no-empty-blocks": "error",
    "css/no-invalid-at-rules": "error",
    "css/no-invalid-properties": "error",
    "css/prefer-logical-properties": "off",
    "css/require-baseline": ["warn", { available: "widely" }],
    "css/use-layers": "off"
  }
};
