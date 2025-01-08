"use client";
import { useState, useEffect } from "react";
import "./globals.css";
import { Pixelify_Sans } from "next/font/google";

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

// Where we swap between large and small screens
const border = 950;

// Do we also have a width bug? This section seems unnaturally large, causing extra whitespace

// justify-center requires flex-row
export function AboutCucai({windowWidth}:{windowWidth:number}) {
  // console.log(windowWidth);

  return (
    // To center elements on small screens
    <div className={`flex flex-row bg-gradient-to-b from-[#4d88ff] to-[#a2d8eb] ${windowWidth < border && "justify-center"}`}>

      {/* Parent container of main elements */}
      <div className={`flex ${windowWidth < border && "flex-col"} px-[80px] py-[100px]`}>

        <div className={`flex flex-row ${windowWidth < border && "justify-center"}`}>
          {/* Video of CUCAI - Should scale naturally with website */}
          <div className="w-[401px] h-[701px] bg-[#171456] rounded-3xl p-2 aspect-[9/16]">
            <iframe
              className="rounded-2xl w-full h-full min-w-full min-h-full"
              src="https://www.youtube.com/embed/D9mYUk5Tji4?controls=0?quality=auto"
              allow="accelerometer; autoplay;"
            />
          </div>
        </div>

        {/* This body works */}
        <div className={`${PixelifySans.className} ${windowWidth >= border ? "ml-[7vw]" : "mt-[5vh]"}`}>
          <p className={`text-[24px]`}>ABOUT CUCAI</p>
          <p className={`text-[52px] leading-[62.4px] font-[700] text-[#171456]`}>Where Tomorrow&apos;s AI Innovators Meet</p>
          <p className={`font-[400] mt-[30px] text-[22px]`}>
            Join the Canadian Undergraduate Conference in AI (CUCAI) to connect
            with students, researchers, and industry leaders exploring
            cutting-edge AI.
          </p>
          <p className={`font-[400] mt-[30px] text-[22px]`}>
            Discover, innovate, and shape the future of AI with us!
          </p>
          <p className={`font-[400] mt-[30px] text-[22px]`}>
            <a href="mailto:chair@cucai.ca">
              <img
                src="apply.png"
                alt="Apply to CUCAI"
                className="mt-8 h-[50px] w-[122px] hover:brightness-110 active:brightness-90"
              />
            </a>
          </p>
        </div>
        
        {/* This body doesn't work */}
        {/* <div className={`${PixelifySans.className}`}>
          <p className={`text-[24px]`}>ABOUT CUCAI</p>
          <p className={`text-[52px] leading-[62.4px] font-[700]`}>Where Tomorrow&apos;s AI Innovators Meet</p>
          <p className={`font-[400] mt-[30px]`}>Join tomorrow&apos;s innovators ... stuff stuff stuff stuff</p>
          <p className={`font-[400] mt-[30px]`}>Join us today!</p> */}
          
          {/* Button wrapper
          <p className={`mt-[30px]`}>
            <a>Join discord</a>
          </p>
        </div>  */}
      </div>

    </div>
  );
}
