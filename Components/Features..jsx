import React from "react";

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-black hover:shadow-lg transition-shadow duration-300">
    <img src={icon} alt={title} className="w-16 h-16 mb-4" />
    <h3 className="text-lg leading-4 font-semibold text-gray-800 mb-2">
      {title}
    </h3>
    <p className="text-gray-600 leading-4 text-center">{description}</p>
  </div>
);

function Features() {
  const features = [
    {
      icon: "../icons/10.png",
      title: "Plagiarism Checker",
      description: "We will provide access to assignments free of plagiarism.",
    },
    {
      icon: "../icons/11.png",
      title: "Free Publications",
      description: "We will provide access to publication.",
    },
    {
      icon: "../icons/12.png",
      title: "Provides Free Books and PDF",
      description: "Free Books and PDF will be provided.",
    },
    {
      icon: "../icons/13.png",
      title: "Paraphraser",
      description: "A paraphraser will be provided.",
    },
  ];

  return (
    <div className="py-12 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-6xl max-sm:text-xl font-bold text-gray-800 mb-4">
          Awesome Features
        </h2>
        <p className="text-gray-600 mb-12">
          Get ready to unlock the next level of features
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
