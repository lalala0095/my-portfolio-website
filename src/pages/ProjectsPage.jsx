import { useState, useEffect } from "react";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("public/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a key={project.id} href={`/projects/${project.id}`} className="block bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-4">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
