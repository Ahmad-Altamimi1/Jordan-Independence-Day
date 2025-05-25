import React from "react";

const ArticlesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden ">
      {/* عناصر زخرفية في الخلفية */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-red-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-black opacity-5 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 via-black to-green-600 bg-clip-text text-transparent">
            استقلال الأردن
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            رحلة عبر التاريخ نحتفي فيها بالمحطات التي شكّلت ملامح وطننا الحبيب
            الأردن
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* المقالة اليسرى */}
          <div className="relative">
            {/* شكل زخرفي */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-red-500 to-red-700 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 transform rotate-45 opacity-20"></div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden border-l-8 border-red-600 hover:shadow-3xl transition-all duration-300 hover:scale-105">
              {/* زاوية زخرفية */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-600 to-transparent opacity-10"></div>

              <h3 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="w-3 h-3 bg-red-600 rounded-full mr-4 animate-pulse"></span>
                الطريق إلى الاستقلال
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                في الخامس والعشرين من أيار عام 1946، نال الأردن استقلاله عن
                الانتداب البريطاني، معلنًا قيام المملكة الأردنية الهاشمية. ويُعد
                هذا اليوم التاريخي تتويجًا لسنوات من الجهود الدبلوماسية ورؤية
                الملك المؤسس عبد الله الأول.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                بدأت الرحلة في عام 1921 عندما وصل الأمير عبد الله إلى عمّان وأسس
                إمارة شرق الأردن. ومن خلال الحكمة والصبر والمفاوضات
                الاستراتيجية، تم تمهيد الطريق نحو السيادة الكاملة.
              </p>
              <div className="bg-gradient-to-r from-red-50 to-green-50 p-4 rounded-lg border-l-4 border-red-600">
                <p className="text-red-700 font-semibold italic">
                  "الاستقلال ليس مجرد تحرر من السيطرة الخارجية، بل هو بداية
                  لبناء وطن." - الملك عبد الله الأول
                </p>
              </div>
            </div>
          </div>

          {/* المقالة اليمنى */}
          <div className="relative">
            {/* شكل زخرفي */}
            <div className="absolute -top-5 -right-10 w-28 h-28 bg-gradient-to-br from-green-500 to-green-700 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-5 w-20 h-20 bg-gradient-to-br from-black to-gray-700 transform rotate-12 opacity-20"></div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden border-r-8 border-green-600 hover:shadow-3xl transition-all duration-300 hover:scale-105">
              {/* زاوية زخرفية */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-600 to-transparent opacity-10"></div>

              <h3 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="w-3 h-3 bg-green-600 rounded-full mr-4 animate-pulse"></span>
                بناء المملكة الحديثة
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                بعد الاستقلال، بدأ الأردن مسيرة مبهرة في بناء الدولة. واجهت
                المملكة الفتية تحديات عديدة، لكنها خرجت أقوى بفضل حكمة القيادة
                الهاشمية وصمود شعبها.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                من تأسيس مؤسسات ديمقراطية إلى تعزيز التنمية الاقتصادية، أصبح
                الأردن مثالًا في الاستقرار والتقدم في الشرق الأوسط، محافظًا على
                التزامه بالسلام والعدالة وكرامة الإنسان.
              </p>
              <div className="bg-gradient-to-r from-green-50 to-red-50 p-4 rounded-lg border-l-4 border-green-600">
                <p className="text-green-700 font-semibold italic">
                  "استقلالنا لم يكن نهاية، بل بداية لبناء أمة عربية حديثة
                  ومتقدمة." - الملك الحسين بن طلال
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* عنصر زخرفي مركزي */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 via-black to-green-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
