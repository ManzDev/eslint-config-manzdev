import deMorgan from "eslint-plugin-de-morgan";
import neostandard from "neostandard";

import cssConfig from "../configs/css.js";
import htmlConfig from "../configs/html.js";
import importsConfig from "../configs/imports.js";
import javascriptConfig from "../configs/javascript.js";
import jestConfig from "../configs/jest.js";
import jsonConfig from "../configs/json.js";
import packageJson from "../configs/packageJson.js";
import yamlConfig from "../configs/yaml.js";

const neostandardConfig = neostandard({ noJsx: true })
  .map(config => ({ files: ["**/*.js"], ...config }));

export default [
  {
    ignores: ["node_modules/", "dist/", "pnpm-lock.yaml", "npm-lock.json"]
  },
  deMorgan.configs.recommended,
  ...neostandardConfig,
  {
    files: ["**/*.js"],
    name: "manzdev/stylistic",
    rules: {
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/comma-dangle": "off",
      "@stylistic/space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always"
        }
      ],
    },
  },
  importsConfig,
  htmlConfig,
  cssConfig,
  javascriptConfig,
  jestConfig,
  ...packageJson,
  ...yamlConfig,
  ...jsonConfig
];
