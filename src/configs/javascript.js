import promise from "eslint-plugin-promise";
import regexp from "eslint-plugin-regexp";
import unicorn from "eslint-plugin-unicorn";
import wc from "eslint-plugin-wc";
import globals from "globals";

export default {
  name: "manzdev/javascript",
  ...unicorn.configs["flat/recommended"],
  ...promise.configs["flat/recommended"],
  ...wc.configs["flat/recommended"],
  ...wc.configs["flat/best-practice"],
  files: [
    "**/*.js",
    "**/*.cjs",
    "**/*.mjs"
  ],
  ignores: ["**/*.test.js"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      ...globals.browser,
      ...globals.builtin
    }
  },
  plugins: {
    promise,
    unicorn,
    regexp,
    wc,
  },
  rules: {
    "no-unused-vars": "error",
    "no-await-in-loop": "error",
    "no-template-curly-in-string": "error",
    "arrow-body-style": [
      "error",
      "as-needed"
    ],
    "max-lines": [
      "error",
      {
        max: 500,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    "max-lines-per-function": [
      "error",
      {
        max: 250,
        skipBlankLines: true,
        skipComments: true
      }
    ],

    "no-unneeded-ternary": "error",
    "no-script-url": "error",
    "no-sequences": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "template-curly-spacing": "error",

    // WebComponents
    "wc/attach-shadow-constructor": "error",
    "wc/define-tag-after-class-definition": "error",
    "wc/expose-class-on-global": "off",
    "wc/file-name-matches-element": "off",
    "wc/guard-define-call": "off",
    "wc/max-elements-per-file": "error",
    "wc/no-constructor": "off",
    "wc/no-constructor-attributes": "error",
    "wc/no-invalid-element-name": "error",
    "wc/no-exports-with-element": "error",
    "wc/no-method-prefixed-with-on": "error",
    "wc/tag-name-matches-class": "error",
    "wc/no-typos": "error",

    ...regexp.configs["flat/recommended"].rules,

    "unicorn/text-encoding-identifier-case": "error",
    "unicorn/template-indent": "warn",
    "unicorn/empty-brace-spaces": "error",
    "unicorn/switch-case-braces": "error",
    "unicorn/prefer-module": "warn",
    "unicorn/require-array-join-separator": "error",

    /* Preferences */
    "unicorn/prefer-ternary": "error",
    "unicorn/prefer-switch": "error",
    "unicorn/prefer-structured-clone": "error",
    "unicorn/prefer-string-trim-start-end": "error",
    "unicorn/prefer-string-starts-ends-with": "error",
    "unicorn/prefer-string-replace-all": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-array-flat-map": "error",
    "unicorn/prefer-add-event-listener": "warn",
    "unicorn/prefer-array-find": "warn",
    "unicorn/prefer-array-flat": "warn",
    "unicorn/prefer-array-index-of": "warn",
    "unicorn/prefer-array-some": "warn",
    "unicorn/prefer-date-now": "error",
    "unicorn/prefer-event-target": "warn",
    "unicorn/prefer-global-this": "error",
    "unicorn/prefer-keyboard-event-key": "error",
    "unicorn/prefer-logical-operator-over-ternary": "warn",
    "unicorn/prefer-math-min-max": "error",
    "unicorn/prefer-top-level-await": "warn",
    "unicorn/prefer-set-has": "error",
    "unicorn/prefer-set-size": "error",
    "unicorn/prefer-spread": "warn",
    "unicorn/prefer-negative-index": "error",
    "unicorn/prefer-node-protocol": "warn",

    /* Avoid */
    "unicorn/no-array-push-push": "error",
    "unicorn/no-for-loop": "error",
    "unicorn/no-instanceof-array": "error",
    "unicorn/no-invalid-fetch-options": "error",
    "unicorn/no-lonely-if": "error",
    "unicorn/no-negation-in-equality-check": "error",
    "unicorn/no-nested-ternary": "error",
    "unicorn/no-new-array": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-this-assignment": "error",
    "unicorn/no-unnecessary-await": "error",

    /* Numeric */
    "unicorn/number-literal-case": "error",
    "unicorn/prefer-code-point": "error",
    "unicorn/prefer-modern-math-apis": "error",
    "unicorn/prefer-number-properties": "warn",

    /* DOM */
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-dom-node-append": "warn",
    "unicorn/prefer-dom-node-remove": "warn",
    "unicorn/prefer-dom-node-text-content": "error",
    "unicorn/prefer-modern-dom-apis": "error",
  }
};
