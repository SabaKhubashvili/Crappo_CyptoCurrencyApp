module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'primary':'#0D0D2B',
        'secondary-100':'#3671E9',
        'secondary-200':'#2B076E',
        'primary-gray-200':'#4b4646',
        'primary-gray-100':'#f2f2f2ad',
        'primary-gray-50':'rgba(255, 255, 255, 0.1)',
        'primary-linear':'linear-gradient(90deg, rgba(43,7,110,1) 0%, rgba(13,13,43,1) 100%);'
      },
      colors:{
        'bg-primary':'#0D0D2B',
        'primary':'#3671E9',
        'primary-gray-50':"rgba(255, 255, 255, 0.1)"
      },
      boxShadow:{
        'secondary-100':'0px 0px 62px 0px #3671E9'
      },
      fontFamily:{
        'Rubik':['Rubik','sans-serif']
      },
      dropShadow:{
        'default':'0px 5px 18px #FFFFFF',
        'NavShadow':'0px 25px 29px 11px rgba(0,0,0,0.3)'
      },
      content:{
        'Line':'url("@/assets/svg/Direct/line.svg")',
        'arrow_bottom':'url("@/assets/svg/direct/Arrow_Bottom.svg")',
        'Etherium':'url("@/assets/images/EtheriumBG.png")'
      },
      screens:{
        xs:'480px',
        sm:'768px',
        md:'1024px'
      }
    },
  },
  plugins: [],
}