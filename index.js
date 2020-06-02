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
    // "forin" - guard-for-in
    // "new-parens" - new-parens
    // "no-bitwise" - no-bitwise
    // "no-arg" - no-caller
    // "no-conditional-assignment" - no-cond-assign
    // "no-console" - no-console
    // "no-debugger" - no-debugger
    // "no-eval" - no-eval
    // "no-switch-case-fall-through" - no-fallthrough
    // "no-invalid-this" - no-invalid-this
    // "no-construct" - no-new-wrappers
    // "no-duplicate-variable" - no-redeclare
    // "no-sparse-arrays" - no-sparse-arrays
    // "no-invalid-template-strings" - no-template-curly-in-string
    // "no-unsafe-finally" - no-unsafe-finally
    // "no-unused-expression" - no-unused-expressions
    // "label-position" - no-unused-labels
    // "no-var-keyword" - no-var
    // "one-variable-per-declaration" - one-var
    // "prefer-template"- (warning) - prefer-template
    // "radix" - radix
    // "object-literal-sort-keys" - sort-keys
    // "use-isnan" - use-isnan
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
