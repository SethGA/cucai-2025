"use client";
import "./globals.css";
import { Pixelify_Sans } from "next/font/google";

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

// Where we swap between large and small screens
const border = 950;

// May be more width bugs in code caused by setting it to a static number of pixels - stay vigilant

// justify-center requires flex-row
export function AboutCucai({windowWidth, isDark}:{windowWidth:number, isDark:boolean}) {

  const [start, end] = isDark ? [
    "#171456",
    "#404084"
  ] : [
    "#4d88ff",
    "#a2d8eb"
  ];
  const textColor = isDark ? " text-[#4705d2]" : "text-[#a2d8d7]";
  // console.log([start, end]);

  return (
    // To center elements on small screens
    <div className={`second-section flex flex-row ${windowWidth < border && "justify-center"}`}>

      {/* Parent container of main elements */}
      <div className={`flex ${windowWidth < border && "flex-col"} px-[80px] py-[100px]`}>

        <div className={`flex flex-row ${windowWidth < border && "justify-center"}`}>
          {/* Video of CUCAI - Should scale naturally with website 
              Phones are smaller than this video, causing bugs - fix this!
          */}
          <div className={`max-w-[401px] sm:w-[401px] h-[701px] bg-[#171456] rounded-3xl p-2 aspect-[9/16]`}>
            <iframe
              className="rounded-2xl w-full h-full min-w-full min-h-full"
              src="https://www.youtube.com/embed/D9mYUk5Tji4?controls=0?quality=auto"
              allow="accelerometer; autoplay;"
            />
          </div>
        </div>

        {/* This body works */}
        <div className={`${PixelifySans.className} max-w-[565px] ${textColor} ${windowWidth >= border ? "ml-[7vw]" : "mt-[5vh]"}`}>
          <p className={`text-[24px] ${textColor}`}>ABOUT CUCAI</p>
          <p className={`text-4xl sm:text-5xl leading-[62.4px] font-[700] ${isDark ? "text-white" : "text-[#171456]"}`}>Where Tomorrow&apos;s AI Innovators Meet</p>
          <p className={`font-[400] mt-[30px] text-[22px] ${textColor}`}>
            Join the Canadian Undergraduate Conference in AI (CUCAI) to connect
            with students, researchers, and industry leaders exploring
            cutting-edge AI.
          </p>
          <p className={`font-[400] mt-[30px] text-[22px] ${textColor}`}>
            Discover, innovate, and shape the future of AI with us!
          </p>
          <p className={`font-[400] mt-[30px] text-[22px] ${windowWidth < border && "flex flex-row justify-center"}`}>
            <a href="mailto:chair@cucai.ca">
              <img
                src="apply.png"
                alt="Apply to CUCAI"
                className="mt-8 h-[50px] w-[122px] hover:brightness-110 active:brightness-90"
              />
            </a>
          </p>
        </div>
        
      </div>

    </div>
  );
}
