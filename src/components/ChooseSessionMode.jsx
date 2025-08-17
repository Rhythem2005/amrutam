import React from "react";
import photo4 from "../assets/photo4.png"
import photo5 from "../assets/photo5.png"
import photo6 from "../assets/photo6.png"

export default function ChooseSessionMode() {
  return (
    <section className="bg-yellow-50 py-16 px-8">
      {/* Row 1 - Choose Session Mode */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        {/* Left Images */}
        <div className="flex-1 flex justify-center gap-4">
         <img src={photo4} alt="" />
         
        </div>

        {/* Right Text */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-green-800">
            Choose Your Session Mode
          </h3>
          <p className="text-gray-600 mt-3">
            Amrutam offers you to connect with patients via Instant Chat, Instant
            Call, or Schedule Video Call. Each option offers flexibility and
            personalized care to suit individual needs.
          </p>
        </div>
      </div>

      {/* Row 2 - Smart Wallet */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16">
        {/* Right Images */}
        <div className="flex-1 flex justify-center gap-4">
          <img src={photo5} alt="" />

        </div>

        {/* Left Text */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-green-800">
            Smart Wallet
          </h3>
          <p className="text-gray-600 mt-3">
            We understand the need for seamless transactions. With Amrutam Wallet,
            you can easily withdraw payments, and for your security, a one-time
            password is sent to your registered mobile number during withdrawals.
          </p>
        </div>
      </div>

      {/* Row 3 - Flexible Work Timing */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Images */}
        <div className="flex-1 flex justify-center gap-4">
          <img src={photo6} alt="" />
         
        </div>

        {/* Right Text */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-green-800">
            Flexible Work Timing
          </h3>
          <p className="text-gray-600 mt-3">
            We recognize the importance of managing your time. With the
            availability toggle in the doctor’s app, you control when patients
            can book consultations, ensuring a balanced and stress-free practice.
          </p>
        </div>
      </div>
    </section>
  );
}
