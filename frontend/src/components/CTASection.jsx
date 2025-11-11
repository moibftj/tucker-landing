import React from 'react';
import { Button } from './ui/button';

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#4DB8BA] via-[#5bc3c5] to-[#6bcfd1]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Ditch Fake Reviews Forever?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Join Tucker Trips today and start planning your adventures with authentic trip logs and honest reviews from your trusted circle of friends and family.
        </p>
        <Button className="bg-white hover:bg-gray-100 text-[#4DB8BA] font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105">
          Join the Community
        </Button>
        <p className="text-white/80 mt-6 text-sm">
          No fake reviews. No anonymous strangers. Just real people you trust.
        </p>
      </div>
    </section>
  );
};

export default CTASection;