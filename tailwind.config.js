import colors from "tailwindcss/colors"

/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            fontWeight: {
                extrablack: 1000,
            },
        },
        colors: {
            gray: colors.zinc,
            primary: {
                DEFAULT: colors.amber[500],
                light: colors.amber[400],
            },
        },
        fontFamily: {
            sans: ["Recursive"],
            bubblegum: ["Bubblegum Sans"],
        },
        container: {
            center: true,
            padding: "1rem",
        },
    },
}
