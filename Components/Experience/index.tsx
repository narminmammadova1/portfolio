import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Experience = () => {

  const {t,i18n}=useTranslation()

  
useEffect(() => {
  const storedLang = localStorage.getItem('language');
  if (storedLang) {
    i18n.changeLanguage(storedLang); // LocalStorage'dan dil al
  }
}, [i18n]);
  return (
    <div>
       <section id="experience" className="  mt-20">
    <div className="flex text-white justify-around">
    <div className="flex gap-2 items-center ">
      <p className="text-6xl">2</p>
    <p className="text-2xl">{t("Years of")} <br/> {t("Experience")}</p>
    </div>
  
    <div  className="flex  items-center "> 
      <p  className="text-6xl">10+</p>
    <p  className=" text-2xl" >{t("Projects")}</p></div>
    {/* <div  className="flex items-center "> 
      <p  className="text-6xl">60k+</p>
    <p  className=" text-2xl">Lines of <br/> Code</p></div> */}
    <div  className="flex items-center ">
       <p className="text-6xl gap-2">100%</p>
    <p className=" text-2xl" > {t("Satisfaction")}<br/> {t("Guarante")}</p></div>
    </div>
   </section> 
    </div>
  )
}

export default Experience
