import React from "react";
import {
  FaCode,
  FaProjectDiagram,
  FaUsers,
  FaChalkboardTeacher,
  FaDatabase,
  FaCogs,
} from "react-icons/fa";

const featuresData = [
  {
    id: 1,
    title: "Daily Coding Challenges",
    description:
      "Receive a new programming challenge every day for 30 days, carefully designed to build your problem-solving skills progressively.",
  },
  {
    id: 2,
    title: "Project-Based Learning",
    description:
      "Work on real-world projects that combine multiple concepts, helping you build a strong portfolio while learning.",
  },
  {
    id: 3,
    title: "Community Support",
    description:
      "Join a community of learners, share your progress, and get help when you're stuck. Learn together, grow together.",
  },
  {
    id: 4,
    title: "Expert Mentorship",
    description:
      "Get guidance from experienced developers who will review your code, provide feedback, and help you improve your coding practices.",
  },
];

const Features = () => {
  return (
    <div className="py-16 px-4 relative overflow-hidden">
      {/* Decorative Background Icons */}
      <FaCode className="absolute top-10 left-10 text-blue-200 opacity-70 text-6xl sm:text-4xl sm:top-5 sm:left-5 z-[-1]" />
      <FaProjectDiagram className="absolute bottom-20 right-20 text-yellow-200 opacity-70 text-8xl sm:text-5xl sm:bottom-10 sm:right-10 z-[-1]" />
      <FaUsers className="absolute top-1/2 left-1/3 text-green-200 opacity-70 text-5xl sm:text-3xl sm:top-1/3 sm:left-1/4 z-[-1]" />
      <FaDatabase className="absolute top-1/4 right-1/4 text-red-200 opacity-70 text-7xl sm:text-4xl sm:top-1/5 sm:right-1/5 z-[-1]" />
      <FaCogs className="absolute bottom-10 left-1/4 text-purple-200 opacity-70 text-6xl sm:text-4xl sm:bottom-5 sm:left-1/5 z-[-1]" />
      {/* End of Decorative Background Icons */}
      <h2 className="text-5xl text-gray-800 text-center mb-12 max-sm:text-3xl">
        How it Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto p-6 max-sm:px-2">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
