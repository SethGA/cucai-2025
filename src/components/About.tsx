"use client";
import { Pixelify_Sans } from "next/font/google";

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

// justify-center requires flex-row
export function About({ isDark }: { isDark: boolean }) {
  
  const headColor = isDark ? "text-[#a2d8d7]" : "text-[#4705d2]" ;
  const textColor = isDark ? "text-white" : "text-black";

  return (
    <div
      id="about"
      className="second-section flex flex-col md:flex-row px-5 lg:px-[10vw] py-14 md:px-[80px] md:py-[100px] w-full h-full gap-10"
    >
      <div className={`${PixelifySans.className} border border-cyan-300 md:hover:scale-105 transition-all`}>
        <p className={`text-[24px] ${headColor} font-[600]`}>ABOUT CUCAI</p>
        <div className={textColor}>
          <p
            className={`${
              PixelifySans.className
            } text-[52px] leading-[62.4px] font-[700] ${
              isDark ? "text-white" : "text-[#171456]"
            }`}
          >
            Where Tomorrow&apos;s AI Innovators Meet
          </p>
          <p className={`font-[400] mt-[30px] text-[22px] ${textColor}`}>
            We are a not-for-profit conference that brings together over 320 of the brightest minds in AI from across the country.
            100% run by undergraduate volunteers, out of passion.
          </p>
          <p className={`font-[400] mt-[30px] text-[22px] ${textColor}`}>
            Since our inception in 2018, CUCAI has served as a platform for top Canadian undergraduates in AI to learn, share their passion, and connect with industry leaders.
            Our main event is the AI project showcase where student teams from across Canada demo their project and paper in front of
            recruiters, sponsors, speakers, & their fellow delegates.
          </p>
          <p className={`font-[400] mt-[30px] text-[22px] ${textColor}`}>
            CUCAI 2025 will be held in Toronto, Ontario on March 8-9.
          </p>
        </div>
        <p className={`font-[400] mt-[30px] text-[22px] `}>
          <a href="mailto:chair@cucai.ca">
            <img
              src="apply.png"
              alt="Apply to CUCAI"
              className="mt-8 h-[50px] w-[122px] hover:brightness-110 active:brightness-90"
            />
          </a>
        </p>
      </div>

      <div className="flex flex-row">
        <div className="w-[401px] h-[701px] bg-[#171456] rounded-3xl p-2 aspect-[9/16] hover:scale-105 transition-all">
          <iframe
            className="rounded-2xl w-full h-full min-w-full min-h-full"
            src="https://www.youtube.com/embed/D9mYUk5Tji4?controls=0?quality=auto"
            allow="accelerometer; autoplay;"
          />
        </div>
      </div>

    </div>
  );
}
