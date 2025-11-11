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
              The Anti-Fake-Review Travel Community
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Tucker Trips, we're fighting back against the epidemic of <strong className="text-[#3a4d6f]">fake reviews, paid promotions, and anonymous opinions</strong> that plague big travel websites. We believe travel planning should be based on trust, not guesswork.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              That's why we've created a <strong className="text-[#ec4899]">closed community platform</strong> where you log your trips, share honest experiences, and get reliable advice exclusively from your network of trusted friends and family. Real reviews. Real relationships. Real peace of mind.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b"
              alt="Authentic mountain adventure"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-2xl font-bold text-[#3a4d6f] mb-4">
              📝 Log Your Real Experiences
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Document your trips with honest reviews, detailed logistics, and practical tips. Your trip logs become valuable resources for friends and family planning similar adventures—no fluff, no fake enthusiasm, just the truth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-2xl font-bold text-[#3a4d6f] mb-4">
              🔍 Access Trusted Trip Logs
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Browse detailed trip reports from your trusted network. Know exactly what to expect because you're reading reviews from people who know you, share your values, and have nothing to gain from misleading you.
            </p>
          </div>
        </div>

        {/* Additional Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-2xl font-bold text-[#3a4d6f] mb-4">
              💬 Ask Real Questions, Get Real Answers
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Reach out directly to friends and family who've been there. Get personalized advice, insider tips, and honest opinions tailored to your specific needs—something no anonymous review can provide.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h4 className="text-2xl font-bold text-[#3a4d6f] mb-4">
              🎯 Plan with Complete Confidence
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Make informed decisions based on authentic experiences from people you trust. No more anxiety about fake reviews. No more wondering if you're being scammed. Just confident, stress-free travel planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;