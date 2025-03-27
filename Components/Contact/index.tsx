import { useAnimatedStyles } from '@/hooks/useAnimated';
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { FaGithub,  } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { animated } from 'react-spring';
import { toast } from 'react-toastify';




interface FormElements extends HTMLFormControlsCollection {
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const Contact = () => {

  const {t,i18n}=useTranslation()
  const { getSpringStyles, setHoveredId} = useAnimatedStyles();


  
useEffect(() => {
  const storedLang = localStorage.getItem('language');
  if (storedLang) {
    i18n.changeLanguage(storedLang); 
  }
}, [i18n]);

const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  const formElements = e.currentTarget.elements as FormElements; 
const formData={
  firstName: formElements.firstName.value,
  lastName: formElements.lastName.value,
  email: formElements.email.value,
  phone: formElements.phone.value,
  message: formElements.message.value,

}

try{
const response=await fetch("https://formspree.io/f/xrbznwqr",{
method:"POST",
headers:{
  "Content-Type":"application/json",
  Accept:"application.json"
},
body:JSON.stringify(formData)
})


if(response.ok){
  toast.success(t("Thank you! We will get back to you soon."))
  console.log("successss");
  
  if (e.currentTarget) {
    e.currentTarget.reset();
  }}
else{
  const errorMessage = await response.text();
  throw new Error(errorMessage || "Error");
}
}
catch(err){console.log(err);

  toast.error(t("Error:Please try again later."))
}

}

  return (
    <div>
       <section id="contact" className=' '>
       <h1 className=' text-center text-purplemain drop-shadow-custom '>{t("Contact Me")}</h1>
<div className=' lg:flex mt-10'>
    <div className="lg:flex-1 flex  justify-between  lg:flex-col lg:p-6">
      {/* <a href="">
    <button className='mb-6 w-16 h-16 lg:w-20 lg:h-20 border cursor-pointer  rounded-full  flex items-center justify-center border-gray-700 shadow-shadowCustom' >
    <FaInstagramSquare className='text-4xl text-purplemain' />
      </button>
      </a> */}
      <a target='blank' href="https://github.com/narminmammadova1">
            <button className='mb-8 w-16 h-16 lg:w-20 lg:h-20 border cursor-pointer  rounded-full  flex items-center justify-center border-gray-700 shadow-shadowCustom'>
            <FaGithub  className='text-4xl  text-purplemain'  />
              </button>
              </a>
              <a href="">
            <button className='mb-8 w-16 h-16 lg:w-20 lg:h-20 border cursor-pointer  rounded-full  flex items-center justify-center border-gray-700 shadow-shadowCustom'>
            <FaUpwork   className='text-4xl  text-purplemain' />
              </button>
              </a>
              <a href="">
            <button  className='mb-8 w-16 h-16 lg:w-20 lg:h-20 border cursor-pointer  rounded-full  flex items-center justify-center border-gray-700 shadow-shadowCustom'>
            <TbBrandFiverr  className='text-4xl  text-purplemain'  />

              </button>
              </a>
    </div>
    <animated.div style={getSpringStyles(1)} className=' flex flex-col flex-1  rounded-lg'
    
    onMouseEnter={() => setHoveredId(1)}
    onMouseLeave={() => setHoveredId(null)}    >
      <form id="contactForm" onSubmit={handleSubmit} method="POST" className='flex flex-col rounded-lg px-6 py-2'>
        <input type="text" name="firstName" className=''  placeholder={t("First name")}  required/>
        <input type="text" name="lastName" placeholder={t("Last name")}  required />

        <input type="email" name="email" placeholder={t("Email address")} required />

        <input type="phone" name="phone" placeholder={t("Phone Number")}  required />

<textarea  placeholder={t('Write message here')} name="message"   required id=""/>
<button type="submit" id="formBtn" className='  bg-purplemain p-[15px]  rounded-full text-white font-medium text-2xl'>{t("Send Message")}</button>
      </form>
    </animated.div>
    </div>
   </section>
    </div>
  )
}

export default Contact
