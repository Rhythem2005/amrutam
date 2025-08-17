import React from "react";
import photo11 from "../assets/photo11.png"

const Download = () => {
  return (
    <section className="bg-yellow-50 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center">
        
     
        <div className="flex-1 mb-10 lg:mb-0">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Get Started Today — <br /> Download the App Now!
          </h2>
          <p className="text-gray-700 mb-8">
            Simplify consultations, manage patients, and grow your practice—
            all in one place.
          </p>

         
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { text: "Build Trust and Community with Forum", icon: "🌿" },
              { text: "Earn More with Pay Per Conversation", icon: "💵" },
              { text: "Attract Patients with 5-Minute Free Call", icon: "📞" },
              { text: "Instant Access to Your Earnings with Wallet", icon: "💳" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center border border-green-700 rounded-lg px-4 py-3 text-sm"
              >
                <span className="mr-2 text-lg">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

         
          <div className="flex space-x-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12"
            />
          </div>
        </div>

       
        <div className="flex-1 flex justify-center">
          <img
            src={photo11} 
            alt="App Preview"
            className="max-h-[600px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Download;
