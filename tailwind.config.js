module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "640px",
        smd: "660px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      width: {
        300: "300px",
        120: "30rem",
        lineBig: "70%",
      },
      height: {
        300: "300px",
        120: "40rem",
        lineBig: "50%",
      },
    },
    borderRadius: {
      large: "50px",
      full: "9999px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
