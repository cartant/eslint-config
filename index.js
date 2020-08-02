module.exports = {
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "constructor-super": ["error"],
    curly: ["error", "all"],
    "default-case": ["error"],
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],
    "guard-for-in": ["error"],
    "new-parens": ["error"],
    "no-bitwise": ["error"],
    "no-caller": ["error"],
    "no-cond-assign": ["error"],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": ["error"],
    "no-eval": ["error"],
    "no-fallthrough": ["error"],
    "no-invalid-this": ["error"],
    "no-new-wrappers": ["error"],
    "no-redeclare": ["error"],
    "no-sparse-arrays": ["error"],
    "no-template-curly-in-string": ["error"],
    "no-unsafe-finally": ["error"],
    // https://github.com/eslint/eslint/issues/12822
    "no-unused-expressions": ["off"],
    "no-unused-labels": ["error"],
    "no-var": ["error"],
    "one-var": ["error", "never"],
    "prefer-template": ["error"],
    radix: ["error"],
    "sort-keys": [
      "warn",
      "asc",
      {
        caseSensitive: true,
        natural: true,
      },
    ],
    "use-isnan": ["error"],
    "@typescript-eslint/adjacent-overload-signatures": ["error"],
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array",
        readonly: "array",
      },
    ],
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        classes: {
          memberTypes: [
            "public-static-field",
            "protected-static-field",
            "private-static-field",
            "public-static-method",
            "protected-static-method",
            "private-static-method",
            "public-instance-field",
            "protected-instance-field",
            "private-instance-field",
            "public-abstract-field",
            "protected-abstract-field",
            "private-abstract-field",
            "public-constructor",
            "protected-constructor",
            "private-constructor",
            "public-instance-method",
            "protected-instance-method",
            "private-instance-method",
            "public-abstract-method",
            "protected-abstract-method",
            "private-abstract-method",
          ],
          order: "alphabetically",
        },
      },
    ],
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        selector: "variableLike",
        trailingUnderscore: "allow",
      },
      {
        format: ["PascalCase"],
        leadingUnderscore: "allow",
        selector: "typeLike",
        trailingUnderscore: "allow",
      },
    ],
    "@typescript-eslint/no-inferrable-types": ["warn"],
    "@typescript-eslint/no-namespace": ["error"],
    "@typescript-eslint/prefer-for-of": ["warn"],
    "@typescript-eslint/triple-slash-reference": [
      "error",
      {
        lib: "never",
        path: "never",
        types: "never",
      },
    ],
    "import/order": [
      "warn",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: [
          ["builtin", "external", "internal", "unknown"],
          "index",
          "parent",
          "sibling",
        ],
      },
    ],
  },
};
