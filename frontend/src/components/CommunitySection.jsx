import React from 'react';

const CommunitySection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1756142007155-c8b4eb0c3808"
              alt="Friends and family traveling together"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h6 className="text-[#4DB8BA] text-sm font-bold uppercase tracking-wider">Your Trusted Circle</h6>
            <h2 className="text-4xl md:text-5xl font-bold text-[#3a4d6f] leading-tight">
              Travel Advice from People Who Actually Know You
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tired of sifting through hundreds of anonymous reviews wondering if they're real? Tucker Trips is your <strong className="text-[#3a4d6f]">private travel community</strong> where you connect exclusively with friends and family you know and trust.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              No more wondering if that "amazing" hotel review was paid for. No more suspicious 5-star ratings from accounts with only one review. Just <strong className="text-[#ec4899]">genuine experiences</strong> from real people in your network who understand your preferences and have your best interests at heart.
            </p>
            <div className="bg-[#4DB8BA]/10 border-l-4 border-[#4DB8BA] p-6 rounded-lg">
              <p className="text-base font-semibold text-[#3a4d6f]">
                ✨ Your circle, your reviews, your perfect trip—no strangers required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;