module.exports = {
  plugin: [
    "@typescript-eslint",
    "etc",
    "import"
  ],
  rules: {
    "constructor-super": ["error"],
    "curly": ["error", "all"],
    "default-case": ["error"],
    "eqeqeq": ["error", "always", {
      "null": "ignore"
    }],
    "guard-for-in": ["error"],
    "new-parens": ["error"],
    "no-bitwise": ["error"],
    "no-caller": ["error"],
    "no-cond-assign": ["error"],
    "no-console":  ["error", { allow: ["warn", "error"] }],
    "no-debugger": ["error"],
    "no-eval": ["error"],
    "no-fallthrough": ["error"],
    "no-invalid-this": ["error"],
    "no-new-wrappers": ["error"],
    "no-redeclare": ["error"],
    "no-sparse-arrays": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-unsafe-finally": ["error"],
    "no-unused-expressions": ["error"],
    "no-unused-labels": ["error"],
    "no-var": ["error"],
    "one-var": ["error"],
    "prefer-template": ["error"],
    "radix": ["error"],
    "sort-keys": ["error", "asc", {
      "caseSensitive": true,
      "natural": true
    }],
    "use-isnan": ["error"],
    "@typescript-eslint/adjacent-overload-signatures": ["error"],
    "@typescript-eslint/array-type": ["error", {
      "default": "array",
      "readonly": "array"
    }],
    "@typescript-eslint/member-ordering": ["warning", {
      "classes": {
        "memberTypes": [
          "static-field",
          "static-method",
          "instance-field",
          "abstract-field",
          "constructor",
          "instance-method",
          "abstract-method"
        ],
        "order": "alphabetically"
      }
    }],
    "@typescript-eslint/no-namespace": ["error"],
    "@typescript-eslint/triple-slash-reference": ["error", {
      "lib": "never",
      "path": "never",
      "types": "never"
    }],
    "@typescript-eslint/typedef": ["error", {
      "call-signature": true,
      "parameter": true,
      "property-declaration": true
    }],
    "@typescript-eslint/naming-convention": ["warning", {
      "format": ["camelCase"],
      "leadingUnderscore": "allow",
      "selector": "variableLike",
      "trailingUnderscore": "allow"
    }, {
      "format": ["PascalCase"],
      "leadingUnderscore": "allow",
      "selector": "typeLike",
      "trailingUnderscore": "allow"
    }],
    "etc/deprecation": ["warning"],
    "import/order": ["warning", {
      "alphabetize": {
        "caseInsensitive": true,
        "order": "asc"
      }
    }]
  }
};
