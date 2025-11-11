import React from 'react';

const FounderSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Testimonial Quote */}
        <div className="mb-16 bg-gradient-to-br from-[#4DB8BA]/10 to-[#ec4899]/10 p-12 rounded-2xl border-l-4 border-[#ec4899]">
          <blockquote className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
            "Stop wasting hours searching through fake reviews from strangers! Tucker Trips connects you with your trusted circle—real friends and family who share honest travel experiences. Plan your adventures with confidence, knowing every review comes from someone you actually know."
          </blockquote>
          <p className="text-lg font-bold text-[#3a4d6f]">— Kristin Stein, Founder</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3a4d6f] leading-tight">
              Why I Founded Tucker Trips
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed text-left">
              <p>
                I started Tucker Trips after becoming increasingly frustrated with the endless—and often fruitless—search for <strong className="text-[#3a4d6f]">trustworthy travel reviews</strong>. While planning family vacations, I found myself drowning in anonymous opinions from strangers on big travel sites, never knowing if the glowing 5-star review was genuine or just another paid promotion.
              </p>
              <p>
                As someone who genuinely loves exploring new places with my loved ones, I realized what I actually needed wasn't more reviews—it was <strong className="text-[#3a4d6f]">better reviews from people I trust</strong>. I wanted to hear from my friends who'd actually been there, my family members who know my travel style, and my network of fellow adventurers whose judgment I value.
              </p>
              <p>
                That's when the idea for Tucker Trips was born—<strong className="text-[#ec4899]">a private travel community where real people share real experiences</strong>. No fake reviews. No hidden agendas. Just authentic trip logs, honest recommendations, and reliable advice from your trusted circle. With the right information at hand from people you know, you can focus on creating memories instead of second-guessing every booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;