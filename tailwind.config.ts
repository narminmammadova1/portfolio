// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;








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
        // 'custom2': '4px -4px 10px 10px #923284', 
      },
      boxShadow:{
        // shadowCustom:'0px 10px 20px #923284',
      //  shadowCustom:"0 -6px 12px #923284",
       shadowCustom: '0 4px 32px rgba(146, 50, 132, 0.6)', // Mor renk

      },
      colors:{
        purplemain:"#923284"
      },
      
    },
  },
  plugins: [],
}


