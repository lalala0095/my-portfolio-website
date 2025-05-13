import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const TravelDestinationFinderPage = () => {
  // Static project object with detailed information
  const project = {
    id: "TravelDestinationFinder",
    title: "React - Travel Destination Finder base on User Prompts - Utilizing Google Gemini API",
    deployed_link: "https://travel-destination-frontend-two.vercel.app/",
    description:
      "The objective of this web app is to assist users on their next potential destination base on their user given preferences.",
    challenge:
      "The user might struggle to find good relevant suggestions out of typical search engines.",
    approach:
      "Develop a full stack web app dedicated for generating travel destinations base on user's query. This query will be proccessed under the hood to get the relevant places, by the power of Google Gemini API as an assistant.",
    impact: {
      RealTimeSearch: "The search results are in real time - using Google's Custom Search API. This includes highly relevant search results based on the user's preference.",
      ImagePreviews: "The frontend displays images of the places. This helps the users on selecting their prefered destination by visual criteria.",
      MaximizeAITools: "This server is designed to maximize the use of AI tools like Google Gemini API and Google Custom Search API.",
      UserExperience: "This web app aims to be a highly performing while keeping the latency low. The UI is very simple and serves it's purpose.",
    },
    image: "/my-portfolio-website/images/travel/results2.png",
    gallery: [
      "/my-portfolio-website/images/travel/home.png",
      "/my-portfolio-website/images/travel/loading.png",
      "/my-portfolio-website/images/travel/results1.png",
      "/my-portfolio-website/images/travel/results2.png",
      "/my-portfolio-website/images/travel/results3.png",
      "/my-portfolio-website/images/travel/results4.png"
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

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Deployed Link</h3>
        <p className="text-gray-700">{project.deployed_link}</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Challenge</h3>
        <p className="text-gray-700">{project.challenge}</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Approach</h3>
        <p className="text-gray-700">{project.approach}</p>

        <h3 className="text-lg font-semibold text-gray-900 mt-4">Impact</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Real Time Search:</strong> {project.impact.RealTimeSearch}</li>
          <li><strong>Image Previews:</strong> {project.impact.ImagePreviews}</li>
          <li><strong>Modern AI Tools:</strong> {project.impact.MaximizeAITools}</li>
          <li><strong>Aims to Provide Great User Experience:</strong> {project.impact.UserExperience}</li>
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

export default TravelDestinationFinderPage;
