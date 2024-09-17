import js from "@eslint/js";
import ts from "typescript-eslint";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,

  {
    rules: {
      // "no-unused-vars": "warn",
      "no-undef": "warn"
      //   "comma-dangle": "",
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        // myCustomGlobal: "readonly"
        Timer: "readonly"
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  }
];
