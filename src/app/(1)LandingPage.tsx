"use client";

import { Pixelify_Sans } from "next/font/google";
import { Countdown } from "./CountDown";
import Header from "./Header";
import { SetStateAction } from "react";

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

export function Landing({
  windowWidth,
  isDark,
  setDark
}: {
  windowWidth: number;
  isDark: boolean;
  setDark: any;
}) {
  return (
    <div className="first-section">
      <div className="toronto-skyline px-4">
        {/* Put this elem at the top 
            TODO: Center it
        */}

        <div className="absolute top-0 w-[90vw] mt-[1%]">
          <Header isDark={isDark} setDark={setDark} />
        </div>

        {/* <Header isDark={isDark} setDark={setDark} /> */}

        <div className={`flex flex-col items-center gap-8 w-full sm:hover:scale-110 transition-all  ${isDark ? 'text-white' : 'text-black'} font-[PixeloidSansBold]`}>

          <div className="text-center pt-[10%]">
            <h1 className={`text-[9vw] leading-tight max-w-[89vw] sm:text-[48px]`}>
              March 8-9, Toronto, Ontario
            </h1>
            <h1 className={`title text-[9vw] leading-tight max-w-[89vw] sm:text-[148px]`}>
              CUCAI 2025!
            </h1>
            <div className="flex flex-col sm:flex-row justify-center items-baseline pb-4">
              <p className="text-xl sm:text-4xl font-[700] mx-auto sm:mx-0 sm:mr-2">Powered by</p>
              <img 
                src={isDark ? "./logos/accenture-logo.png" : "./logos/accenture-logo-dark.png"}
                className={`h-12 w-auto mx-auto sm:mx-0`}
              />
            </div>
            <Countdown 
              className="font-[PixeloidSansBold]" 
              isDark={isDark} 
            />
          </div>

        </div>
      </div>
    </div>
  );
}


/*
Fixes:
 landing page Toronto backdrop 
- 1. fix so that it covers entire screen (left and right edges aren't covered)
- 2. remove thin blue line between Toronto backdrop and starting fade of section 2 (about cucai)

- 1. Fixed using background-size: cover
- 2. png has the thin line, adjust the png and we'll be ok
*/

/*
Fixes:
 landing page Toronto backdrop 
- 1. fix so that it covers entire screen (left and right edges aren't covered)
- 2. remove thin blue line between Toronto backdrop and starting fade of section 2 (about cucai)

- 1. Fixed using background-size: cover
- 2. png has the thin line, adjust the png and we'll be ok
*/
