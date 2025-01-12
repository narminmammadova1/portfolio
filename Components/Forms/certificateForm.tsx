import Image from 'next/image'
import React from 'react'

const CertificateForm = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <h1 className='text-white'>Add Certifications</h1>
        <form className='flex flex-col w-2/3 p-4 items-center gap-4' action="">
            <input className='py-2 w-full rounded-md px-2' type="text" placeholder='certificate name'/>
            <input className='py-2  w-full rounded-md px-2' type="link" placeholder='certificate link'/>

            <div  className='w-full items-center relative  flex flex-col' >
            <input className='w-[60px] opacity-0  z-10' type="file" />
            <Image className=' absolute top-[-15px] w-[60px] h-[60px]' src="icons/upload.svg" width={200} height={200} alt='...'/>
            <label className='mt-4 text-white' htmlFor="">download image</label>
            </div>
            <div className='w-[100px] h-[100px] bg-slate-500'>
                <Image src="icons/upload.svg" width={200} height={200} alt='...'/>
            </div>
            {/* <input type="text" placeholder='project link' /> */}
            <button  className="w-full py-2 bg-purplemain rounded-md" type="submit">Add Certificate</button>
        </form>
      
    </div>
  )
}

export default CertificateForm
