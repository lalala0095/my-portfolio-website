import { FaAws, FaReact, FaChartBar, FaRProject, FaGoogle } from "react-icons/fa";
import { SiMongodb, SiMysql, SiFlask, SiFastapi, SiPostgresql, SiTailwindcss, SiGooglesheets, SiApacheairflow, SiPython, SiGithubpages } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { PiFileSql, PiMicrosoftExcelLogoFill } from "react-icons/pi";

const TechStackShowcase = () => {
  const techCategories = [
    {
      title: "🌐 Frontend/Backend Web Development",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Python Flask", icon: <SiFlask className="text-teal-400" /> },
        { name: "Python FastAPI", icon: <SiFastapi className="text-teal-400" /> },
        { name: "Google AppSheet", icon: <FaGoogle className="text-teal-400" /> },
      ],
    },
    {
        title: "🚀 Deployments",
        technologies: [
        { name: "AWS EC2", icon: <FaAws className="text-orange-500" /> },
        { name: "Azure Web App Service", icon: <VscAzure className="text-blue-500" /> },
        { name: "Github Pages", icon: <SiGithubpages className="text-blue-500" /> },
      ],
    },
      {
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
      title: "📊 Data Analytics",
      technologies: [
        { name: "Python", icon: <SiPython className="text-gray-600" /> },
        { name: "Power BI", icon: <FaChartBar className="text-yellow-500" /> },
        { name: "R", icon: <FaRProject className="text-blue-700" /> },
        { name: "Microsoft Excel", icon: <PiMicrosoftExcelLogoFill className="text-blue-700" /> },
        { name: "Google Sheets", icon: <SiGooglesheets className="text-blue-700" /> },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">My Tech Stack</h2>
      <div className="space-y-8">
        {techCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
              {category.technologies.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center space-y-2 bg-gray-100 p-4 rounded-lg shadow">
                  <div className="text-5xl">{tech.icon}</div>
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackShowcase;
