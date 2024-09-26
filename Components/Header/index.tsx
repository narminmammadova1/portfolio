import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
       <header className="flex justify-between items-center  me-24">
     <div className="   ">
    <Image className="w-[300px]  "  width={200} height={200} src="/png/mn2.png" alt="logo"/>
    </div>
     <nav className=' ' >
       <ul className="flex text-2xl gap-6 text-white">
       <li><a href="#about"> About me</a>
       </li>
       <li><a href="#projects">Projects</a></li>
       <li><a href="#certificates"> Certificates</a></li>
      <li><a href="#skills"> Skills</a></li>
       <li><a href="#contact"> Contact</a></li>
      </ul>
 </nav>
   </header>
    </div>
  )
}

export default Header
