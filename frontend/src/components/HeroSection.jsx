import React from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://customer-assets.emergentagent.com/job_43a6966a-d890-4dd3-91aa-8c7f1d773745/artifacts/9o1y7nx5_tucker-trips_compressed.webm" type="video/webm" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4DB8BA]/70 via-[#6366f1]/60 to-[#7c3aed]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h6 className="text-[#ec4899] text-sm font-semibold uppercase tracking-wider mb-4">Welcome to</h6>
        <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] via-[#f472b6] to-[#ec4899] drop-shadow-[0_0_30px_rgba(236,72,153,0.5)] stroke-white" style={{
            WebkitTextStroke: '2px white',
            paintOrder: 'stroke fill'
          }}>
            Tucker Trips
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-white font-light mb-12 max-w-3xl drop-shadow-lg">
          Experience the world, one voyage at a time.
        </p>
        <Button
          onClick={scrollToContent}
          className="bg-[#ec4899] hover:bg-[#db2777] text-white font-bold px-12 py-6 text-lg rounded-full shadow-2xl hover:shadow-[#ec4899]/50 transition-all duration-300 transform hover:scale-105"
        >
          Explore
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;