import { useState } from "react";

const faqs = [
  {
    question: "What services are available on our website?",
    answer: "What services are available on our website?",
  },
  {
    question: "How can we guarantee the caliber of the assignments?",
    answer: "How can we guarantee the caliber of the assignments?",
  },
  {
    question:
      "What distinguishes our company from other assignment writing firms?",
    answer:
      "What distinguishes our company from other assignment writing firms?",
  },
  {
    question: "Does utilizing our service have any limitations?",
    answer: "Does utilizing our service have any limitations?",
  },
  {
    question: "How can consumers access our website's news and updates?",
    answer: "How can consumers access our website's news and updates?",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-5">
      <h2 className="text-5xl font-bold text-center mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-2 border-gray-100  pb-3">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg max-sm:text-[7px] font-medium text-gray-800">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  activeIndex === index ? "transform rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
