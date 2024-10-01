import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { FaGithub,  FaInstagramSquare  } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

const Contact = () => {

  const {t,i18n}=useTranslation()


  
useEffect(() => {
  const storedLang = localStorage.getItem('language');
  if (storedLang) {
    i18n.changeLanguage(storedLang); // LocalStorage'dan dil al
  }
}, [i18n]);
  return (
    <div>
       <section id="contact" className=' '>
       <h1 className=' text-center text-purplemain drop-shadow-custom '>{t("Contact Me")}</h1>
<div className='flex mt-10'>
    <div className="flex-1 flex-col p-6">
    <button className='mb-6 w-20 h-20 border cursor-pointer  rounded-full  flex items-center justify-center border-gray-700 shadow-shadowCustom' >
    <FaInstagramSquare className='text-4xl text-purplemain' />
      </button>
            <button className='mb-8 w-20 h-20 border cursor-pointer  rounded-full  flex items-center justify-center border-gray-700 shadow-shadowCustom'>
            <FaGithub  className='text-4xl  text-purplemain'  />
              </button>
            <button className='mb-8 w-20 h-20 border cursor-pointer  rounded-full  flex items-center justify-center border-gray-700 shadow-shadowCustom'>
            <FaUpwork   className='text-4xl  text-purplemain' />
              </button>
            <button className='mb-8 w-20 h-20 border cursor-pointer  rounded-full  flex items-center justify-center border-gray-700 shadow-shadowCustom'>
            <TbBrandFiverr  className='text-4xl  text-purplemain'  />

              </button>
    </div>
    <div className=' flex flex-col flex-1  shadow-shadowCustom rounded-lg'>
      <form id="contactForm" action="" className='flex flex-col rounded-lg px-6 py-2'>
        <input type="text" className=''  placeholder={t("First name")}/>
        <input type="text" placeholder={t("Last name")} />

        <input type="email" placeholder={t("Email address")} />

        <input type="phone" placeholder={t("Phone Number")} />

<textarea  placeholder={t('Write message here')} name="" id=""></textarea>
<button  id="formBtn" className='  bg-purplemain p-[15px]  rounded-full text-white font-medium text-2xl'>{t("Send Message")}</button>
      </form>
    </div>
    </div>
   </section>
    </div>
  )
}

export default Contact
