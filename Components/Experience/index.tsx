import { useAnimatedStyles } from '@/hooks/useAnimated'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {animated} from "react-spring"
import AnimatedSection2 from '../AnimatedSection/AnimatedSection2'
import AnimatedSection1 from '../AnimatedSection/AnimatedSection1'
import AnimatedSection3 from '../AnimatedSection/AnimatedSection3'
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
    <div className="lg:flex text-center gap-2 lg:items-center ">
      <AnimatedSection1>
      <p className="text-2xl lg:text-6xl"></p>
      </AnimatedSection1>
    <p className="text-base lg:text-2xl">{t("Years of")} <br/> {t("Experience")}</p>
    </div>
  
    <div  className="lg:flex text-center gap-2 lg:items-center "> 
     <AnimatedSection2>
      <p className="text-2xl lg:text-6xl"></p>
      </AnimatedSection2>
      <p className="text-2xl lg:text-6xl">+</p>
    <p  className="text-base lg:text-2xl" >{t("Projects")}</p></div>
   
    <div  className="lg:flex text-center gap-2 lg:items-center ">
      <AnimatedSection3>
       <p></p>
       </AnimatedSection3>
       <p className="text-2xl lg:text-6xl ">%</p>
    <p className="text-base   lg:text-2xl" >{t("Satisfaction")}<br/>{t("Guarante")}</p></div>
    </div>
   </section> 
    </div>
  )
}

export default Experience
