import React from 'react';
import { Heart } from 'lucide-react';

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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3a4d6f] leading-tight">
              Why I Founded Tucker Trips
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
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
            <div className="flex items-center gap-3 pt-4 text-[#ec4899]">
              <Heart className="w-6 h-6 fill-current" />
              <p className="text-base font-semibold">In loving memory of Tucker, my loyal travel companion</p>
            </div>
          </div>

          {/* Images - Kristin with Tucker */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://customer-assets.emergentagent.com/job_tucker-trips/artifacts/7algba6y_Screenshot%202025-11-11%20170344.jpg"
              alt="Kristin Stein with Tucker outdoors"
              className="w-full h-64 object-cover rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-2 border-gray-100"
            />
            <img
              src="https://customer-assets.emergentagent.com/job_tucker-trips/artifacts/nq0qra6v_Screenshot%202025-11-11%20170414.jpg"
              alt="Kristin Stein and Tucker"
              className="w-full h-64 object-cover rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border-2 border-gray-100"
            />
          </div>
        </div>

        {/* Tribute to Tucker */}
        <div className="mt-16 text-center bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl">
          <div className="flex justify-center mb-4">
            <Heart className="w-12 h-12 text-[#ec4899] fill-current animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold text-[#3a4d6f] mb-3">
            A Tribute to Tucker
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This website is dedicated to the memory of Tucker, my beloved companion whose adventurous spirit and unwavering loyalty inspired countless journeys. Tucker taught me that the best travel experiences are those shared with someone you love and trust—a lesson that lives on in every authentic review and genuine recommendation shared on Tucker Trips.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;