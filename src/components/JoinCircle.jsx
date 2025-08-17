import React from "react";
import photo7 from "../assets/photo7.png";
import photo8 from "../assets/photo8.png";
import photo9 from "../assets/photo9.png";
import photo10 from "../assets/photo10.png";

const JoinCircle = () => {
  return (
    <section className="bg-amber-50 py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-800">
          Join Our Circle of Care
        </h2>
        <p className="text-gray-600 mt-2">
          Becoming a part of Amrutam is simple
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-4 py-10">
          {[
            {
              title: "Step 1: Get your referral code",
              desc: "Contact us to receive your unique referral code.",
            },
            {
              title: "Step 2: Register on Amrutam",
              desc: "Sign up on the Amrutam Doctors app or website to join our specialist network.",
            },
            {
              title: "Step 3: Complete KYC",
              desc: "Fill in your details and upload the required documents for verification.",
            },
            {
              title: "Step 4: Start consulting",
              desc: "Once verified, begin offering consultations and helping patients.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="border border-green-300 rounded-lg p-4"
            >
              <h3 className="font-semibold text-green-800">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex-1">
          <div className="bg-gray-200 w-full rounded-lg flex items-center justify-center">
            <img src={photo7} alt="Referral Process" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {["Consultations", "Payment withdrawal", "Schedule"].map(
          (label, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-lg ${
                index === 0
                  ? "bg-green-800 text-white"
                  : "border border-green-800 text-green-800"
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>

      <div className="mt-16">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              Value Your Practice
            </h3>
            <div className="flex justify-center">
              <img
                src={photo8}
                alt="Value Your Practice"
                className="w-28 md:w-40 lg:w-48 h-auto"
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              Today’s Healing Journey
            </h3>
            <div className="flex justify-center">
              <img
                src={photo9}
                alt="Today's Healing Journey"
                className="w-28 md:w-40 lg:w-48 h-auto"
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              Consultation Details
            </h3>
            <div className="flex justify-center">
              <img
                src={photo10}
                alt="Consultation Details"
                className="w-28 md:w-40 lg:w-48 h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="px-8 py-3 bg-green-800 text-white rounded-lg">
          Join Now
        </button>
      </div>
    </section>
  );
}
export default JoinCircle;