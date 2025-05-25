import React, { useState } from "react";
import { Crown, Shield, Globe, Flag } from "lucide-react";
import Image from "next/image";
import Coat_of_arms_of_Jordan from "../../public/Coat_of_arms_of_Jordan.png";
const CoatOfArmsSection = () => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const coatElements = {
    crown: {
      title: "التاج الملكي الهاشمي",
      titleEn: "The Hashemite Royal Crown",
      description:
        "يرمز إلى النظام الملكي الهاشمي، ويتكون من خمسة أضلاع ذهبية متشابكة بحلقات ترتكز على قاعدة ذهبية.",
      descriptionEn:
        "Symbolizes the Hashemite royal system, consisting of five golden interlaced sides with rings resting on a golden base.",
    },
    throne: {
      title: "وشاح العرش",
      titleEn: "The Throne Sash",
      description:
        "يمثل العرش الهاشمي وهو مصنوع من المخمل الأحمر القرمزي من الخارج والحرير من الداخل، وهما رمز الفداء والصفاء.",
      descriptionEn:
        "Represents the Hashemite throne, made of crimson red velvet on the outside and silk on the inside, symbols of sacrifice and purity.",
    },
    flags: {
      title: "الرايتان",
      titleEn: "The Two Flags",
      description:
        "تمثلان راية الثورة العربية الكبرى، وتقسم أفقياً إلى ثلاث قطع متساوية: سوداء، بيضاء، وخضراء.",
      descriptionEn:
        "Represent the flag of the Great Arab Revolt, divided horizontally into three equal parts: black, white, and green.",
    },
    eagle: {
      title: "طير العقاب",
      titleEn: "The Eagle",
      description:
        "يمثل القوة والبأس والعلو، ورمز لونه إلى راية الرسول محمد صلى الله عليه وسلم وعمامته.",
      descriptionEn:
        "Represents strength, might, and elevation, its color symbolizes the banner of Prophet Muhammad (PBUH) and his turban.",
    },
    globe: {
      title: "الكرة الأرضية",
      titleEn: "The Globe",
      description: "ترمز إلى انتشار الإسلام وحضارته في العالم.",
      descriptionEn:
        "Symbolizes the spread of Islam and its civilization throughout the world.",
    },
    shield: {
      title: "الأسلحة العربية",
      titleEn: "Arabic Weapons",
      description: "ترس مزركش بزهرة الأقحوان يمثل رمز الدفاع عن الحق.",
      descriptionEn:
        "A shield decorated with chrysanthemum flowers representing the symbol of defending the truth.",
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-yellow-600 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-red-600 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-green-600 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Crown className="w-20 h-20 text-yellow-600 animate-pulse" />
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 via-red-600 to-green-600 bg-clip-text text-transparent">
            شعار المملكة الأردنية الهاشمية
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            شعار الأردن يتكون من عدة رموز تحمل معاني عميقة تمثل تاريخ الأردن
            وثقافته
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Interactive Coat of Arms */}
          <div className="relative">
            <div className="relative w-96 h-96 mx-auto">
              {/* Main coat of arms image */}
              <Image
                src={Coat_of_arms_of_Jordan}
                alt="Coat of Arms of Jordan"
                width={320}
                height={320}
                className="w-full h-full object-contain drop-shadow-2xl"
              />

              {/* Interactive hover areas */}
              {/* Crown area */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-20 cursor-pointer z-10"
                onMouseEnter={() => setHoveredElement("crown")}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <div
                  className={`w-full h-full rounded-full transition-all duration-300 ${
                    hoveredElement === "crown"
                      ? "bg-yellow-400/30 border-2 border-yellow-600"
                      : "hover:bg-yellow-400/20"
                  }`}
                ></div>
              </div>

              {/* Throne sash area */}
              <div
                className="absolute top-16 left-8 w-80 h-16 cursor-pointer z-10"
                onMouseEnter={() => setHoveredElement("throne")}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <div
                  className={`w-full h-full rounded-lg transition-all duration-300 ${
                    hoveredElement === "throne"
                      ? "bg-red-400/30 border-2 border-red-600"
                      : "hover:bg-red-400/20"
                  }`}
                ></div>
              </div>

              {/* Flags area */}
              <div
                className="absolute top-32 left-16 w-16 h-32 cursor-pointer z-10"
                onMouseEnter={() => setHoveredElement("flags")}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <div
                  className={`w-full h-full rounded-lg transition-all duration-300 ${
                    hoveredElement === "flags"
                      ? "bg-green-400/30 border-2 border-green-600"
                      : "hover:bg-green-400/20"
                  }`}
                ></div>
              </div>

              <div
                className="absolute top-32 right-16 w-16 h-32 cursor-pointer z-10"
                onMouseEnter={() => setHoveredElement("flags")}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <div
                  className={`w-full h-full rounded-lg transition-all duration-300 ${
                    hoveredElement === "flags"
                      ? "bg-green-400/30 border-2 border-green-600"
                      : "hover:bg-green-400/20"
                  }`}
                ></div>
              </div>

              {/* Eagle area */}
              <div
                className="absolute top-40 left-1/2 transform -translate-x-1/2 w-24 h-20 cursor-pointer z-10"
                onMouseEnter={() => setHoveredElement("eagle")}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <div
                  className={`w-full h-full rounded-full transition-all duration-300 ${
                    hoveredElement === "eagle"
                      ? "bg-gray-600/30 border-2 border-gray-800"
                      : "hover:bg-gray-600/20"
                  }`}
                ></div>
              </div>

              {/* Globe area */}
              <div
                className="absolute top-56 left-1/2 transform -translate-x-1/2 w-16 h-16 cursor-pointer z-10"
                onMouseEnter={() => setHoveredElement("globe")}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <div
                  className={`w-full h-full rounded-full transition-all duration-300 ${
                    hoveredElement === "globe"
                      ? "bg-blue-400/30 border-2 border-blue-600"
                      : "hover:bg-blue-400/20"
                  }`}
                ></div>
              </div>

              {/* Shield area */}
              <div
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-20 h-16 cursor-pointer z-10"
                onMouseEnter={() => setHoveredElement("shield")}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <div
                  className={`w-full h-full rounded-lg transition-all duration-300 ${
                    hoveredElement === "shield"
                      ? "bg-amber-400/30 border-2 border-amber-600"
                      : "hover:bg-amber-400/20"
                  }`}
                ></div>
              </div>
            </div>
          </div>

          {/* Information Panel */}
          <div className="lg:w-1/2">
            {hoveredElement ? (
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-2xl transform transition-all duration-300 hover:shadow-3xl">
                <div className="flex items-center mb-4">
                  {hoveredElement === "crown" && (
                    <Crown className="w-8 h-8 text-yellow-600 mr-3" />
                  )}
                  {hoveredElement === "flags" && (
                    <Flag className="w-8 h-8 text-green-600 mr-3" />
                  )}
                  {hoveredElement === "globe" && (
                    <Globe className="w-8 h-8 text-blue-600 mr-3" />
                  )}
                  {hoveredElement === "shield" && (
                    <Shield className="w-8 h-8 text-amber-600 mr-3" />
                  )}
                  {(hoveredElement === "throne" ||
                    hoveredElement === "eagle") && (
                    <Crown className="w-8 h-8 text-red-600 mr-3" />
                  )}
                  <h4 className="text-2xl font-bold text-gray-800">
                    {
                      coatElements[hoveredElement as keyof typeof coatElements]
                        .title
                    }
                  </h4>
                </div>
                {/* <h5 className="text-xl font-semibold text-gray-600 mb-4">
                  {
                    coatElements[hoveredElement as keyof typeof coatElements]
                      .titleEn
                  }
                </h5> */}
                <p
                  className="text-gray-700 leading-relaxed mb-4 text-right"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  {
                    coatElements[hoveredElement as keyof typeof coatElements]
                      .description
                  }
                </p>
                {/* <p className="text-gray-600 leading-relaxed text-left">
                  {
                    coatElements[hoveredElement as keyof typeof coatElements]
                      .descriptionEn
                  }
                </p> */}
              </div>
            ) : (
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border border-gray-300">
                <div className="text-center">
                  <Crown className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-gray-600 mb-4">
                    استكشف رموز الشعار
                  </h4>

                  <p className="text-gray-500 leading-relaxed">
                    مرر الماوس فوق أجزاء الشعار لتتعرف على معاني كل رمز ودلالته
                    التاريخية والثقافية
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom decorative section */}
        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-4 mb-6">
            <Crown className="w-6 h-6 text-yellow-600 animate-pulse" />
            <Shield className="w-6 h-6 text-red-600 animate-pulse" />
            <Globe className="w-6 h-6 text-blue-600 animate-pulse" />
            <Flag className="w-6 h-6 text-green-600 animate-pulse" />
          </div>

          <p className="text-gray-500 text-sm mt-2 font-arabic">
            "كل رمز يحكي قصة تراث الأردن العريق"
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoatOfArmsSection;
