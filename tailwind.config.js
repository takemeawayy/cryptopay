/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			maxWidth: {
				container: 'var(--payment-width)'
			},
			borderRadius: {
				default: 'var(--border-radius)'
			}
		}
	},
	plugins: []
}
