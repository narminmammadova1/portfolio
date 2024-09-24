// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }





/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // './app/**/*.{js,ts,jsx,tsx,mdx}',
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        'custom': '4px -6px 5px #923284',
      },
      boxShadow:{
        // shadowCustom:'0px 10px 20px #923284',
      //  shadowCustom:"0 -6px 12px #923284",
       shadowCustom: '0 4px 32px rgba(146, 50, 132, 0.6)', 

      },
      colors:{
        purplemain:"#923284"
      },
      
    },
  },
  plugins: [],
}

