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
