/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      white:"#ffffff",
      blue:{
        10:"#010449",
        20:"#23c4ce",
        30:"#195887",
        30:"#21697a",
        40:"#aaaac5",
        50:"#15175c"
      }
    },
    fontSize: {
      lg:["22px", "37.4px"],
      'md':["14px", "24px"],
      'sm':["12px", "24px"]
    },
    extend: {},
  },
  plugins: [],
}

