module.exports = {
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      'inter': ['inter', 'sans-serif'],
      'poppins': ['poppins', 'serif'],
      'space-mono': ['space-mono'],
      'quicksand': ['quicksand', 'sans-serif'],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#9333EA",
          "secondary": "#286983",
          "accent": "#b4637a",
          "neutral": "#f2e9e1",
          "base-100": "#faf4ed",
          "info": "#56949f",
          "success": "#907aa9",
          "warning": "#ea9d34",
          "error": "#eb6f92",
        },
      },
      {
        dark: {
          "primary": "#D050B2",
          "secondary": "#286983",
          "accent": "#eb6f92",
          "neutral": "#393552",
          "base-100": "#191724",
          "info": "#9ccfd8",
          "success": "#c4a7e7",
          "warning": "#f6c177",
          "error": "#b4637a",
        },
      },
    ],
  },
}
