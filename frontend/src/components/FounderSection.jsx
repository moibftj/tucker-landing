import React from 'react';
import { Heart } from 'lucide-react';

const FounderSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Testimonial Quote */}
        <div className="mb-16 bg-gradient-to-br from-[#4DB8BA]/10 to-[#ec4899]/10 p-12 rounded-2xl border-l-4 border-[#ec4899]">
          <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
            "When planning a trip, now rely on the trusted advice of those who have experienced the destination before you. Tucker Trips brings all the reliable and unbiased information you need into one convenient platform, ensuring your journey is stress-free and enjoyable from the start. Connect with people you genuinely know and trust, and start your adventure with confidence!"
          </blockquote>
          <p className="text-lg font-bold text-[#3a4d6f]">Tucker Trips</p>
          <p className="text-base text-gray-600 mt-2">
            Start your journey to extraordinary discoveries with Tucker Trips today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3a4d6f] leading-tight">
              Why I Founded Tucker Trips
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I started Tucker Trips after becoming frustrated with the endless search for reviews from strangers while trying to plan the perfect family vacation. As someone who loves exploring new places, I believe in the value of being well-informed before setting out on any adventure. With practical information at hand, I can focus on enjoying my time rather than hunting for activities or attractions once I arrive.
            </p>
            <div className="flex items-center gap-3 pt-4 text-[#ec4899]">
              <Heart className="w-6 h-6 fill-current" />
              <p className="text-base font-semibold">In loving memory of Tucker</p>
            </div>
          </div>

          {/* Images - Kristin with Tucker */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://customer-assets.emergentagent.com/job_tucker-trips/artifacts/7algba6y_Screenshot%202025-11-11%20170344.jpg"
              alt="Kristin Stein with Tucker outdoors"
              className="w-full h-64 object-cover rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-2 border-gray-100"
            />
            <img
              src="https://customer-assets.emergentagent.com/job_tucker-trips/artifacts/nq0qra6v_Screenshot%202025-11-11%20170414.jpg"
              alt="Kristin Stein and Tucker"
              className="w-full h-64 object-cover rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-2 border-gray-100"
            />
          </div>
        </div>

        {/* Tribute to Tucker */}
        <div className="mt-16 text-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl">
          <div className="flex justify-center mb-4">
            <Heart className="w-12 h-12 text-[#ec4899] fill-current animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold text-[#3a4d6f] mb-3">
            A Tribute to Tucker
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This website is dedicated to the memory of Tucker, whose love for adventure and companionship inspired the creation of Tucker Trips. His spirit lives on in every journey we help plan and every memory we help create.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;