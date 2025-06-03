const js = require("@eslint/js");
const globals = require("globals");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const reactRefresh = require("eslint-plugin-react-refresh");
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");

module.exports = {
  ignorePatterns: ["dist"],

  overrides: [
    {
      files: ["**/*.{js,jsx}"],
      env: { browser: true, es2021: true },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      },
      settings: { react: { version: "18.2" } },
      plugins: ["react", "react-hooks", "react-refresh"],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended"
      ],
      rules: {
        "react/jsx-no-target-blank": "off",
        "react/no-unescaped-entities": "off",
        "no-undef": "off",
        "react/prop-types": "off",
        "react/display-name": "off",
        "react-refresh/only-export-components": "off"
      }
    },
    {
      files: ["**/*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      },
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {}
    }
  ]
};
