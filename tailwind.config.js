module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ltblack: "#20201e",
        cblack: "#7a7a78",
        dkgreen: "#b9baa3",

        offwhite: "#d6d5c9",
        orange: "#ff6600",
        crimson: "#e32636",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.2s ease-out ",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-in-right": "fade-in-right 0.5s ease-out",
        "fade-in-left": "fade-in-left 0.5s ease-out",
      },
    },

    fontFamily: {
      body: ["Space Grotesk"],
      headline: ["Montserrat"],
      display: ["Helvetica"],
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
};
