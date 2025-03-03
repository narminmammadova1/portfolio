import { useAnimatedStyles } from '@/hooks/useAnimated'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {animated} from "react-spring"




const Projects = () => {
const {t,i18n}=useTranslation()

// const [projectsData, setProjectsData] = useState<Project[]>([])

useEffect(() => {
  const storedLang = localStorage.getItem('language');
  if (storedLang) {
    i18n.changeLanguage(storedLang); 
  }
}, [i18n]);

const projectsData=[{
  id:1,
  image:"/logo.svg" ,
  link:"https://foody-app-pearl.vercel.app/"
},
{
  id:2,
  image:"/w1.jpg",
  link:"https://weather-nu-navy-26.vercel.app/"
},

{
  id:3,
  image:"/Lemonlogo.svg",
  link:"https://little-lemon-two-blush.vercel.app/"
},
{
  id:4,
  image:"/getgifs4.jpg",
  link:"https://narminmammadova1.github.io/getGif/"
},
{
  id:5,
  image:"/mycanvas.jpg",
  link:"https://canvas-tau-taupe.vercel.app/"
},


]





const { getSpringStyles, setHoveredId,hoveredId} = useAnimatedStyles();


return (
  <div>
     <section id="projects" className=" ">
  <div className=" ">
    <h1 className="text-purplemain drop-shadow-custom text-center">{t("My Projects")}</h1>
  
       <div className="  lg:flex lg:gap-10 mt-10 px-10 lg:px-0  lg:justify-around">
    
{projectsData.map((project)=>(
 <animated.div key={project.id} style={getSpringStyles(project.id)} className="w-3/4 mx-auto  mb-10 lg:w-1/3 border-none  relative h-[150px] lg:h-[150px] flex-col jus rounded-lg overflow-hidden"
 
 onMouseEnter={()=>setHoveredId(project.id)}
 onMouseLeave={()=>setHoveredId(null)}
 >
      
       <Image src={project.image} width={250} 
        height={200} alt="" 
        // objectFit='cover'
        className=' min-w-full h-[150px] lg:h-[150px]'/>
     
        
        {hoveredId===project.id && (    <a href={project.link} target='_blank' rel='noopener norefferer'>     
           <button className='  px-6 m-4 text-white absolute bottom-2  border-2 border-purplemain rounded-md'>{t("view")}</button>  </a>
)}
      
       
       </animated.div>



))}



       </div>
  </div>
 </section>
  </div>
)
}

export default Projects

