import React from "react";
import { Heart, Star, Crown } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* شريط علوي زخرفي */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-white to-green-600"></div>

      <div className="container mx-auto px-4 py-16">
        {/* محتوى التذييل الرئيسي */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* عن الأردن */}
          <div className="space-y-4 text-right">
            <h3 className="text-2xl font-bold mb-4 flex items-center ">
              <span className="mr-2">الأردن</span>
              <Crown className="w-6 h-6 text-yellow-400" />
            </h3>
            <p className="text-gray-300 leading-relaxed">
              المملكة الأردنية الهاشمية، منارة للاستقرار والسلام والتقدم في
              الشرق الأوسط منذ عام 1946.
            </p>
            <div className="flex  space-x-2 rtl:space-x-reverse">
              <div className="w-8 h-6 bg-black"></div>
              <div className="w-8 h-6 bg-white"></div>
              <div className="w-8 h-6 bg-green-600"></div>
              <div className="w-8 h-6 bg-red-600 clip-triangle"></div>
            </div>
          </div>

          {/* حقائق عن الاستقلال */}
          <div className="space-y-4 ">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              حقائق عن الاستقلال
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center ">
                <span className="ml-2">التاريخ: 25 أيار 1946</span>
                <Star className="w-4 h-4 text-yellow-400" />
              </li>
              <li className="flex items-center ">
                <span className="ml-2">من: الانتداب البريطاني</span>
                <Star className="w-4 h-4 text-yellow-400" />
              </li>
              <li className="flex items-center ">
                <span className="ml-2">الملك الأول: عبد الله الأول</span>
                <Star className="w-4 h-4 text-yellow-400" />
              </li>
              <li className="flex items-center ">
                <span className="ml-2">الملك الحالي: عبد الله الثاني</span>
                <Star className="w-4 h-4 text-yellow-400" />
              </li>
            </ul>
          </div>

          {/* الرموز الوطنية */}
          <div className="space-y-4 ">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              الرموز الوطنية
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>🇯🇴 العلم: ألوان الوحدة العربية</li>
              <li>👑 الشعار: التاج الملكي</li>
              <li>🌟 النجمة السباعية</li>
              <li>🦅 نسر صلاح الدين</li>
              <li>🏛️ العاصمة: عمّان</li>
            </ul>
          </div>

          {/* السلالة الهاشمية */}
          <div className="space-y-4 ">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              السلالة الهاشمية
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>عبد الله الأول (1946-1951)</li>
              <li>طلال (1951-1952)</li>
              <li>الحسين (1952-1999)</li>
              <li>عبد الله الثاني (1999-الحاضر)</li>
            </ul>
            <p className="text-xs text-gray-400 mt-4">من نسل النبي محمد ﷺ</p>
          </div>
        </div>

        {/* لافتة الذكرى السنوية */}
        <div className="bg-gradient-to-r from-red-900/30 via-green-900/30 to-black/30 rounded-2xl p-6 mb-8 border border-yellow-400/20">
          <div className="text-center">
            <h4 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              79 عاماً من الاستقلال
            </h4>
            <p className="text-gray-300 text-lg">
              1946 - 2025 | ٧٩ عاماً من الاستقلال
            </p>
            <div className="flex justify-center mt-4 space-x-0 rtl:space-x-reverse">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* التذييل السفلي */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-right mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2025 احتفال يوم الاستقلال الأردني
              </p>
              <p className="text-sm text-gray-500 mt-1">عاش الأردن</p>
            </div>

            <div className="flex items-center space-x-2 text-red-400 rtl:space-x-reverse">
              <span>صُنع بحب</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>للأردن</span>
            </div>
          </div>

          {/* عنصر زخرفي نهائي */}
          <div className="mt-8 flex justify-center">
            <div className="w-64 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* زخرفة خلفية */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-red-900/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-900/10 to-transparent rounded-full"></div>
    </footer>
  );
};

export default Footer;
