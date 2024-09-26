import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring,animated } from 'react-spring'

const AnimatedSection = ({children}) => {

const {ref,inView}=useInView({
    threshold: 0.1
})
const fadeInStyles=useSpring({

   opacity:inView ? 1:0,
   transform:inView ? "scale(0.9)" :"scale(0.5)",
    // loop:false,
    config:{duration:600},
    // loop:true
  })


 

  return (
    <animated.div ref={ref} style={fadeInStyles}>
      {children}
    </animated.div>
  )
}

export default AnimatedSection
