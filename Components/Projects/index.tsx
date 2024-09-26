import { useAnimatedStyles } from '@/hooks/useAnimated'
import Image from 'next/image'
import React from 'react'
import {animated} from "react-spring"
const Projects = () => {

const projectsData=[{
  id:1,
  image:"/logo.svg" ,
  link:"https://foody-app-pearl.vercel.app/"
},
{
  id:2,
  image:"/getgifs4.jpg",
  link:"https://narminmammadova1.github.io/getGif/"
},
{
  id:3,
  image:"/Lemonlogo.svg",
  link:"https://little-lemon-two-blush.vercel.app/"
}
]


const { getSpringStyles, setHoveredId,hoveredId} = useAnimatedStyles();


  return (
    <div>
       <section id="projects" className=" ">
    <div className=" ">
      <h1 className="text-purplemain drop-shadow-custom text-center">My Projects</h1>
    
         <div className="flex gap-10 mt-10  justify-around">
         {/* <div className="px-4 w-1/3  relative h-[250px] flex-col justify-between rounded-lg bg-slate-200 overflow-hidden">
        
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
         
         </div> */}

{projectsData.map((project)=>(
   <animated.div style={getSpringStyles(project.id)} className=" w-1/3 border-none  relative h-[250px] flex-col justify-between rounded-lg overflow-hidden"
   
   onMouseEnter={()=>setHoveredId(project.id)}
   onMouseLeave={()=>setHoveredId(null)}
   >
        
         <Image src={project.image} width={250} 
          height={200} alt="" 
          // objectFit='cover'
          className='  min-w-full  h-[250px]'/>
       
          <a href={project.link} target='_blank' rel='noopener norefferer'>
          {hoveredId===project.id && (          <button className='px-6 m-4 text-white absolute bottom-2 bg-purplemain rounded-md'>view</button>
)}
          </a>
         
         </animated.div>



))}



         </div>
    </div>
   </section>
    </div>
  )
}

export default Projects
