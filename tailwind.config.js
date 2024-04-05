/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                reem: ['Reem Kufi Fun', 'sans-serif'],
            },

            colors: {
                primary: '#262b2f',
                secondary: '#f7b500',
            },
        },
    },

    plugins: [],
}
