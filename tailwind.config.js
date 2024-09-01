/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        text: "rgba(var(--text))",
        card: "rgba(var(--card))",
      },
      width: {
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
        168: "42rem",
        176: "44rem",
        184: "46rem",
        288: "72rem",
      },
      height: {
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
        168: "42rem",
        176: "44rem",
        184: "46rem",
        288: "72rem",
      },
      dropShadow: {
        glow: [
          "0 0px 10px rgba(255,255, 255, 0.35)",
          "0 0px 30px rgba(255, 255,255, 0.2)"
        ]
      },
      borderRadius: {
        xl: "1rem",
      },
      lineHeight: {
        16: "4rem",
        24: "6rem",
        28: "7rem",
      },
      animation: {
        openMenu: "slideLeft 0.3s ease-out",
        closeMenu: "slideRight 0.3s ease-in",
        typewriter: "typewriter 2s steps(18) forwards",
        caret:
          "typewriter 2s steps(18) forwards, blink 1s steps(18) infinite 2s",
        fadeLeft: "fadeLeft 0.6s ease-out",
        fadeRight: "fadeRight 0.6s ease-out",
        fadeUp: "fadeUp 0.6s ease-out",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(100%)", opacity: 0.1 },
          "50%": { transform: "translateX(50%)", opacity: 0.5 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideRight: {
          "0%": { transform: "translateX(0%)", opacity: 1 },
          "50%": { transform: "translateX(50%)", opacity: 0.5 },
          "100%": { transform: "translateX(100%)", opacity: 0.1 },
        },
        fadeLeft: {
          "0%": { transform: "translateX(20%)", opacity: 0.1 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        fadeRight: {
          "0%": { transform: "translateX(-20%)", opacity: 0.1 },
          "100%": { transform: "translateX(0%)", opacity: 1 },
        },
        fadeUp: {
          "0%": { transform: "translateY(20%)", opacity: 0.1 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
