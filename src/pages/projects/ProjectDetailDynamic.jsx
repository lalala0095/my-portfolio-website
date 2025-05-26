import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectDetailDynamic = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://asus-instances-coal-indication.trycloudflare.com/projects/${projectId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Project not found");
        return res.json();
      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [projectId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(project.gallery[index]);
  };

  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % project.gallery.length;
    setCurrentIndex(newIndex);
    setSelectedImage(project.gallery[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + project.gallery.length) % project.gallery.length;
    setCurrentIndex(newIndex);
    setSelectedImage(project.gallery[newIndex]);
  };

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') nextImage();
      else if (event.key === 'ArrowLeft') prevImage();
      else if (event.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, nextImage, prevImage]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-600">{error}</div>;
  if (!project) return null;

  return (
    <div className="container mx-auto px-6 py-10 mt-4">
      <h2 className="text-4xl font-bold text-center mb-6">{project.title}</h2>
      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover rounded-md"
        />
        <h3 className="text-lg font-semibold text-gray-900 mt-4">Overview</h3>
        <p className="text-gray-700">{project.description}</p>
        {project.deployed_link && (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">Deployed Link</h3>
            <a className="text-blue-600 underline" href={project.deployed_link} target="_blank" rel="noopener noreferrer">{project.deployed_link}</a>
          </>
        )}
        {project.challenge && (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">Challenge</h3>
            <p className="text-gray-700">{project.challenge}</p>
          </>
        )}
        {project.approach && (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">Approach</h3>
            <p className="text-gray-700">{project.approach}</p>
          </>
        )}
        {project.impact && (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mt-4">Impact</h3>
            <ul className="list-disc list-inside text-gray-700">
              {Object.entries(project.impact).map(([key, value]) => (
                <li key={key}><strong>{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}</li>
              ))}
            </ul>
          </>
        )}
        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <>
            <h3 className="text-lg font-semibold text-gray-900 mt-6">Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {project.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-32 object-cover rounded-md cursor-pointer hover:opacity-80 transition"
                  onClick={() => openModal(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeModal}><X /></button>
          <button className="absolute left-4 text-white text-3xl" onClick={prevImage}><ChevronLeft /></button>
          <img src={selectedImage} alt="Enlarged Screenshot" className="max-w-full max-h-[80vh] rounded-lg shadow-lg" />
          <button className="absolute right-4 text-white text-3xl" onClick={nextImage}><ChevronRight /></button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailDynamic;
