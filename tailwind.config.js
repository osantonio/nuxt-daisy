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
        dawn: {
          "primary": "#d7827e",
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
        rosepine: {
          "primary": "#ea9a97",
          "secondary": "#3e8fb0",
          "accent": "#eb6f92",
          "neutral": "#393552",
          "base-100": "#191724",
          "info": "#9ccfd8",
          "success": "#c4a7e7",
          "warning": "#f6c177",
          "error": "#b4637a",
        },
      },
      {
        adatar: {     
          "primary": "#0a962f",
          "secondary": "#879b07",
          "accent": "#eaea67",
          "neutral": "#1D1B22",
          "base-100": "#F8F4FA",
          "info": "#5484F2",
          "success": "#61EAC1",
          "warning": "#DF8911",
          "error": "#E86045",
        },
      },
      {
        lofi2: {        
          "primary": "#0D0D0D",        
          "secondary": "#1A1919",        
          "accent": "#262626",        
          "neutral": "#000000",        
          "base-100": "#FFFFFF",
          "info": "#0072F5",
          "success": "#21CA51",       
          "warning": "#FF6052", 
          "error": "#DE1B8D",
        },
      },
    ],
  },
}
