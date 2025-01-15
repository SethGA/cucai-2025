"use client";
import { Pixelify_Sans } from "next/font/google";

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

// justify-center requires flex-row
export function About({ isDark }: { isDark: boolean }) {
  const textColor = isDark ? "text-white" : "text-black";

  return (
    <div
      id="about"
      className="second-section flex flex-col -mt-[3%] lg:-mt-[1%] md:flex-row px-5 lg:px-[10vw] py-14 md:px-[80px] md:py-[100px] w-full h-full gap-10"
    >
      <div className={` ${textColor} ${PixelifySans.className} border border-cyan-300 md:hover:scale-110 transition-all`}>
        <p className={`text-[24px] ${textColor}`}>ABOUT CUCAI</p>
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
          Join the Canadian Undergraduate Conference in AI (CUCAI) to connect
          with students, researchers, and industry leaders exploring
          cutting-edge AI.
        </p>
        <p className={`font-[400] mt-[30px] text-[22px] ${textColor}`}>
          Discover, innovate, and shape the future of AI with us!
        </p>
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
        <div className="w-[401px] h-[701px] bg-[#171456] rounded-3xl p-2 aspect-[9/16] hover:scale-110 transition-all">
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
