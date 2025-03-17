import { useState, useEffect, useRef } from "react";
import techStacks from "../techStacks.json";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import {
  FaAws, FaReact, FaChartBar, FaRProject, FaGoogle
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiFlask, SiFastapi, SiPostgresql, SiTailwindcss,
  SiGooglesheets, SiApacheairflow, SiPython, SiGithubpages, SiGooglecloud
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { PiFileSql, PiMicrosoftExcelLogoFill } from "react-icons/pi";

const icons = {
  FaAws, FaReact, FaChartBar, FaRProject, FaGoogle,
  SiMongodb, SiMysql, SiFlask, SiFastapi, SiPostgresql, SiTailwindcss,
  SiGooglesheets, SiApacheairflow, SiPython, SiGithubpages,
  VscAzure, PiFileSql, PiMicrosoftExcelLogoFill, SiGooglecloud
};

const TechStackShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [techCategories, setTechCategories] = useState([]);
  const [hoveredTech, setHoveredTech] = useState(null);

  useEffect(() => {
    setTechCategories(techStacks);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getDisplayedTechnologies = () => {
    if (activeCategory === "all") {
      return techCategories;
    }
    return techCategories.filter(category => category.id === activeCategory);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div id="tech-stacks" ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-2">My Tech Stack</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Technologies I've worked with throughout my journey in data and web development
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-gray-800 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Technologies
            </button>
            {techCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gray-800 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-12">
          {getDisplayedTechnologies().map((category) => (
            <div key={category.id} className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h3 className="text-2xl font-semibold mb-6 text-center sm:text-left">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {category.technologies.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="flex flex-col items-center justify-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:border-gray-200 relative overflow-hidden group"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50"></div>
                    <div className="relative z-10 text-6xl mb-3 transform transition-transform duration-300 group-hover:scale-110">
                      {icons[tech.icon] && icons[tech.icon]({ className: tech.color })}
                    </div>
                    <span className="relative z-10 text-sm font-medium text-gray-800 group-hover:text-gray-900">
                      {tech.name}
                    </span>
                    {/* Star Rating Display on Hover */}
                    {hoveredTech === tech.name && (
                      <div className="absolute bottom-2 flex gap-1">
                        {renderStars(tech.rating)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackShowcase;
