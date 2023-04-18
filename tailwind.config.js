/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      // '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        f1: ["Oleo Script Swash Caps", "sans-serif"],
        libre: ["Libre Baskerville", "sans-serif"],
      },
      colors: {
        c1: "#1cae4d",
        c2: "#D5A112",
        c3: "#FCC295",
        c4: "#CC393D",
        c5: "#494A43",
        c6: "#D7D8D6",
        c7: "#F3F4F6",
        c8: "#67c965",
        c9: "#40413B",
        c10: "#F4F4F4",
        h1: "#40413B",
        h2: "#ffffff",

        d1: "#F9862D",
        d2: "#D5A112",
        d3: "#1266AC",
        d4: "#CC393D",
        d5: "#A5A5A5",
        d6: "#D7D8D6",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
        5000: "5000ms",
      },
      animation: {
        beat: "beat 1s ease-out infinite",
        cart: "cart 2s ease-in forwards infinite",
        box: "box 2s ease-in forwards",
        list: "list 2s ease-in forwards infinite",
        addcart: "addcart 2s ease-in forwards",
        added: "added 2s ease-in forwards",
      },
      keyframes: {
        beat: {
          "0%,100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.2)" },
        },
        cart: {
          "0%": { left: "-10%" },
          "40%,60%": { left: "50%" },
          "100%": { left: "110%" },
        },
        box: {
          "0%,40%": { top: "-20%" },
          "60%": { top: "36%", left: "53%" },
          "100%": { top: "40%", left: "112%" },
        },
        list: {
          "0%": { left: "0%" },
          "40%,60%": { left: "50%" },
          "100%": { left: "100%" },
        },
        addcart: {
          "0%, 30%": { opacity: 1 },
          "30%, 100%": { opacity: 0 },
        },
        added: {
          "0%, 80%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
