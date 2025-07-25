/// <reference types="vitest/config" />
// https://vite.dev/config/
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { dirname, resolve } from "node:path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		dts({
			insertTypesEntry: true,
			tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
		}),
		tailwindcss(),
		cssInjectedByJsPlugin(),
	],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "TiiquUI",
			fileName: "tiiqu-ui",
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime", "tailwindcss"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
					"react/jsx-runtime": "jsxRuntime",
					tailwindcss: "tailwindcss",
				},
			},
		},
	},
	test: {
		projects: [
			{
				extends: true,
				plugins: [
					// The plugin will run tests for the stories defined in your Storybook config
					// See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
					storybookTest({
						configDir: resolve(__dirname, ".storybook"),
					}),
				],
				test: {
					name: "storybook",
					browser: {
						enabled: true,
						headless: true,
						provider: "playwright",
						instances: [
							{
								browser: "chromium",
							},
						],
					},
					setupFiles: [".storybook/vitest.setup.ts"],
				},
			},
		],
	},
});
