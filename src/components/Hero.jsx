import React from "react";
import photo2 from '../assets/photo2.png'

const Hero = () => {
  return (
    <section className="bg-amber-50 py-12 px-8 flex flex-col md:flex-row items-center">
      <div className="flex-1 space-y-6">
        <p className="text-gray-500">Namaste, Welcome to Amrutam</p>
        <h1 className="text-4xl font-bold text-green-800">
          Join Amrutam – <span className="text-green-600">Grow Your Practice</span>
        </h1>
        <p className="text-gray-600">
          Connect with more patients, set your own schedule, and grow your Ayurvedic practice effortlessly.
        </p>
        <button className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800">
          Join Now
        </button>
        <div className="flex space-x-8 pt-4">
          <div>
            <p className="text-xl font-bold text-green-800">500+</p>
            <p className="text-gray-500 text-sm">Average Active Users</p>
          </div>
          <div>
            <p className="text-xl font-bold text-green-800">40+</p>
            <p className="text-gray-500 text-sm">Average daily free calls</p>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <div className="w-80 h-80 bg-gray-200 rounded-full flex items-center justify-center">
          <img src={photo2} alt="my photo" />
        </div>
      </div>
    </section>
  );
}
export default Hero;