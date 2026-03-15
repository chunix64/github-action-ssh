import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default defineConfig([
	globalIgnores(["dist"]),
	{
		files: ["**/*.{js,jsx}"],
		extends: [
			js.configs.recommended,
			react.configs.flat.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: "latest",
				ecmaFeatures: { jsx: true },
				sourceType: "module",
			},
		},
		rules: {
			"no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
			"react/jsx-uses-vars": "error",
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
		},
	},
]);
