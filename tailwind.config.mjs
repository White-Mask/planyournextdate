/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				coral: '#FF6F61',
				rose: '#F7CAC9',
				secondaryRose: '#E08C5D',
				cream: '#FFF5E1',
				blueGray: '#A8D0DB',
				gold: '#FFD700',
			},
		},
	},
	plugins: [],
}
