module.exports = {
  // mode: "jit",
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ["./**/*.vue"],
  theme: {
    extend: {
      colors: {
        "plt-yellow": "#fab708",
        "plt-white": "#eeeeee",
        "plt-dark": "#333333",
        "plt-darker": "#272727"
      }
    }
  },
  variants: {},
  plugins: []
};
