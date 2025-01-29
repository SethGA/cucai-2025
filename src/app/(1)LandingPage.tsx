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

        <div className="flex flex-col items-center gap-8 w-full sm:hover:scale-110 transition-all">

          <div className="text-center pt-[10%]">
            <h1 className={`text-[9vw] leading-tight max-w-[89vw] sm:text-[48px] ${PixelifySans.className} ${isDark ? 'text-white' : 'text-[#171456]'}`}>
              March 8-9, 2024 | Toronto, ON
            </h1>
            <h1 className={`title text-[9vw] leading-tight max-w-[89vw] sm:text-[148px] ${PixelifySans.className} ${isDark ? 'text-white' : 'text-[#171456]'}`}>
              CUCAI 2025!
            </h1>
            <Countdown 
              font={PixelifySans} 
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
