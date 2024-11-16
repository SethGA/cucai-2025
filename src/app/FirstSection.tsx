"use client";

import { Pixelify_Sans } from "next/font/google";

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
})

export default function FirstSection() {
  return (
    <div className="first-section">
      <div className="toronto-skyline">

        
        <div className="white-box flex flex-col items-center gap-8">
          <h1 className={"title " + PixelifySans.className}>{"Experience AI's Future at CUCAI 2025!"}</h1>
          <p className="subtext">
            Empowering the Next Generation of AI Innovators
          </p>
          <a href="/">
          <img 
            src="register-now.png"
            alt="Apply to CUCAI"
            className=" h-[50px] w-[142px]"
          />
          </a>
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
