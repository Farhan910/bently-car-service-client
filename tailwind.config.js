module.exports = {
  content: ["./src/**/*.{html,js}" , "./node_modules/flowbite/**/*.js"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EC994B",
          secondary: "#4D4C7D",
          accent: "#37cdbe",
          neutral: "#28AAA9",
          "base-100": "#141E27",
        },
      },
      
    ],
  },
  plugins: [require("daisyui") , require('flowbite/plugin')],
}
