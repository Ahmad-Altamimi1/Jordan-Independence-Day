import React from "react";
import { Play, Crown, Star } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-red-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-green-400 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-red-400 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Crown className="w-20 h-20 text-yellow-400 animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <Play className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-3xl md:text-5xl font-bold-4 bg-gradient-to-r from-yellow-400 via-red-500 to-green-400 bg-clip-text text-transparent">
            كلمة جلالة الملك
          </h2>
        </div>

        {/* Video Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-yellow-400/30 shadow-2xl">
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-yellow-400 rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-yellow-400 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-yellow-400 rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-yellow-400 rounded-br-lg"></div>

            {/* Video iframe */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/ajboo3AQ5Vs"
                title="الملك يوجه كلمة للأردنيين بمناسبة عيد الاستقلال الـ 79"
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>

            {/* Video description */}
            <div className="mt-6 text-center">
              <div className="flex justify-center items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">
                  الرسالة الملكية الرسمية
                </span>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                جلالة الملك عبدالله الثاني يوجه كلمة للشعب الأردني بمناسبة عيد
                الاستقلال التاسع والسبعين، مؤكداً على مسيرتنا المتواصلة معاً في
                بناء نهضة وطننا.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom decorative section */}
        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-4 mb-6">
            {[...Array(7)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>

          <p className="text-gray-400 text-sm mt-2 font-arabic">
            "مستمرون معاً بنهضة وطننا"
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
