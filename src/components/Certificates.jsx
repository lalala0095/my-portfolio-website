import { useState } from "react";
import { FileText, Download, Eye } from "lucide-react"; // For modern icons

const certificates = [
	{
		title: "IBM DA0101EN Certificate - Data Analysis with Python",
		file: "IBM DA0101EN Certificate _ Cognitive Class.pdf",
	},
	{
		title: "IBM DS0101EN Certificate - Data Science 101",
		file: "IBM DS0101EN Certificate _ Cognitive Class.pdf",
	},
	{
		title: "IBM PY0101EN Certificate - Python 101 for Data Science",
		file: "IBM PY0101EN Certificate _ Cognitive Class.pdf",
	},
	{
		title: "IBMDesign20250304-26 Python for Data Science",
		file: "IBMDesign20250304-26-8p442i.pdf",
	},
	{
		title: "IBMDesign20250304-30 Data Analysis Using Python",
		file: "IBMDesign20250304-30-k8oj2g.pdf",
	},
	{
		title: "IBMDesign20250304-30 Data Science Foundations - Level 1",
		file: "IBMDesign20250304-30-w1x9gw.pdf",
	},
	{
		title: "DataCamp - Intermediate Importing Data in Python.pdf",
		file: "Intermediate Importing Data in Python.pdf",
	},
	{
		title: "DataCamp - Intermediate Python for Developers.pdf",
		file: "Intermediate Python for Developers.pdf",
	},
	{
		title: "DataCamp - Introduction to Importing Data in Python.pdf",
		file: "Introduction to Importing Data in Python.pdf",
	},
	{
		title: "DataCamp - Introduction to Python for Developers.pdf",
		file: "Introduction to Python for Developers.pdf",
	},
	{
		title: "DataCamp - Understanding Cloud Computing.pdf",
		file: "Understanding Cloud Computing.pdf",
	},
];

const Certificates = () => {
	return (
		<section id="certificates" className="py-16 bg-gray-50">
			<div className="max-w-6xl mx-auto px-6 text-center">
				<h2 className="text-4xl font-extrabold text-gray-900 mb-8">
					My Certificates
				</h2>
				<p className="text-lg text-gray-700 mb-12">
					Here are some of my professional certifications in Data Analytics and
					Engineering.
				</p>

				{/* Certificates Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{certificates.map((cert, index) => (
						<div
							key={index}
							className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
						>
							{/* Certificate Image or Placeholder */}
							{cert.image ? (
								<img
									src={cert.image}
									alt={cert.title}
									className="w-full h-48 object-cover"
								/>
							) : (
								<div className="flex items-center justify-center h-48 bg-gray-200">
									<FileText className="w-16 h-16 text-gray-500" />
								</div>
							)}

							{/* Certificate Details */}
							<div className="p-6 text-center">
								<h3 className="text-lg font-semibold text-gray-800">
									{cert.title}
								</h3>
								<div className="mt-4 flex justify-center space-x-4">
									{/* View Button */}
									<a
										href={`/certificates/${cert.file}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
									>
										<Eye className="w-4 h-4 mr-2" />
										View
									</a>

									{/* Download Button */}
									<a
										href={`/certificates/${cert.file}`}
										download={cert.file}
										className="flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg shadow hover:bg-gray-800 transition"
									>
										<Download className="w-4 h-4 mr-2" />
										Download
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Certificates;
