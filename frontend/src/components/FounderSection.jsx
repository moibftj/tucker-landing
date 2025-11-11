import React from 'react';

const FounderSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3a4d6f] leading-tight">
              Why I Founded Tucker Trips
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I started Tucker Trips after becoming frustrated with the endless search for reviews from strangers while trying to plan the perfect family vacation. As someone who loves exploring new places, I believe in the value of being well-informed before setting out on any adventure. With practical information at hand, I can focus on enjoying my time rather than hunting for activities or attractions once I arrive.
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1509762774605-f07235a08f1f"
              alt="Founder story 1"
              className="w-full h-64 object-cover rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src="https://images.pexels.com/photos/842947/pexels-photo-842947.jpeg"
              alt="Founder story 2"
              className="w-full h-64 object-cover rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="mt-16 bg-gradient-to-br from-[#4DB8BA]/10 to-[#ec4899]/10 p-12 rounded-2xl border-l-4 border-[#ec4899]">
          <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
            "When planning a trip, now rely on the trusted advice of those who have experienced the destination before you. Tucker Trips brings all the reliable and unbiased information you need into one convenient platform, ensuring your journey is stress-free and enjoyable from the start. Connect with people you genuinely know and trust, and start your adventure with confidence!"
          </blockquote>
          <p className="text-lg font-bold text-[#3a4d6f]">Tucker Trips</p>
          <p className="text-base text-gray-600 mt-2">
            Start your journey to extraordinary discoveries with Tucker Trips today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;