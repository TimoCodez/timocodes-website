module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  green: {
			300: '#86efac',
			400: '#4ade80',
			500: '#22c55e',
		  },
		  purple: {
			400: '#c084fc',
			500: '#a855f7',
			600: '#9333ea',
		  },
		  gray: {
			700: '#374151',
			800: '#1f2937',
			900: '#111827',
		  },
		},
		fontFamily: {
		  mono: ['Roboto Mono', 'monospace'],
		},
	  },
	},
	plugins: [],
  }