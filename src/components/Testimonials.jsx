import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
          What Other Ayurvedic Doctors Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Anjali Sharma",
              feedback:
                "This course transformed the way I approach my patients. Highly recommended!",
              img: "https://via.placeholder.com/100",
            },
            {
              name: "Dr. Rajesh Mehta",
              feedback:
                "Practical, insightful, and well-structured. A must for any Ayurvedic practitioner.",
              img: "https://via.placeholder.com/100",
            },
            {
              name: "Dr. Kavita Nair",
              feedback:
                "The real-life examples and case studies made learning so much easier.",
              img: "https://via.placeholder.com/100",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 italic mb-4">
                "{testimonial.feedback}"
              </p>
              <h4 className="font-semibold text-green-800">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
