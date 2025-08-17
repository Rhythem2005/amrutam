import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-amber-50 text-white text-sm py-2 flex justify-center">
        <span className="text-black">Register Yourself As An Amrutam Doctor</span>
        <button className="ml-4 bg-green-700 px-3 py-1 rounded text-white hover:bg-green-800">
          Join Now
        </button>
      </div>

      <nav className=" bg-amber-50 flex flex-col items-center py-6 shadow">
        <div className=" text-3xl font-bold tracking-wide text-green-800 mb-2">
          AMRUTAM
        </div>

        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-green-700 cursor-pointer">About Us</li>
          <li className="hover:text-green-700 cursor-pointer">Onboarding</li>
          <li className="hover:text-green-700 cursor-pointer">FAQ</li>
          <li className="hover:text-green-700 cursor-pointer">Testimonials</li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;