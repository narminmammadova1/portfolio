import { AnimatedSectionProps } from '@/interfaces';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const AnimatedSection3: React.FC<AnimatedSectionProps> = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const projectsAnimated = useSpring({
    from: { count: 0 },
    to: { count: inView ? 100 : 1 }, 
    reset: true,
  });

  return (
    <animated.div ref={ref}>
      <animated.p className="text-2xl lg:text-6xl" >{projectsAnimated.count.to((count) => Math.floor(count))}</animated.p>
      {children}
    </animated.div>
  );
};

export default AnimatedSection3;