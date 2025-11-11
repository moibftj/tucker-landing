import React from 'react';
import { BookOpen, Shield, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Your Personal Travel Journal',
      description: 'Document every adventure with detailed trip logs. Share what worked, what didn\'t, and everything in between. Your honest experiences help friends and family plan better trips.',
      color: '#ec4899'
    },
    {
      icon: Shield,
      title: 'Zero Fake Reviews Guarantee',
      description: 'Every review on Tucker Trips comes from someone in your verified network. No bots, no paid promotions, no anonymous strangers—just trustworthy insights from real people you know.',
      color: '#4DB8BA'
    },
    {
      icon: Users,
      title: 'Your Trusted Travel Tribe',
      description: 'Build your private community of fellow travelers. Connect with friends and family who share your travel style, swap insider tips, and help each other discover amazing destinations with confidence.',
      color: '#6366f1'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h6 className="text-[#4DB8BA] text-sm font-bold uppercase tracking-wider mb-4">How It Works</h6>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3a4d6f] mb-6">
            Real Trip Logs. Real Reviews. Real Trust.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tucker Trips organizes your travel experiences and connects you with people who matter—no fake reviews, no anonymous opinions, just authentic advice from your trusted circle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-8 text-center">
                  <div 
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transform hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <Icon className="w-10 h-10" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#3a4d6f] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;