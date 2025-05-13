import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const AdvPOSBackend = () => {
  // Static project object with detailed information
  const project = {
    id: "AdvPOSBackend",
    title: "AdvPOS App FastAPI Backend",
    description:
      "This an API service and serves as a backend for my personal project, a React App website AdvPOS. This includes user Authentication and Mongodb database CRUD operations.",
    challenge:
      "AdvPOS App React frontend needs a backend API microservice.",
    approach:
      "Develop a FastAPI Microservice that will serve as backend for the React JS frontend. Incorporate Authentication, Reports, Data Entries and Data Exports.",
    impact: {
      ReusableBackend: "Have a reusable backend for multiple Frontend websites like mobile and desktop versions.",
      BetterMaintenance: "Since the backend is isolated from the frontend, it is easier to troubleshoot and maintain the API microserice if in case there will be issues to rise.",
      FastAandLightweight: "Since it runs using Python, the API server is light weight and will be easy to be maintained in the cloud or on-premise servers.",
      DatabaseUsage: "Combining Mongodb and Redis makes it easier for developers to maintain the backend API service.",
    },
    image: "/my-portfolio-website/images/FastAPI Docs 1.png",
    gallery: [
      "/my-portfolio-website/images/advpos-backend/FastAPI Docs 1.png",
      "/my-portfolio-website/images/advpos-backend/FastAPI Docs 2.png",
      "/my-portfolio-website/images/advpos-backend/FastAPI Docs 3.png",
      "/my-portfolio-website/images/advpos-backend/BACKEND DEV.png",
      "/my-portfolio-website/images/advpos-backend/BACKEND DEV 2.png"
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(project.gallery[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % project.gallery.length;
    setCurrentIndex(newIndex);
    setSelectedImage(project.gallery[newIndex]);
  };

  const prevImage = () => {
    const newIndex =
      (currentIndex - 1 + project.gallery.length) % project.gallery.length;
    setCurrentIndex(newIndex);
    setSelectedImage(project.gallery[newIndex]);
  };  

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;
  
      if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'Escape') {
        closeModal();
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, nextImage, prevImage]);

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

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Challenge</h3>
        <p className="text-gray-700">{project.challenge}</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Approach</h3>
        <p className="text-gray-700">{project.approach}</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Impact</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Reusable Backend:</strong> {project.impact.ReusableBackend}</li>
          <li><strong>Easy Deployment and Maintenance:</strong> {project.impact.BetterMaintenance}</li>
          <li><strong>Fast and Light-weight:</strong> {project.impact.FastAandLightweight}</li>
          <li><strong>Usage of NoSQL as Database and In-memory database:</strong> {project.impact.DatabaseUsage}</li>
        </ul>

        {/* Gallery Section */}
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
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeModal}
          >
            <X />
          </button>
          <button
            className="absolute left-4 text-white text-3xl"
            onClick={prevImage}
          >
            <ChevronLeft />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged Screenshot"
            className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
          />
          <button
            className="absolute right-4 text-white text-3xl"
            onClick={nextImage}
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default AdvPOSBackend;
