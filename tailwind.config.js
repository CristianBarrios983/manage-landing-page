/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  // El objeto theme es para resetear la configuracion por defecto, limitandose solo a las propiedades o clases que definamos aca
  theme: {

    // El objeto extend es para agregar nuevas propiedades a tailwind
    extend: {

      fontFamily: {
        "vietnamPro": ['"Be Vietnam Pro"', 'sans-serif']
      },

      colors: {
        "bright-red": "hsl(12, 88%, 59%)",
        "dark-blue": "hsl(228, 39%, 23%)",
        "dark-grayish-blue": "hsl(227, 12%, 61%)",
        "very-dark-blue": "hsl(233, 12%, 13%)",
        "very-pale-red": "hsl(13, 100%, 96%)",
        "very-light-gray": "hsl(0, 0%, 98%)"
      },

      backgroundImage: {
        "close-menu": "url('../images/icon-close.svg')",
        "open-menu": "url('../images/icon-hamburger.svg')"
      }

    },
  },
  plugins: [],
}

