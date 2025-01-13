import AboutMeForm from '@/Components/Forms/aboutmeForm'
import CertificateForm from '@/Components/Forms/certificateForm'
import ProjectForm from '@/Components/Forms/projectForm'
import SkillForm from '@/Components/Forms/skillForm'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
const Admin = () => {

  type FormType="project" |"skill" |"certification" |"aboutme" | null

const [selectedForm,setSelectedForm]=useState<FormType>(null)


const handleButtonClick=(form:FormType)=>{
    setSelectedForm(form)
}





  return (
    <div className='flex flex-col items-center'>
    <div className=' flex-col mb-2 justify-center' >
     <h1 className=' text-white mb-4 text-center'>Welcome Admin</h1>   
<div className=' '>
<button onClick={()=>{handleButtonClick("project")}}  className=' py-2 button border-2  text-white rounded-md px-4 mx-2 border-purplemain'>Add Project</button>
<button  onClick={()=>{handleButtonClick("certification")}} className='  py-2 button border-2  text-white rounded-md px-4 mx-2 border-purplemain'>Add Certification</button>
<button onClick={()=>{handleButtonClick("skill")}} className='  py-2 button border-2  text-white rounded-md px-4 mx-2 border-purplemain'>Add Skill</button>
<button onClick={()=>{handleButtonClick("aboutme")}} className='  py-2 button border-2  text-white rounded-md px-4 mx-2 border-purplemain'>About Me</button>
</div>



 </div>
 <div className=' w-1/2' >
    <div className='form-container w-full'>
    {selectedForm==="project" && <ProjectForm />}
{selectedForm==="certification" && <CertificateForm/>}
{selectedForm==="skill" && <SkillForm/>}
{selectedForm==="aboutme" && <AboutMeForm/>}

    </div>
</div>
 </div>
  )
}

export default Admin
