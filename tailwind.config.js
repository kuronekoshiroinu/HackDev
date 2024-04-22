/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'first-wall': "url('/src/assets/artico.jpg')",
        'second-wall': "url('/src/assets/desierto.jpg')",
        'third-wall': "url('/src/assets/seco.jpg')",
        'fourth-wall': "url('/src/assets/templado.jpg')",
        'fifth-wall': "url('/src/assets/tropical.jpg')",
      },
    },
  },
  plugins: [],
}