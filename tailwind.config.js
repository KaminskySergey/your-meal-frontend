/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                nunito: ['Nunito', 'sans - serif'],
            },
            colors: {
                orange: "#FFAB08",
                orangeRed: "#FF7020",
                grayDark: "#F2F2F3",
                grayWhite: "#F9F9F9",
                green: "#28e728",

            },

            screens: {
                xs: '320px',
                sm: '768px',
                md: '1024px',
                lg: '1280px',
                xl: '1440px',
            },
        },
    },
    plugins: [],
}