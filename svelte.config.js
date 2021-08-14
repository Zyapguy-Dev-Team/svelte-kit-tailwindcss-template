import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
const dev = process.env.NODE_ENV === "development";
process.env.TAILWIND_MODE = dev ? "watch" : "build";
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
            "postcss": true
    })
  ],
	kit: {
		target: '#svelte',
		adapter: adapter({
			out: "dist",
			env: {
				host: "HOST",
				port: "PORT"
			}
		}),
		vite: {
			mode: dev ? "development" : "production"
		}
	}
}
export default config;
