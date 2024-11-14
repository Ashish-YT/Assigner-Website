import React from "react";

const FeatureCard1 = ({ title, description }) => (
  <div className="flex flex-col items-center p-6 bg-[#EE481447] rounded-lg shadow-md border border-black hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-lg font-semibold text-gray-800 max-sm:leading-4 mb-2">
      {title}
    </h3>
    <p className="text-gray-600 max-sm:leading-4 text-center">{description}</p>
  </div>
);

function Advantages() {
  const features = [
    {
      title: "No Plagiarism",
      description:
        "100% original answers that lessen the possibility of receiving a bad grade.",
    },
    {
      title: "On-time Submission",
      description:
        "We promise to turn in the job ahead of schedule, no matter how difficult it is.",
    },
    {
      title: "24/7 support",
      description:
        "Help for homework is available 24/7; we are always here to assist students with their assignments. ",
    },
    {
      title: "Rewrites that satisfy",
      description:
        "Get your schoolwork redone as many times as you like till you are happy.",
    },
  ];

  return (
    <div className="py-12 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-6xl max-sm:text-xl font-bold text-gray-800 mb-4">
          Our Assistance's advantages
        </h2>
        <p className="text-gray-600 mb-12">
          The Assigner wants to build a strong foundation that will enable
          students to soar to achievement.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard1
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Advantages;
