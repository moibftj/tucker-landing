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
              alt="Community of travelers"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h6 className="text-[#4DB8BA] text-sm font-bold uppercase tracking-wider">tucker trip</h6>
            <h2 className="text-4xl md:text-5xl font-bold text-[#3a4d6f] leading-tight">
              Discover A Community Of Like-Minded Friends And Family
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our community consists of individuals you know and trust, ensuring that the information you receive is reputable and unbiased. No more relying on anonymous sources or second-hand accounts. With us, you can connect with like-minded friends and family who share their authentic experiences, helping you plan your trips with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;