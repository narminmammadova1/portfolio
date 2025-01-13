import Image from 'next/image'
import React, { useState } from 'react'

const ProjectForm = () => {
  const [projectData, setProjectData] = useState({
    link: '',
    id: '',
    image: ""
  });


  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    // const uniqueId=new Date().getTime().toString()
 
    
    setProjectData({
      link: '',
      id: '',
      image: ''
    });
  };
  return (
    <div className='flex justify-center items-center flex-col'>
        <h1 className='text-white'>Add Projects</h1>
        <form onSubmit={handleSubmit} className='flex flex-col w-2/3 p-4 items-center gap-4' action="">
            <input className='py-2 w-full rounded-md px-2' type="text"
            value={projectData.link}
            onChange={(e)=>{setProjectData({...projectData,link:e.target.value})}}
            placeholder='project name'/>
            <div  className='w-full items-center relative  flex flex-col' >
            <input className='w-[60px] opacity-0  z-10'
            value={projectData.image}
            onChange={(e) => setProjectData({ ...projectData, image: e.target.value })}

            type="file" />
            <Image className=' absolute top-[-15px] w-[60px] h-[60px]' src="icons/upload.svg" width={200} height={200} alt='...'/>
            <label className='mt-4 text-white' htmlFor="">download image</label>
            </div>
            <div className='w-[100px] h-[100px] bg-slate-500'>
                <Image src="icons/upload.svg" width={200} height={200} alt='...'/>
            </div>
            {/* <input type="text" placeholder='project link' /> */}
            <button  className="w-full py-2 bg-purplemain rounded-md" type="submit">Add Project</button>
        </form>
      
    </div>
  )
}

export default ProjectForm
