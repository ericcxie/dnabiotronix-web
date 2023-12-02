/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/SH_doublehelix_01.svg')",
      },
      colors: {
        "theme-blue": {
          50: "#ebf9ff",
          100: "#d2f2ff",
          200: "#aee9ff",
          300: "#77deff",
          400: "#37c9ff",
          500: "#09a7ff",
          600: "#0082ff",
          700: "#0069ff",
          800: "#0055d6",
          900: "#014da7",
          950: "#072e64",
        },
      },
    },
  },
  plugins: [],
};
