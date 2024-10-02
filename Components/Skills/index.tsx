import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { FaHtml5, FaCss3Alt,FaJs,FaReacteurope, FaGithub, FaGitAlt, FaTrello } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const Skills = () => {

    const {t,i18n}=useTranslation()

    
useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      i18n.changeLanguage(storedLang); // LocalStorage'dan dil al
    }
  }, [i18n]);
  return (
    <div>
   <section id="skills" className=" text-white">
    <div className=" ">
    <h1 className="text-purplemain drop-shadow-custom text-center">{t("My Skills")}</h1>
    <div className=" skillsDiv mt-10 flex flex-wrap gap-2 justify-center lg:justify-around">
    <div className=' bg-gray-700   w-20 h-20 rounded-full flex flex-col  justify-center items-center'>
    <FaHtml5 className=' text-2xl'/>
      Html</div>
    <div  className='bg-gray-700    w-20 h-20 rounded-full flex flex-col  justify-center items-center'>
    <FaCss3Alt className=' text-2xl'/>
        CSS</div>
    <div className='bg-gray-700    w-20 h-20 rounded-full flex flex-col  justify-center items-center'>
    <FaJs className=' text-2xl' />
        Javascript</div>
    <div className='bg-gray-700    w-20 h-20 rounded-full flex flex-col  justify-center items-center'>
    <SiTypescript className=' text-2xl' />

        TypeScript</div>
    <div className='bg-gray-700   w-20 h-20 rounded-full flex flex-col  justify-center items-center'><FaReacteurope />

        React</div>
    <div className='bg-gray-700  w-20 h-20 rounded-full flex flex-col  justify-center items-center'>
    <RiNextjsLine className=' text-2xl' />
        Next.js</div>
    <div className='bg-gray-700   w-20 h-20 rounded-full flex flex-col  justify-center items-center'>
    <RiTailwindCssFill  className=' text-2xl'/>

        Tailwind</div>
    <div className='bg-gray-700    w-20 h-20 rounded-full flex flex-col  justify-center items-center'>
    <FaGithub className=' text-2xl' />

        Github</div>
    <div className='bg-gray-700   w-20 h-20 rounded-full flex flex-col  justify-center items-center'>
    <FaGitAlt className=' text-2xl'/>

        Git</div>
    <div className='bg-gray-700   w-20 h-20 rounded-full flex flex-col  justify-center items-center'>
    <FaTrello className=' text-2xl' />

        Trello</div>
    </div>
    </div>
   </section>

    </div>
  )
}

export default Skills
