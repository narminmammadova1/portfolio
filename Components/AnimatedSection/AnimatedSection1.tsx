import { AnimatedSectionProps } from '@/interfaces';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const AnimatedSection1: React.FC<AnimatedSectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const projectsAnimated = useSpring({
    from: { count: 0 },
    to: { count: inView ? 2 : 0 }, 
    config: { duration: 500 },
    reset: true,
  });

  return (
    <animated.div ref={ref}>
      <animated.p className="text-2xl lg:text-6xl" >{projectsAnimated.count.to((count) => Math.floor(count))}</animated.p>
      {children}
    </animated.div>
  );
};

export default AnimatedSection1;