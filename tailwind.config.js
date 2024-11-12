/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            animation: {
                'spin': 'spin 1s linear infinite',
                'gradient': 'gradient 3s ease infinite',
            },
        },
    },
    plugins: [],
}