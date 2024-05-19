import type { Config } from "tailwindcss"
import tailwindcssAddons from "tailwindcss-addons"
import daisyui from "daisyui"

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            fontWeight: {
                extrablack: "1000",
            },
        },
        fontFamily: {
            sans: ["Recursive Variable"],
            bubblegum: ["Bubblegum Sans"],
        },
        container: {
            center: true,
            padding: "1rem",
        },
    },
    plugins: [...tailwindcssAddons(), daisyui],
    daisyui: { logs: false },
} satisfies Config
