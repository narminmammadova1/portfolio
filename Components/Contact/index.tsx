import React from 'react'
import { FaGithub,  FaInstagramSquare  } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

const Contact = () => {
  return (
    <div>
       <section id="contact" className=' '>
       <h1 className=' text-center text-purplemain drop-shadow-custom '>Contact Me</h1>
<div className='flex mt-10'>
    <div className="flex-1 flex-col p-6">
    <div className='mb-6 w-20 h-20 border cursor-pointer  rounded-full  flex items-center justify-center border-gray-700 shadow-shadowCustom' >
    <FaInstagramSquare className='text-4xl text-purplemain' />
      </div>
            <div className='mb-8 w-20 h-20 border cursor-pointer  rounded-full  flex items-center justify-center border-gray-700 shadow-shadowCustom'>
            <FaGithub  className='text-4xl  text-purplemain'  />
              </div>
            <div className='mb-8 w-20 h-20 border cursor-pointer  rounded-full  flex items-center justify-center border-gray-700 shadow-shadowCustom'>
            <FaUpwork   className='text-4xl  text-purplemain' />
              </div>
            <div className='mb-8 w-20 h-20 border cursor-pointer  rounded-full  flex items-center justify-center border-gray-700 shadow-shadowCustom'>
            <TbBrandFiverr  className='text-4xl  text-purplemain'  />

              </div>
    </div>
    <div className=' flex flex-col flex-1  shadow-shadowCustom rounded-lg'>
      <form id="contactForm" action="" className='flex flex-col rounded-lg px-6 py-2'>
        <input type="text" className=''  placeholder="First name"/>
        <input type="text" placeholder="Last name" />

        <input type="email" placeholder="Email address" />

        <input type="phone" placeholder="Phone Number" />

<textarea  placeholder='Write message here' name="" id=""></textarea>
<button className='  bg-purplemain p-[15px]  rounded-full text-white font-medium text-2xl'>Send Message</button>
      </form>
    </div>
    </div>
   </section>
    </div>
  )
}

export default Contact
