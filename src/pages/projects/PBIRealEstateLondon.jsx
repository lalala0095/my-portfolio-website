import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const PBIRealEstateLondon = () => {
  // Static project object with detailed information
  const project = {
    id: "PBIRealEstateLondon",
    title: "Power BI - Real Estate Dashboard of London Sold Properties",
    description:
      "This project has helpful insights of sold properties in London to assist Market Research or Analysis. I also want to emphasize here my ability to incorporate and show GeoJSON data or Geographic data in Power BI.",
    challenge:
      "Real Estate companies, principals and agents have their companies reports but they also need a comprehensive view of their market share in the whole area of London.",
    approach:
      "Develop a comprehensive Power BI dashboard of sold properties data in London using data from the Kaggle website.",
    impact: {
      SalesAnalysis: "Have a comprehensive view of different Sales Metrics including the Sold Prices, Listing Prices, Avg. Days on Market, Conversion Rate and etc. This elevates the decision making of stakeholders by creating new ideas out of these metrices.",
      CategoriesView: "Can be viewed with multiple categories like Property Types/Dwelling Types, Dates, Month, Quarter or Year, Agents and Property Addresses. This aids the users to extract more insights and improve marketing strategies by inspecting different regions or area and categories to consider.",
      GoodView: "Since this project was made in Power BI, the sharing, row-level data security, scheduled refresh and SQL database connection will be handled easily with the help of built-in features of Power BI.",
      WebEmbedding: "Power BI also aids developers and organizations with public sharing with the web embedding feature of Power BI.",
      LongTermMaintenance: "Making this report long-term can be achieved by updating the datasets and adding more metrics to track to elevate the impact it can do to users.",
    },
    image: "/my-portfolio-website/images/real_estate_dashboard_snapshot1.png",
    gallery: [
      "/my-portfolio-website/images/real-estate-london/real_estate_dashboard_snapshot1.png",
      "/my-portfolio-website/images/real-estate-london/real_estate_dashboard_snapshot12.png",
      "/my-portfolio-website/images/real-estate-london/real_estate_dashboard_snapshot3.png"
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
          <li><strong>Sales Metrics:</strong> {project.impact.SalesAnalysis}</li>
          <li><strong>Dissecting of Metrics with Multiple Categories:</strong> {project.impact.CategoriesView}</li>
          <li><strong>Comprehensive View of Charts in Power BI:</strong> {project.impact.GoodView}</li>
          <li><strong>Public Sharing by Web Embedding:</strong> {project.impact.WebEmbedding}</li>
          <li><strong>Long-term Maintenance:</strong> {project.impact.LongTermMaintenance}</li>
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

export default PBIRealEstateLondon;
