
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Slider from "react-slick";
import { useAnimatedStyles } from "@/hooks/useAnimated";
import { animated } from "@react-spring/web";

const Projects = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      i18n.changeLanguage(storedLang);
    }
  }, [i18n]);

  const projectsData = [
    { id: 1,name:"Foody delivery App", image: "/logo.svg", link: "https://foody-app-pearl.vercel.app/" },
    { id: 2, name:"Movieland", image: "/movie2.jpg", link: "https://intern-intelligence-movies.vercel.app/"},
    { id: 3, name:"Live weather app", image: "/w1.jpg", link: "https://weather-nu-navy-26.vercel.app/" },
    { id: 4, name:"Get your Gif", image: "/getgifs4.jpg", link: "https://narminmammadova1.github.io/getGif/" },
    { id: 5,  name:"Canvas",image: "/mycanvas.jpg", link: "https://canvas-tau-taupe.vercel.app/" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    focusOnSelect: true, 
    pauseOnHover: false, 
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const { getSpringStyles, setHoveredId, hoveredId } = useAnimatedStyles();

  return (

<section id="projects" className="py-10">
  <h1 className="text-purplemain drop-shadow-custom text-center">
    {t("My Projects")}
  </h1>

  <div className="mt-10 px-10 lg:px-4">
    <Slider {...settings}>
      {projectsData.map((project) => (
        <div key={project.id} className="p-4">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <animated.div
              style={getSpringStyles(project.id)}
              className="relative h-[200px] flex justify-center items-center rounded-lg overflow-hidden border border-gray-700 cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={project.image}
                width={200}
                height={200}
                alt="project"
                className="min-w-full h-[200px] transition-opacity duration-300"
              />
              <div 
                className={`absolute bottom-0 w-full text-center text-xl bg-purplemain text-white px-4 py-1 transition-opacity duration-300 ${
                  hoveredId === project.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {t(project.name)}
              </div>
            </animated.div>
          </a>
        </div>
      ))}
    </Slider>
  </div>
</section>

    
  );
};

export default Projects;
