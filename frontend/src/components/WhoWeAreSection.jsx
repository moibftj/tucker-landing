import React from 'react';

const WhoWeAreSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h6 className="text-[#4DB8BA] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 md:mb-4">Our Approach</h6>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3a4d6f] leading-tight mb-4 md:mb-6">
            The Anti-Anonymous-Review Approach
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We're not a review marketplace. We're a <strong className="text-[#ec4899]">trusted trip log</strong> for real people who actually know each other.
          </p>
        </div>

        {/* Feature Steps */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-[#4DB8BA] mb-3 sm:mb-4">1</div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#3a4d6f] mb-3 sm:mb-4">
              Log your real experiences
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Dates, stops, maps, photos, costs, and a "Lessons Learned" section built-in.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-[#4DB8BA] mb-3 sm:mb-4">2</div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#3a4d6f] mb-3 sm:mb-4">
              Access trusted trip logs
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Browse trips from your friends and family or chosen circles.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-[#4DB8BA] mb-3 sm:mb-4">3</div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#3a4d6f] mb-3 sm:mb-4">
              Ask real questions, get real answers
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              No paid placements.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-3xl sm:text-4xl font-bold text-[#4DB8BA] mb-3 sm:mb-4">4</div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#3a4d6f] mb-3 sm:mb-4">
              Plan with confidence
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Reuse checklists and avoid the mistakes your people already made.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;