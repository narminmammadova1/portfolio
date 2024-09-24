import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
       <header className="flex justify-between items-center py-2 me-36">
     <div className=" flex justify-between items-center gap-6">
    <Image className=" drop-shadow-custom "  width={200} height={200} src="/png/Nm.png" alt="logo"/>
    </div>
     <nav >
       <ul className="flex text-2xl gap-6 text-white">
       <li><a href="#about"> About me</a>
       </li>
       <li><a href="#projects">Projects</a></li>
       <li><a href="#about"> Certificates</a></li>
      <li><a href="#skills"> Skills</a></li>
       <li><a href="#contact"> Contact</a></li>
      </ul>
 </nav>
   </header>
    </div>
  )
}

export default Header
