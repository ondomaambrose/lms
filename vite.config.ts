import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	// Load env file based on `mode` in the current working directory.
	// The third parameter '' loads all env vars, regardless of the `VITE_` prefix.
	const env = loadEnv(mode, process.cwd(), '')

	return {
		base: '/',
		plugins: [react(), tailwindcss()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
		// This effectively "polysfills" process.env for the browser
		define: {
			'process.env': env,
		},
	}
})
