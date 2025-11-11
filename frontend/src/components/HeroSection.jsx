import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Compass } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-[#3a4d6f] to-[#2a3a5a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] via-[#f472b6] to-[#ec4899] drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                  Real travel notes
                </span>
                <br />
                <span className="text-white">
                  from people you trust
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Skip anonymous reviews. Log your trips, share honest lessons, and help your circle travel smarter.
              </p>
            </div>

            {/* Animated Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContent}
                className="group bg-[#ec4899] hover:bg-[#db2777] text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-[#ec4899]/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Start a Trip
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button
                onClick={scrollToContent}
                variant="outline"
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#3a4d6f] font-bold px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Compass className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                Browse Trusted Trips
              </Button>
            </div>

            {/* Microcopy */}
            <div className="pt-2">
              <p className="text-sm text-gray-400">
                🔒 Private by default. Share only with the people you choose.
              </p>
            </div>

            {/* Alt stat line */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#4DB8BA] rounded-full"></div>
                <p className="text-sm text-gray-300">No anonymous reviews</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#4DB8BA] rounded-full"></div>
                <p className="text-sm text-gray-300">Friends & family only</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#4DB8BA] rounded-full"></div>
                <p className="text-sm text-gray-300">Share privately or publicly</p>
              </div>
            </div>
          </div>

          {/* Right Side - Video Animation */}
          <div className="relative animate-float">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 transform hover:scale-[1.02] transition-transform duration-500">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src="https://customer-assets.emergentagent.com/job_43a6966a-d890-4dd3-91aa-8c7f1d773745/artifacts/9o1y7nx5_tucker-trips_compressed.webm" type="video/webm" />
              </video>
              {/* Decorative gradient overlay on video */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3a4d6f]/50 to-transparent pointer-events-none"></div>
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#ec4899] rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#4DB8BA] rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#4DB8BA] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ec4899] rounded-full blur-3xl opacity-10"></div>
    </section>
  );
};

export default HeroSection;