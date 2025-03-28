

import { useAnimatedStyles } from '@/hooks/useAnimated';
import { CertificateProps } from '@/interfaces';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { animated } from 'react-spring';

const certificatesData:CertificateProps[]= [
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
  {
    id: 5,
    title: 'Intern Intelligence Frontend Developer',
    link: 'https://school.eacampschool.com/mod/customcert/verify_certificate.php?contextid=6262&code=AufxQ9a7IG&qrcode=1',
  },
];

const Certificates = () => {
  const { getSpringStyles, setHoveredId,hoveredId} = useAnimatedStyles();
  const {t,i18n}=useTranslation()


  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      i18n.changeLanguage(storedLang); 
    }
  }, [i18n]);




  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true, 
    pauseOnHover: false, 
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  };


  

  return (
    <div>
      <section id="certificates" className="  ">
        <h1 className='text-purplemain text-center drop-shadow-custom'>{t("Certificates")}</h1>

        <div
        className="w-full max-w-6xl mx-auto text-white text-[12px] md:text-base  ">
          <Slider {...settings}>

            {certificatesData.map((certificate) => (
              <div key={certificate.id}  className="p-4 ">
 <animated.div 
                style={getSpringStyles(certificate.id)}
                className='px-2 lg:px-4 flex-col w-[90%] h-[90px] lg:w-[200px] lg:h-[100px] mb-10 lg:mb-0 flex items-center cursor-pointer text-center py-2 shadow-shadowCustom rounded-md border-purplemain'
                onMouseEnter={() => setHoveredId(certificate.id)}
                onMouseLeave={() => setHoveredId(null)}
             
             
             >
                <p>{certificate.title}</p>
                {hoveredId===certificate.id &&(            <a key={certificate.id} href={certificate.link} target="_blank" rel="noopener noreferrer">
                  <button   className='px-4 border-2 border-purplemain rounded'>{t("click")}</button>            </a>

)}
              </animated.div>

              </div>
             
          ))}
         
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
