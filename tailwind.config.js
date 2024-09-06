/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img1': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 50.12%, rgba(253, 156, 2, 0) 50.12%, #FD9C02 100%)',
        'img2':'linear-gradient(180deg, rgba(0, 0, 0, 0) 50.11%, rgba(220, 34, 90, 0) 50.11%, #DC225A 100%)',
        'img3':'linear-gradient(180deg, rgba(0, 0, 0, 0) 50.11%, rgba(35, 78, 255, 0) 50.11%, #234EFF 100%)',
        'img4':'linear-gradient(180deg, rgba(0, 0, 0, 0) 50.11%, rgba(35, 78, 255, 0) 50.11%, #3babd9 100%)',

      },
     
    },
  },
  plugins: [],
}

