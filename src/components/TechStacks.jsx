import React from "react";

const techStacks = [
  {
    category: "Web Development",
    technologies: [
      "React", "FastAPI", "Flask", "MongoDB", "Vite", "Bootstrap", "Tailwind CSS"
    ]
  },
  {
    category: "Data Engineering",
    technologies: [
      "Python", "SQL", "MongoDB", "AWS", "Azure", "Google Cloud", "ETL Pipelines"
    ]
  },
  {
    category: "Data Analytics",
    technologies: [
      "Power BI", "Google Data Studio", "Excel (Power Query, Power Pivot)", "Google Analytics", "R"
    ]
  }
];

const TechStackShowcase = () => {
  return (
    <section className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">My Tech Stacks</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {techStacks.map((stack, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-3">{stack.category}</h3>
            <ul className="list-disc pl-5 space-y-1">
              {stack.technologies.map((tech, i) => (
                <li key={i} className="text-gray-700">{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackShowcase;