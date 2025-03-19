const AdvPOSPage = () => {
  // Static project object with detailed information
  const project = {
    id: "etl-automation-real",
    title: "Automating ETL Pipelines for a Logistics Firm",
    description:
      "This section is placeholder and in development mode. The contents are dummy data. Reduced data processing time by 80% by automating ETL workflows using Python and AWS Lambda.",
    challenge:
      "Manual data handling led to delays and inaccuracies in reporting.",
    approach:
      "Developed a serverless ETL pipeline using AWS Lambda, S3, and MongoDB.",
    impact: {
      processing_time_reduction: "80% faster",
      error_reduction: "99% fewer data errors",
    },
    image: "/images/airflow.png",
  };

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
          <li><strong>Processing Time Reduction:</strong> {project.impact.processing_time_reduction}</li>
          <li><strong>Error Reduction:</strong> {project.impact.error_reduction}</li>
        </ul>

      </div>
    </div>
  );
};

export default AdvPOSPage;
