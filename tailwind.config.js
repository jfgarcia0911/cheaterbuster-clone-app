/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}", // if using Next.js 13+ with app router
	],
	theme: {
		extend: {
			fontFamily: {
				serif: ["Roboto Condensed", "sans-serif"],
				expanded: ["Bebas Neue", "sans-serif"],
			},
		},
	},
  safelist: [
    'border-red-500',
    'border-yellow-500',
    'border-blue-500',
    'border-gray-500',
    'text-red-500',
    'text-yellow-500',
    'text-blue-500',
    'text-gray-500',
    // also add if you need hover/focus variants
  ],
 

	plugins: [],
};
