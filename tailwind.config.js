module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        "9xl": "7.5rem",
      },
      colors: {
        ltblack: "#20201e",
        cblack: "#7a7a78",
        dkgreen: "#b9baa3",
        offwhite: "#f0efe3",
        dkorange: "#bd543a",
        ltorange: "#ec8146",
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
        "fade-in-left": "fade-in-left 0.3s ease-out",
        "fade-in-down": "fade-in-down 0.3s ease-out",
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
