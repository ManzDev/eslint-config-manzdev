module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: [
    "eslint-config-standard",
    "eslint:recommended",
    "plugin:require-extensions/recommended",
    "plugin:sonarjs/recommended",
    "plugin:ecmascript-compat/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "import",
    "require-extensions",
    "sonarjs",
    "ecmascript-compat"
  ],
  rules: {
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "comma-dangle": ["error", "only-multiline"],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "no-await-in-loop": "error",
    "no-template-curly-in-string": "error",
    "arrow-body-style": ["error", "as-needed"],
    "no-floating-decimal": "error",
    "max-lines": ["error", {
      "max": 500,
      "skipBlankLines": true,
      "skipComments": true
    }],
    "max-lines-per-function": ["error", {
      "max": 250,
      "skipBlankLines": true,
      "skipComments": true
    }],
    "no-unneeded-ternary": "error",
    "no-script-url": "error",
    "no-sequences": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "indent": ["error", 2]
  }
}
