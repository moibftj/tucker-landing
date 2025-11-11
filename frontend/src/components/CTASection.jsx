import React from 'react';
import { Button } from './ui/button';

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#4DB8BA] via-[#5bc3c5] to-[#6bcfd1]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
          "Sign up for Tucker Trips today and unlock access to reliable, firsthand travel experiences shared by a trusted community of friends and family. Plan your next adventure with confidence!"
        </h2>
        <Button className="bg-white hover:bg-gray-100 text-[#4DB8BA] font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105">
          Login/Signup
        </Button>
      </div>
    </section>
  );
};

export default CTASection;