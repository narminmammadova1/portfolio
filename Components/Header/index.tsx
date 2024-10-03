import { useTranslation } from 'react-i18next'

import { useDropDown } from '@/hooks/useDropDown'
import Image from 'next/image'
import React, { useEffect } from 'react'

const Header = () => {
const  {openLangDiv,closeLangDiv,isOpen}=useDropDown()

const {t,i18n}=useTranslation()

const changeLanguage = (lang:string) => {
  i18n.changeLanguage(lang);
  localStorage.setItem('language', lang); 
  closeLangDiv(); 
}



useEffect(() => {
  const storedLang = localStorage.getItem('language');
  if (storedLang) {
    i18n.changeLanguage(storedLang); 
  }
}, [i18n]);

// const  handleChangeLanguage=(lang,i18n:any)=>{
//  i18n.changeLanguage(lang)
// }
  return (
    <div>
       <header className="flex justify-between items-center me-0 py-6 lg:py-0  md:me-24">
     <div className="hidden md:hidden lg:block  ">
    <Image className="w-[300px]  "  width={200} height={200} src="/png/mn2.png" alt="logo"/>
    </div>

    {/* aktiv dil:{i18n.language} */}
     <nav className=' ' >
       <ul className="flex text-sm md:text-2xl lg:text-2xl gap-2 md:gap-6 lg:gap-6 text-white">
       <li><a href="#about">{t(" About me")}</a>
       </li>
       <li><a href="#projects">{t("Projects")}</a></li>
       <li><a href="#certificates"> {t("Certificates")}</a></li>
      <li><a href="#skills"> {t("Skills")}</a></li>
       <li><a href="#contact"> {t("Contact")}</a></li>
      </ul>
 </nav>
 <div>
  <div className='right-3 md:right-8 lg:right-14 z-10 absolute top-6 lg:top-16  items-center justify-center flex-col '>
  <div onClick={openLangDiv} className='cursor-pointer self-center m-auto  w-6 h-6  '>
    <Image src={`/${i18n.language==="az" ? "az" :i18n.language==="ru" ? "ru" : "en" }.jpg`} className=' object-cover   rounded-full w-6 h-6'  width={200} height={200} alt="lang"/>
  </div>

  {isOpen && ( <div className=' cursor-pointer z-20  border-2 border-zinc-400 rounded-lg    flex-col   mt-1 '>
    <Image onClick={()=>changeLanguage("en")
 
   } 
      // handleChangeLanguage("az",i18n)
src="/en.jpg" className='cursor-pointer object-cover  mb-2 mt-2 rounded-full w-6 h-6'  width={200} height={200} alt="lang"/>

 <Image onClick={()=>changeLanguage("ru")
 
} 
      // handleChangeLanguage("az",i18n)
src="/ru.jpg" className=' cursor-pointer object-cover  mb-2  rounded-full w-6 h-6'  width={200} height={200} alt="lang"/> 
 


    <Image onClick={()=>changeLanguage("az")
 
} 
      // handleChangeLanguage("az",i18n)
src="/az.jpg" className='cursor-pointer object-cover  bg-gray-300 mb-2  rounded-full w-6 h-6'  width={200} height={200} alt="lang"/>


  </div>)}

  </div>
 
 
 

  <div></div>
 </div>
   </header>

   
   
    </div>
  )
}

export default Header
