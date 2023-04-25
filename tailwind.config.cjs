/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
    'title': ['"Anton"'],  
    },
    colors: {
      'vert': '#07B845',
      'vertone': '#09A740',
      'noir': '#111827',
      'bleu': '#1767A9',
      'blanc': '#F8FAFC',
      'gris': '#F5F5F5',
      'fond': '#F4F4F5',
      'var-vert': '#16f864'
    },
    extend: {},    
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1366px',
      '3xl': '1536px',
    }
  },
  //  ajout de l'extension dasyui
  plugins: [require("daisyui")],
  // configuration optionnelle de daisyui
  
  // daisyUI config (optional)
  daisyui: {
    styled: false,
  },
}
