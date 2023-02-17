/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mxtablet': '577px',
        'mxtablet800': '800px',
        'mxtablet900': '900px',
        'mxtablet1000': '1000px',
        'mxdesktop1280': '1280px',
        'minh6': {'raw': '(min-height: 600px) and (max-width:576px)'},
        'minh7': {'raw': '(min-height: 700px) and (max-width:576px)'},
        'minh75': {'raw': '(min-height: 750px) and (max-width:576px)'},
        'minh8': {'raw': '(min-height: 800px) and (max-width:576px)'},
        'minh85': {'raw': '(min-height: 850px) and (max-width:576px)'},
        'minh9': {'raw': '(min-height: 900px) and (max-width:576px)'},
        'minh10w57': {'raw': '(min-height: 1000px) and (min-width:577px)'},
        'minh11w57': {'raw': '(min-height: 1100px) and (min-width:577px)'},
        'minh12w57': {'raw': '(min-height: 1200px) and (min-width:577px)'},
        'minh13w57': {'raw': '(min-height: 1300px) and (min-width:577px)'},
      },
      backgroundColor: {
        "purple100" : "#0C0015",
        "purple900" : "#8033CE",
        "black900" : "#272727",
        "black90010": "#2727271A",
        "white900": "#D9D9D9",
        "gray900": "#535353",
        "gray90050": "#3F3F3F80",
      },
      colors: {
        "purple_100" : "#0C0015",
        "purple_900" : "#8033CE",
        "black_900" : "#272727",
        "black_90010": "#2727271A",
        "white_900": "#D9D9D9",
        "gray_900": "#535353",
        "gray_90050": "#3F3F3F80",
      },
      blur: {
        xxl: '100px',
      },
      backdropBlur: {
        xll: '25px',
      }
    },
  },
  plugins: [],
}
