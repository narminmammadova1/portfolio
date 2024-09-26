

import { useAnimatedStyles } from '@/hooks/useAnimated';
import React from 'react';
import { animated } from 'react-spring';

const certificatesData = [
  {
    id: 1,
    title: 'Meta Fronted Developer Certificate',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/NAO67SDSAJP3',
  },
  {
    id: 2,
    title: 'Meta Principles of UX/UI Design',
    link: "https://www.coursera.org/account/accomplishments/verify/8IHCJMVBQ5RM",
  },
  {
    id: 3,
    title: 'Meta Advanced React Certificate',
    link: 'https://www.coursera.org/account/accomplishments/verify/MDJT8P0NGG65',
  },
  {
    id: 4,
    title: 'EACAMP Modern Fronted Certificate',
    link: 'https://school.eacampschool.com/mod/customcert/verify_certificate.php?contextid=6262&code=AufxQ9a7IG&qrcode=1',
  },
];

const Certificates = () => {
  const { getSpringStyles, setHoveredId,hoveredId} = useAnimatedStyles();

  return (
    <div>
      <section id="certificates" className="  ">
        <h1 className='text-purplemain text-center drop-shadow-custom'>Certificates</h1>

        <div className="flex text-white justify-around mt-10">
          {certificatesData.map((certificate) => (
            <a key={certificate.id} href={certificate.link} target="_blank" rel="noopener noreferrer">
              <animated.div
                style={getSpringStyles(certificate.id)}
                className='card-front px-4 flex-col w-[200px] h-[100px] flex items-center cursor-pointer text-center py-2 shadow-shadowCustom rounded-md border-purplemain'
                onMouseEnter={() => setHoveredId(certificate.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <p>{certificate.title}</p>
                {hoveredId===certificate.id &&( <button   className='px-4 border-2 border-purplemain rounded'>click</button>
)}
              </animated.div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Certificates;
