import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#e6ebdd] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT - GET IN TOUCH */}
        <div>
          <h2 className="text-green-900 text-2xl font-bold tracking-wide mb-4">
            AMRUTAM
          </h2>
          <h3 className="text-green-800 font-semibold mb-2">Get in touch</h3>
          <p className="text-gray-700 mb-2">support@amrutam.global</p>
          <p className="text-gray-700 mb-2">
            Amrutam Pharmaceuticals Pvt Ltd.,<br />
            chitragupt ganj, Nai Sadak, Lashkar,<br />
            Gwalior – 474001
          </p>
          <p className="text-gray-700">+91 9713171999</p>
        </div>

        {/* CENTER - INFORMATION */}
        <div>
          <h3 className="text-green-800 font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Privacy Policy for Mobile App</a></li>
            <li><a href="#">Shipping and Return Policy</a></li>
            <li><a href="#">International Delivery</a></li>
            <li><a href="#">For Business, Hotels and Resorts</a></li>
          </ul>
        </div>

        {/* RIGHT - FOLLOW US */}
        <div>
          <h3 className="text-green-800 font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-green-800 p-2 rounded-full text-white hover:bg-green-700">
            </a>
            <a href="#" className="bg-green-800 p-2 rounded-full text-white hover:bg-green-700">
            </a>
            <a href="#" className="bg-green-800 p-2 rounded-full text-white hover:bg-green-700">
            </a>
            <a href="#" className="bg-green-800 p-2 rounded-full text-white hover:bg-green-700">
            </a>
            <a href="#" className="bg-green-800 p-2 rounded-full text-white hover:bg-green-700">
            </a>
            <a href="#" className="bg-green-800 p-2 rounded-full text-white hover:bg-green-700">
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
