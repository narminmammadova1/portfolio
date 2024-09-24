import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div>
       <section id="projects" className=" mt-40">
    <div className=" ">
      <h1 className="text-purplemain drop-shadow-custom text-center">My Projects</h1>
      {/* <p>Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. Quos, sed expedita! Quasi vitae porro nobis aliquam doloribus animi? 
        Rem ab consequatur, quasi sunt */}
         {/* molestias temporibus laboriosam alias delectus voluptatum omnis.</p> */}
         <div className="flex gap-10 mt-10  justify-around">
         <div className="px-4 w-1/3  relative h-[250px] flex-col justify-between rounded-lg bg-slate-200 overflow-hidden">
        
         <Image src="/logo.svg" width={250} 
          height={200} alt="" 
          // objectFit='cover'
          className='  min-w-full  h-[250px]'/>
       
          <a href="https://foody-app-pearl.vercel.app/" target='_blank' rel='noopener norefferer'>
          
          <button className='px-6 text-white absolute bottom-2 bg-purplemain rounded-md'>view</button>
          </a>
         
         </div>
         <div className=" w-1/3  relative h-[250px] flex-col justify-between rounded-lg bg-slate-200 overflow-hidden">
        
        <Image src="/getgifs4.jpg" width={250} 
         height={200} alt="" 
         // objectFit='cover'
         className='  min-w-full  h-[250px]'/>
      
         <a href="https://narminmammadova1.github.io/getGif/" target='_blank' rel='noopener norefferer'>
         
         <button className='px-6 mx-6 text-white absolute bottom-2 bg-purplemain rounded-md'>view</button>
         </a>
        
        </div>
        <div className="px-4 w-1/3  relative h-[250px] flex-col justify-between rounded-lg bg-slate-200 overflow-hidden">
        
         <Image src="/Lemonlogo.svg" width={250} 
          height={200} alt="" 
          // objectFit='cover'
          className='  min-w-full  h-[250px]'/>
       
          <a href="https://little-lemon-two-blush.vercel.app/" target='_blank' rel='noopener norefferer'>
          
          <button className='px-6 text-white absolute bottom-2 bg-purplemain rounded-md'>view</button>
          </a>
         
         </div>

         </div>
    </div>
   </section>
    </div>
  )
}

export default Projects
