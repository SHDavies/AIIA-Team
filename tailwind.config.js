/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-in-kf": {
          "0%": { top: "-100%" },
          "100%": { top: "3rem" },
        },
      },
      animation: {
        "slide-in": "slide-in-kf 300ms ease-in-out",
      },
    },
  },
  plugins: [],
}
