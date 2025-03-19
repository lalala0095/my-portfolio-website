import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/public/projects.json")
      .then((response) => response.json())
      .then((data) => {
        const foundProject = data.find((p) => p.id === projectId);
        setProject(foundProject);
      })
      .catch((error) => console.error("Error loading project:", error));
  }, [projectId]);

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto my-5 px-6 py-10">
      <h2 className="text-4xl font-bold">{project.title}</h2>
      <p className="text-gray-600">{project.description}</p>
      <h3 className="text-2xl font-bold mt-6">The Challenge</h3>
      <p>{project.challenge}</p>
      <h3 className="text-2xl font-bold mt-6">My Approach</h3>
      <p>{project.approach}</p>
      <h3 className="text-2xl font-bold mt-6">Impact</h3>
      <ul>
        {Object.entries(project.impact).map(([key, value]) => (
          <li key={key}>✅ {value}</li>
        ))}
      </ul>
      {project.video && (
        <div className="mt-6">
          <iframe
            width="100%"
            height="400"
            src={project.video}
            title={project.title}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
