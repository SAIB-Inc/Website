import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { ignores: [".cache", "gatsby-config.ts", "public/**", "src/gatsby-types.d.ts"] },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-duplicate-imports": ["error", { "includeExports": true }],
      "no-useless-assignment": "error",
      "capitalized-comments": ["error"]
    }
  }
];