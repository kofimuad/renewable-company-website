/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00b9d1",
        "accent-gold": "#ffa500",
        "background-light": "#f5f8f8",
        "background-dark": "#050505",
        "card-bg": "#121212",
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  safelist: [
    'bg-primary',
    'text-primary',
    'border-primary',
    'text-background-dark',
  ]
}