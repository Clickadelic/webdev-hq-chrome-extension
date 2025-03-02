/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js, jsx, ts, tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", "Helvetica", "Arial", "sans-serif"]
			},
			dropShadow: {
				glow: ["0 0px 20px rgba(255,255, 255, 0.35)", "0 0px 65px rgba(255, 255,255, 0.2)"]
			}
		}
	},
	plugins: []
};
