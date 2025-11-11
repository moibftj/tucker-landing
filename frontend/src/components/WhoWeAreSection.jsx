import React from 'react';

const WhoWeAreSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h6 className="text-[#4DB8BA] text-sm font-bold uppercase tracking-wider">WHO WE ARE</h6>
            <h2 className="text-4xl md:text-5xl font-bold text-[#3a4d6f] leading-tight">
              Traveling opens door to creating memories.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Tucker Trips, we understand the importance of honest and reliable travel information. That's why we pride ourselves on connecting you with your friends and family for truthful reviews, reliable logistics and dependable information to make your travel experiences exceptional.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b"
              alt="Mountain adventure"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-2xl font-bold text-[#3a4d6f] mb-4">
              Unlock the Key to Unforgettable Adventures
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Explore our platform and gain access to candid reports that reflect real experiences. From accommodations to attractions, restaurants to activities, we provide you with reputable recaps that help you make informed decisions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-2xl font-bold text-[#3a4d6f] mb-4">
              Plan Your Next Trip with Confidence
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Trust our community's firsthand experiences and recommendations. Our members provide truthful reviews and reliable logistics, giving you the information you need to plan your itinerary, find the best places to stay, and discover hidden gems.
            </p>
          </div>
        </div>

        {/* Additional Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-2xl font-bold text-[#3a4d6f] mb-4">
              Unlock the Key to Unforgettable Adventures
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Join a community of travelers who share your passion for exploration. Connect with friends and family who have similar travel interests and benefit from their candid reports and reputable recaps. Together, we create a network of trustworthy insights and experiences.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-2xl font-bold text-[#3a4d6f] mb-4">
              Start Your Journey with Tucker Trips
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Sign up today and experience the power of truthful reviews, reliable logistics, and dependable information. Let us be your guide as you embark on unforgettable travel experiences. Together, we'll explore the world with the support and insights of our community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;