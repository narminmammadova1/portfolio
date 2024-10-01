import React, { useState } from 'react'

export const useDropDown = () => {
  
    const [isOpen,setIsOpen]=useState(false)

    const  openLangDiv=()=>setIsOpen(!isOpen)
    const closeLangDiv=()=>setIsOpen(false)
    return {openLangDiv,closeLangDiv,isOpen}
}


