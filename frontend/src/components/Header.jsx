import React, { useState, useEffect } from 'react';
import { Phone, User } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#3a4d6f]/95 backdrop-blur-sm shadow-lg' : 'bg-[#3a4d6f]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-16 h-16">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="https://customer-assets.emergentagent.com/job_43a6966a-d890-4dd3-91aa-8c7f1d773745/artifacts/d3iha7rk_withoutline.webm" type="video/webm" />
              </video>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold">
                <span className="text-[#ec4899]">Tucker</span>
                <span className="text-white">trips</span>
              </h1>
              <p className="text-[10px] text-white/80 uppercase tracking-wider">LOG YOUR TRIP. INSPIRE OTHERS</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="bg-[#6b7c93] hover:bg-[#7a8ba5] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Button>
            <Button
              variant="ghost"
              className="bg-[#6b7c93] hover:bg-[#7a8ba5] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2"
            >
              <User className="w-4 h-4" />
              <span>Login/Signup</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Pink diagonal accent */}
      <div className="absolute top-0 right-0 w-64 h-full bg-[#ec4899] opacity-30 transform skew-x-[-12deg] translate-x-32 pointer-events-none"></div>
    </header>
  );
};

export default Header;