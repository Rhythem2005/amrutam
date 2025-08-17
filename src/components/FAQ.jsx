import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who is this course for?",
      answer:
        "This course is designed for Ayurvedic doctors and practitioners looking to expand their expertise.",
    },
    {
      question: "How long is the course?",
      answer:
        "The course duration is 8 weeks, with live and recorded sessions.",
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes, upon successful completion, you will receive a recognized certificate.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-lg">{faq.question}</h3>
                <span className="text-green-600 text-xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </div>
              {openIndex === i && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
