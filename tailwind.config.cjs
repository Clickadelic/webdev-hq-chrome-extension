/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./views/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
			}
		},
	},
	plugins: [],
}