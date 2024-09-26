

import { transform } from "next/dist/build/swc";
import { useState } from "react";
import { useSpring } from "react-spring";


export const useAnimatedStyles = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const getSpringStyles = (id:number) => {
    const isHovered = hoveredId === id;
    return useSpring({
      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
      boxShadow: isHovered ? '0 4px 32px rgba(146, 50, 132, 0.6)' :  '0px 20px 30px rgba(0, 0, 0, 0.2)' ,
    });
  };
  const ColorChangeText =  useSpring({
      from: { color: 'purple',
        opacity:1
      
       },
      to: { color: 'white',opacity:0 ,
       

      },
      config: { duration: 2000 },
      reset: true, // Tekrar tekrar animasyonu başlatmak için
      loop: true, // Sürekli döngü için
    })
  
  


 

  return { getSpringStyles, setHoveredId,hoveredId,  ColorChangeText};
};