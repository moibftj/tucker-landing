import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Search } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#4DB8BA] via-[#5bc3c5] to-[#6bcfd1]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Plan your next trip with advice from people who know you
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-white hover:bg-gray-100 text-[#4DB8BA] font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-white/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            Start a Trip
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button 
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#4DB8BA] font-bold px-12 py-6 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <Search className="w-5 h-5" />
            Explore Discover
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;