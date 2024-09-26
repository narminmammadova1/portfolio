import { useAnimatedStyles } from '@/hooks/useAnimated';
import Image from 'next/image'
import React from 'react'
import { animated } from 'react-spring';

const About = () => {
  const { ColorChangeText} = useAnimatedStyles();



  return (
    <div>
  <section id="about" className="flex  ">
    <div className="text-white w-1/2 ">
      <animated.h1 style={ColorChangeText} className=" drop-shadow-custom">I AM A WEB  DEVELOPER</animated.h1>
      <p className=' text-[18px]' >Hi! I'm <strong className='text-purplemain'>Narmin</strong> and I have been involved in web design and 
        development for the past two years. During this time, 
        I have focused on creating user-friendly and visually
         appealing websites that are compatible with both mobile
          and desktop platforms.

I take responsibility in my work and strive to complete projects on time.
 Customer satisfaction is always my top priority.
  You can explore my portfolio and CV to get a better idea of my work.

</p>
          <div className="flex gap-6 items-center">
            <a href="/CV/Mammadova_Narmin_CV.pdf"
            download="Mammadova_Narmin_CV.pdf"
            
            
            >
            <button 
            
            className="rounded-xl px-3 py-2 mt-10 bg-purplemain">Download CV</button>

            </a>

            <a href="/CV/Mammadova_Narmin_CV.pdf"
            target='_blank'
            rel='noopener norefferer'

            
            >
            <button 
            
            className="rounded-xl px-8 py-2 mt-10 bg-purplemain">View CV</button>

            </a>
            
         
           
          </div>
    </div>
    <div className="w-1/2 flex items-start justify-center">
    <div className="w-[200px] h-[200px]  shadow-shadowCustom rounded-full sh bg-black">
<Image width={200} height={200} src="" alt="image"></Image>
    </div>
    </div>
   </section>
      
    </div>
  )
}

export default About
