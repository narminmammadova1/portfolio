import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
  <section id="about" className="flex mt-20">
    <div className="text-white w-1/2 ">
      <h1 className=" drop-shadow-custom">I am a web developer</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         Maiores omnis sed, eius rerum quia laboriosam deserunt, 
         praesentium veniam totam possimus quae accusantium unde 

         iusto incidunt nostrum minima commodi natus. Ducimus quis, 
         blanditiis corporis quaerat aspernatur delectus cum,
         eveniet corrupti alias sed aperiam quod pariatur id veritatis
          explicabo facilis modi quos.</p>
          <div className="flex gap-6 items-center">
            <a href="/CV/Mammadova_Narmin_CV.pdf"
            download="Mammadova_Narmin_CV.pdf"
            
            
            >
            <button 
            
            className="rounded-xl px-3 py-2 mt-10 bg-purplemain">Download Cv</button>

            </a>

            <a href="/CV/Mammadova_Narmin_CV.pdf"
            target='_blank'
            rel='noopener norefferer'

            
            >
            <button 
            
            className="rounded-xl px-8 py-2 mt-10 bg-purplemain">View Cv</button>

            </a>
            
         
           
          </div>
    </div>
    <div className="w-1/2 flex items-center justify-center">
    <div className="w-[200px] h-[200px]  shadow-shadowCustom rounded-full sh bg-black">
<Image width={200} height={200} src="" alt="image"></Image>
    </div>
    </div>
   </section>
      
    </div>
  )
}

export default About
