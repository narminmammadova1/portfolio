import { useAnimatedStyles } from '@/hooks/useAnimated';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { animated } from 'react-spring';

const About = () => {
  const { ColorChangeText} = useAnimatedStyles();

  const {t,i18n}=useTranslation()


  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      i18n.changeLanguage(storedLang); 
    }
  }, [i18n]);
  return (
    <div>
  <section id="about" className="flex flex-col-reverse mt-4   md:flex-row items-center  ">
    <div className="text-white w-full text-center lg:text-start   md:w-1/2 ">
      <animated.h1 style={ColorChangeText} className=" drop-shadow-custom">{t("I AM A WEB  DEVELOPER")}</animated.h1>
      <p className=' text-[18px]' >{t("Hi! I'm ")}<strong className='text-purplemain'>{t(" Narmin.")}</strong> 
     {t("I have been involved in web design and development for the past two years.During this time,I have focused on creating user-friendly and visually appealing websites that are compatible with both mobile and desktop platforms.I take responsibility in my work and strive to complete projects on time.Customer satisfaction is always my top priority.You can explore my portfolio and CV to get a better idea of my work.")}

</p>
          <div className="flex gap-6 items-center justify-center lg:justify-start">
            <a href="/CV/Mammadova.Narmin_CV.pdf"
            download="Mammadova.Narmin_CV.pdf"
            
            
            >
            <button 
            
            className="rounded-xl  w-28  py-2 mt-10 border-2  border-purplemain">{t("Download CV")}</button>

            </a>

            <a href="/CV/Mammadova.Narmin_CV.pdf"
            target='_blank'
            rel='noopener norefferer'

            
            >
            <button 
            
            className="rounded-xl  w-28 py-2 mt-10 border-2  border-purplemain">{t("View CV")}</button>

            </a>
            
         
           
          </div>
    </div>
    <div className="lg:w-1/2 flex items-start justify-center">
    <div className="w-[200px] h-[200px] flex  shadow-shadowCustom rounded-full  justify-center bg-black">
<Image className=' w-[170px] h-[200px]   rounded-full object-cover' width={200} height={200} src="/png/me.png" alt=""></Image>
    </div>
    </div>
   </section>
      
    </div>
  )
}

export default About
