import { useState, useEffect, useRef } from "react";
import { FaAws, FaReact, FaChartBar, FaRProject, FaGoogle } from "react-icons/fa";
import { SiMongodb, SiMysql, SiFlask, SiFastapi, SiPostgresql, SiTailwindcss, SiGooglesheets, SiApacheairflow, SiPython, SiGithubpages } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { PiFileSql, PiMicrosoftExcelLogoFill } from "react-icons/pi";

const TechStackShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const techCategories = [
    {
      id: "web",
      title: "🌐 Frontend/Backend Web Development",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Python Flask", icon: <SiFlask className="text-green-600" /> },
        { name: "Python FastAPI", icon: <SiFastapi className="text-teal-500" /> },
        { name: "Google AppSheet", icon: <FaGoogle className="text-red-500" /> },
      ],
    },
    {
      id: "deploy",
      title: "🚀 Deployments",
      technologies: [
        { name: "AWS EC2", icon: <FaAws className="text-orange-500" /> },
        { name: "Azure Web App", icon: <VscAzure className="text-blue-500" /> },
        { name: "Github Pages", icon: <SiGithubpages className="text-purple-700" /> },
      ],
    },
    {
      id: "data-eng",
      title: "🔧 Data Engineering",
      technologies: [
        { name: "Apache Airflow", icon: <SiApacheairflow className="text-yellow-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "SQL Server", icon: <PiFileSql className="text-blue-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
      ],
    },
    {
      id: "data-analytics",
      title: "📊 Data Analytics",
      technologies: [
        { name: "Python", icon: <SiPython className="text-gray-600" /> },
        { name: "Power BI", icon: <FaChartBar className="text-yellow-500" /> },
        { name: "R", icon: <FaRProject className="text-blue-700" /> },
        { name: "Microsoft Excel", icon: <PiMicrosoftExcelLogoFill className="text-green-600" /> },
        { name: "Google Sheets", icon: <SiGooglesheets className="text-green-500" /> },
      ],
    },
  ];

  // Intersection Observer to trigger animations when section is visible
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

  // Get all technologies or filter by category
  const getDisplayedTechnologies = () => {
    if (activeCategory === "all") {
      return techCategories;
    }
    return techCategories.filter(category => category.id === activeCategory);
  };

  return (
    <div 
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-2">My Tech Stack</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Technologies I've worked with throughout my journey in data and web development
          </p>
          
          {/* Category Filter */}
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
                {category.title.split(" ")[0]} {/* Just show the emoji */}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {getDisplayedTechnologies().map((category, categoryIndex) => (
            <div 
              key={category.id}
              className={`transition-all duration-700 delay-${categoryIndex * 100} transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6 text-center sm:text-left">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={tech.name}
                    className={`flex flex-col items-center justify-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:border-gray-200 relative overflow-hidden group`}
                    style={{ 
                      animationDelay: `${(categoryIndex * 100) + (techIndex * 50)}ms`,
                      transitionDelay: `${(categoryIndex * 50) + (techIndex * 30)}ms` 
                    }}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50"></div>
                    
                    {/* Icon with pulse effect on hover */}
                    <div className="relative z-10 text-6xl mb-3 transform transition-transform duration-300 group-hover:scale-110">
                      {tech.icon}
                    </div>
                    
                    {/* Tech name */}
                    <span className="relative z-10 text-sm font-medium text-gray-800 group-hover:text-gray-900">
                      {tech.name}
                    </span>
                    
                    {/* Decorative dot in corner */}
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gray-200 group-hover:bg-gray-400 transition-colors duration-300"></div>
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
