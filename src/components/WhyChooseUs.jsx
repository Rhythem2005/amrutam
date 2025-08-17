import React from "react";
import photo1 from "../assets/photo1.png"
import photo3 from "../assets/photo3.png"

const WhyChooseUs = () => {
  return (
    <section className="bg-amber-50 py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-800">Why Doctors Choose Us?</h2>
        <p className="text-gray-500 mt-2">
          Unlock the Benefits of Smarter Healthcare Management and Patient Care
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <div className="flex-1 flex justify-center gap-4">
         <img src={photo1} alt="my photo" />
          
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-green-800">
            Instant FREE 5–Mins Call
          </h3>
          <p className="text-gray-600 mt-3">
            We understand the importance of building trust with your patients. That’s
            why Amrutam offers a <span className="font-bold">free 5–minute call</span>,
            helping you connect instantly and foster lasting patient relationships
            with ease.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="flex-1 flex justify-center gap-4">
            <img src={photo3} alt="i photo" />
          
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-green-800">
            Forum for Meaningful Connections
          </h3>
          <p className="text-gray-600 mt-3">
            We value your journey in Ayurveda. The Amrutam Forum helps you engage with
            patients, answer questions, while the "Thoughts" section allows you to share
            deeper Ayurvedic wisdom.
          </p>
        </div>
      </div>
    </section>
  );
}
export default WhyChooseUs;