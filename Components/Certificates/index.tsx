

import { useAnimatedStyles } from '@/hooks/useAnimated';
import { CertificateProps } from '@/interfaces';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
];

const Certificates = () => {
  const { getSpringStyles, setHoveredId,hoveredId} = useAnimatedStyles();
  const {t,i18n}=useTranslation()


  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      i18n.changeLanguage(storedLang); // LocalStorage'dan dil al
    }
  }, [i18n]);



  return (
    <div>
      <section id="certificates" className="  ">
        <h1 className='text-purplemain text-center drop-shadow-custom'>{t("Certificates")}</h1>

        <div className="flex justify-center   text-white flex-wrap lg:justify-around   mt-10">
          {certificatesData.map((certificate) => (
              <animated.div key={certificate.id}
                style={getSpringStyles(certificate.id)}
                className=' px-4 flex-col w-[80%] h-[80px] lg:w-[200px] lg:h-[100px] mb-10 lg:mb-0 flex items-center cursor-pointer text-center py-2 shadow-shadowCustom rounded-md border-purplemain'
                onMouseEnter={() => setHoveredId(certificate.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <p>{certificate.title}</p>
                {hoveredId===certificate.id &&(            <a key={certificate.id} href={certificate.link} target="_blank" rel="noopener noreferrer">
                  <button   className='px-4 border-2 border-purplemain rounded'>{t("click")}</button>            </a>

)}
              </animated.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Certificates;
