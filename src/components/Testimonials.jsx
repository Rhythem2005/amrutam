import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-amber-50 py-12 px-6 rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-8">What Experts Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Testimonial 1 */}
        <div className="bg-yellow-50 shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">
            Dr. Pooja Deshmukh, BAMS
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Amrutam beautifully bridges the gap between traditional Ayurveda and
            modern wellness. Their high-quality ingredients and ethical practices
            make them a trustworthy choice for those looking to embrace a
            healthier lifestyle.
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-yellow-50 shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">
            Dr. Arjun Mehta, Ayurvedic Doctor
          </h3>
          <p className="text-gray-700 leading-relaxed">
            As an Ayurvedic doctor, I appreciate Amrutam’s commitment to purity
            and efficacy. Their herbal blends are thoughtfully crafted, ensuring
            maximum benefits for mind and body. I’ve personally seen positive
            results in my patients using their products.
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-yellow-50 shadow-md rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">
            Dr. Kavita Sharma, Holistic Practitioner
          </h3>
          <p className="text-gray-700 leading-relaxed">
            What I admire most about Amrutam is their dedication to authenticity.
            Their products remain true to Ayurveda’s wisdom while being easy to
            integrate into modern life. This balance makes them a reliable choice
            for my patients seeking natural solutions.
          </p>
        </div>

      </div>
    </div>
  );
}
export default Testimonials;