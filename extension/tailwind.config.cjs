/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js, jsx, ts, tsx}"],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'bermuda': '#78dcca',
			'crimson': 'crimson'
		}
	},
	plugins: [],
}