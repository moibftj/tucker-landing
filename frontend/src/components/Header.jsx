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
      scrolled ? 'bg-[#323f65]/95 backdrop-blur-sm shadow-lg' : 'bg-[#323f65]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Only animated video */}
          <div className="flex items-center">
            <div className="relative h-16 w-auto" style={{ mixBlendMode: 'screen' }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-auto object-contain"
                style={{ maxHeight: '64px', filter: 'brightness(1.2) contrast(1.1)' }}
              >
                <source src="https://customer-assets.emergentagent.com/job_43a6966a-d890-4dd3-91aa-8c7f1d773745/artifacts/d3iha7rk_withoutline.webm" type="video/webm" />
              </video>
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