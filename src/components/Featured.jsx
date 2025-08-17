import React from "react";
import photo13 from "../assets/photo13.png"

const Featured =() => {
  return (
    <section className="bg-yellow-50 py-12 px-8 text-center">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Featured</h2>
      <p className="text-gray-500 mb-6">
        Recognized and celebrated by leading publications – Amrutam in the spotlight!
      </p>
    
      <div className="flex flex-wrap justify-center gap-6">
       <img src={photo13} alt="" />
      </div>
    </section>
  );
}
export default Featured;