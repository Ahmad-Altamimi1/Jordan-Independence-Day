import React from "react";
import {
  Crown,
  Globe,
  Users,
  Building,
  Handshake,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import kingAbdullah from "../../public/king-abdullah.png";
const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "ترسيخ الملكية الدستورية",
      description:
        "تعزيز ركائز المؤسسات الديمقراطية في إطار دستوري متين، مع الحفاظ على استقرار الأردن وصون الهوية الوطنية الأردنية.",
      year: "1999 - حتى الآن",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "ريادة الدبلوماسية الإقليمية",
      description:
        "تأكيد دور الأردن كمحور استراتيجي في حل النزاعات الإقليمية، وتعزيز جهود السلام والتعاون بين الدول.",
      year: "2000s - حتى الآن",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "القيادة الإنسانية ودعم اللاجئين",
      description:
        "توفير ملاذ آمن لملايين اللاجئين، وترسيخ مكانة الأردن كرمز للإنسانية والمسؤولية الإقليمية.",
      year: "2000s - حتى الآن",
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "إعادة هيكلة الاقتصاد",
      description:
        "تنفيذ إصلاحات اقتصادية جذرية، وجذب الاستثمارات الأجنبية لخلق اقتصاد متنوع وحديث.",
      year: "2000 - حتى الآن",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "تعزيز العلاقات الدولية",
      description:
        "بناء شراكات استراتيجية مع القوى العالمية، مع الحفاظ على استقلالية القرار السياسي الأردني.",
      year: "1999 - حتى الآن",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "نهضة التعليم والابتكار",
      description:
        "تطوير منظومة التعليم، ودفع عجلة الابتكار التكنولوجي لإعداد جيل قادر على مواجهة تحديات المستقبل.",
      year: "2000s - حتى الآن",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Introduction */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <Crown className="w-16 h-16 text-yellow-400 animate-pulse" />
          </div>
          <Image
            src={kingAbdullah}
            alt="King Abdullah II"
            width={200}
            height={200}
            className="mx-auto rounded-full w-40 h-40 object-cover border-4 border-yellow-400 shadow-lg mb-6"
          />
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            جلالة الملك عبدالله الثاني ابن الحسين
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            منذ توليه العرش عام 1999، قاد جلالة الملك عبدالله الثاني مسيرة
            الإصلاح والتحديث بحكمة وبعد نظر، واضعًا الأردن على خارطة الاستقرار
            والتقدم في منطقة تعصف بها التحديات. يتمتع برؤية استراتيجية تجمع بين
            التنمية الاقتصادية، والتعليم، والانفتاح السياسي، والدبلوماسية
            الفاعلة.
          </p>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-green-400 bg-clip-text text-transparent">
            إنجازات جلالة الملك عبدالله الثاني
          </h3>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            رحلة قيادية مبنية على الحكمة والسيادة والتفاني في خدمة الشعب
            الأردني.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/20 hover:scale-105 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg text-black group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <span className="ml-4 text-sm font-semibold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">
                  {achievement.year}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                {achievement.title}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Royal Quote */}
        <div className="bg-gradient-to-r from-red-900/50 via-black/50 to-green-900/50 rounded-3xl p-8 border border-yellow-400/30 backdrop-blur-sm">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Crown className="w-12 h-12 text-black" />
              </div>
            </div>
            <blockquote className="text-2xl md:text-3xl font-light italic mb-6 text-yellow-100 leading-relaxed">
              "استقلالنا ليس فقط سيادة على أرضنا، ولكن سيادة على مصيرنا، وقيمنا،
              والتزامنا ببناء مستقبل أفضل لجميع الأردنيين."
            </blockquote>
            <div className="text-lg font-semibold text-yellow-400">
              - جلالة الملك عبدالله الثاني ابن الحسين
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
