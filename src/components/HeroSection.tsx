import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ImageE from "../../public/أستقلال.png";
const HeroSection = () => {
  const flagRef = useRef<SVGSVGElement>(null);
  const waveRef1 = useRef<SVGPathElement>(null);
  const waveRef2 = useRef<SVGPathElement>(null);
  const waveRef3 = useRef<SVGPathElement>(null);
  const triangleRef = useRef<SVGPolygonElement>(null);
  const flagPoleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      flagRef.current &&
      waveRef1.current &&
      waveRef2.current &&
      waveRef3.current &&
      triangleRef.current &&
      flagPoleRef.current
    ) {
      // Create a timeline for coordinated animations
      const createWaveAnimation = (
        element: SVGElement,
        delay: number,
        amplitude: number
      ) => {
        const animate = () => {
          const startTime = Date.now();
          const duration = 3000 + Math.random() * 1000; // Vary duration slightly
          const baseAmplitude = amplitude;

          const updateWave = () => {
            const elapsed = Date.now() - startTime;
            const progress = (elapsed % duration) / duration;
            const wave1 =
              Math.sin(progress * Math.PI * 2 + delay) * baseAmplitude;
            const wave2 =
              Math.sin(progress * Math.PI * 2 + delay + 1) *
              (baseAmplitude * 0.7);
            const wave3 =
              Math.sin(progress * Math.PI * 2 + delay + 2) *
              (baseAmplitude * 0.4);

            if (element === waveRef1.current) {
              element.setAttribute(
                "d",
                `M0,0 Q20,${2 + wave1} 40,${
                  1 + wave2
                } T80,${wave3} L100,0 L100,33.33 Q80,${33.33 + wave3} 60,${
                  33.33 + wave2
                } T20,${33.33 + wave1} L0,33.33 Z`
              );
            } else if (element === waveRef2.current) {
              element.setAttribute(
                "d",
                `M0,33.33 Q20,${35.33 + wave1} 40,${34.33 + wave2} T80,${
                  33.33 + wave3
                } L100,33.33 L100,66.66 Q80,${66.66 + wave3} 60,${
                  66.66 + wave2
                } T20,${66.66 + wave1} L0,66.66 Z`
              );
            } else if (element === waveRef3.current) {
              element.setAttribute(
                "d",
                `M0,66.66 Q20,${68.66 + wave1} 40,${67.66 + wave2} T80,${
                  66.66 + wave3
                } L100,66.66 L100,100 Q80,${100 + wave3} 60,${
                  100 + wave2
                } T20,${100 + wave1} L0,100 Z`
              );
            }

            requestAnimationFrame(updateWave);
          };

          updateWave();
        };

        setTimeout(animate, delay * 100);
      };

      // Animate the three stripes with different phases and amplitudes
      createWaveAnimation(waveRef1.current, 0, 3);
      createWaveAnimation(waveRef2.current, 1, 2.5);
      createWaveAnimation(waveRef3.current, 2, 2);

      // Animate the red triangle to flutter
      const animateTriangle = () => {
        const startTime = Date.now();
        const updateTriangle = () => {
          const elapsed = Date.now() - startTime;
          const progress = (elapsed % 3500) / 3500;
          const wave = Math.sin(progress * Math.PI * 2) * 1.5;
          const wave2 = Math.sin(progress * Math.PI * 2 + 0.5) * 1;

          if (triangleRef.current) {
            triangleRef.current.setAttribute(
              "points",
              `0,0 0,100 ${25 + wave},${50 + wave2}`
            );
          }

          requestAnimationFrame(updateTriangle);
        };
        updateTriangle();
      };

      animateTriangle();

      // Flagpole swaying animation
      const animatePole = () => {
        const startTime = Date.now();
        const updatePole = () => {
          const elapsed = Date.now() - startTime;
          const progress = (elapsed % 4000) / 4000;
          const sway = Math.sin(progress * Math.PI * 2) * 1.5;

          if (flagPoleRef.current) {
            flagPoleRef.current.style.transform = `rotate(${sway}deg)`;
            flagPoleRef.current.style.transformOrigin = "bottom center";
          }

          // Slight flag container movement
          if (flagRef.current) {
            const flagSway = Math.sin(progress * Math.PI * 2 + 0.3) * 0.8;
            flagRef.current.style.transform = `rotate(${flagSway}deg) translateX(${
              Math.abs(flagSway) * 2
            }px)`;
            flagRef.current.style.transformOrigin = "left center";
          }

          requestAnimationFrame(updatePole);
        };
        updatePole();
      };

      animatePole();
    }
  }, []);

  return (
    <section className="relative min-h-screen flex  overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-90">
        <div className="absolute inset-0  ">
          <Image
            src={ImageE}
            alt="Background Pattern"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      <div className="relative z-10 text-center text-white  w-screen h-screen p-4">
        <div className="mb-8 h-full flex flex-col justify-between">
          {/* Improved Animated Jordanian Flag */}

          {/* <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-green-400 bg-clip-text text-transparent animate-fade-in">
            يوم الاستقلال
          </h1> */}
          <h2 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in animation-delay-500">
            Jordan Independence Day
          </h2>
          <div className="flex  mb-8">
            <div className="relative">
              {/* Improved Flag Pole with realistic proportions */}
              <div
                ref={flagPoleRef}
                className="absolute -left-3 top-0 w-2 h-80 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 rounded-full shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #e5e7eb 0%, #9ca3af 50%, #6b7280 100%)",
                  boxShadow:
                    "inset -2px 0 4px rgba(0,0,0,0.3), 2px 0 8px rgba(0,0,0,0.2)",
                }}
              >
                {/* Pole cap */}
                <div className="absolute -top-2 -left-1 w-4 h-4 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-full shadow-md"></div>
              </div>

              {/* Flag Shadow */}
              <div className="absolute top-2 left-2 opacity-20">
                <svg
                  width="320"
                  height="213"
                  viewBox="0 0 100 100"
                  className="blur-sm"
                >
                  <rect width="100" height="100" fill="#000000" />
                </svg>
              </div>

              {/* Animated Flag with improved realism */}
              <svg
                ref={flagRef}
                width="320"
                height="213"
                viewBox="0 0 100 100"
                className="drop-shadow-2xl relative"
                style={{ filter: "drop-shadow(4px 6px 12px rgba(0,0,0,0.4))" }}
              >
                {/* Black stripe */}
                <path
                  ref={waveRef1}
                  d="M0,0 L100,0 L100,33.33 L0,33.33 Z"
                  fill="#000000"
                  style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
                />
                {/* White stripe */}
                <path
                  ref={waveRef2}
                  d="M0,33.33 L100,33.33 L100,66.66 L0,66.66 Z"
                  fill="#ffffff"
                  style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))" }}
                />
                {/* Green stripe */}
                <path
                  ref={waveRef3}
                  d="M0,66.66 L100,66.66 L100,100 L0,100 Z"
                  fill="#007A3D"
                  style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))" }}
                />
                {/* Red triangle with improved animation */}
                <polygon
                  ref={triangleRef}
                  points="0,0 0,100 25,50"
                  fill="#CE1126"
                  style={{ filter: "drop-shadow(1px 1px 3px rgba(0,0,0,0.4))" }}
                />
                {/* Seven-pointed star with better positioning */}
                <polygon
                  points="12.5,44 14.2,47.5 17.8,47.5 15.1,50.2 16.3,53.7 12.5,51.5 8.7,53.7 9.9,50.2 7.2,47.5 10.8,47.5"
                  fill="#ffffff"
                  style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.5))" }}
                />
              </svg>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold  animate-fade-in animation-delay-500">
            {/* Jordan Independence Day */}
          </h2>
          <div>
            {/* <p className="text-xl md:text-2x  max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-1000">
              Celebrating 79 years of sovereignty, dignity, and progress since
              May 25, 1946
            </p> */}
            <div className=" px-6 md:px-0 animate-fade-in animation-delay-1500">
              <div className="backdrop-blur-md bg-black/30 rounded-2xl p-3 border border-white/10">
                <blockquote className="text-lg md:text-2xl italic font-medium text-white leading-relaxed">
                  "سيبقى الأردن عظيما وطنا طيبا مباركا بأهله وأرضه... ووجها
                  عربيا صادقا.... وعنوانا لكل خير... وكل يوم من أيامه بداية
                  لمستقبل نصنعه بإيمان وعزيمة وثبات"
                </blockquote>
                <div className="mt-4 text-right text-lg md:text-xl font-bold text-yellow-300">
                  – جلالة الملك عبدالله الثاني
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-lg md:text-xl font-semibold animate-fade-in animation-delay-1500">
            🇯🇴 المملكة الأردنية الهاشمية 🇯🇴
          </div> */}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-4 border-yellow-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-4 border-green-400 rotate-45 animate-pulse opacity-50"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 border-4 border-red-400 rounded-full animate-bounce opacity-50"></div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
          opacity: 0;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
          opacity: 0;
        }

        .animation-delay-[2000ms] {
          animation-delay: 2s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
