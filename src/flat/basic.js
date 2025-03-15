// Configs
import cssConfig from "../configs/css.js";
import htmlConfig from "../configs/html.js";
import javascriptConfig from "../configs/javascript.js";
import jsonConfig from "../configs/json.js";
import packageJson from "../configs/packageJson.js";

export default [
  {
    ignores: ["node_modules/", "dist/", "pnpm-lock.yaml", "npm-lock.json"]
  },
  {
    rules: {
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
    },
  },
  htmlConfig,
  cssConfig,
  javascriptConfig,
  ...packageJson,
  ...jsonConfig
];
