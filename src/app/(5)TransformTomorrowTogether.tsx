"use client";

// THIS IS DEPRECATED - WE ARE NO LONGER INCLUDING THIS SECTION

import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";


export const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const achievements = [
  { number: "340+", category: "DELEGATES" },
  { number: "10+", category: "INDUSTRY PARTNERS" },
  { number: "19", category: "SCHOOLS REPRESENTED" },
];

/* This component should go first on smaller screens. Otherwise, should go second. */
const TeamImage = () => (
  /* Looks good when JUST the wrapper is used, for some reason. Strange. */
  <div className="pixel-corners--wrapper hover:scale-110 transition-all">
    <img 
      src="./image 32.png"
      alt="Picture of us!"
      className="w-auto max-h-[45vh]"
    />
  </div>
)

export function ContactUs({ windowWidth, isDark }: { windowWidth:number, isDark: boolean }) {
  const textColor = isDark ? "text-white" : "text-black";

  return (
    // 1401 sm:flex-col md:flex-col lg:flex-row

    <div
      className={`fifth-section flex flex-row justify-center`}>
      <div className={`flex flex-col gap-8 md:flex-row my-8 px-8`}>
        
        {windowWidth < 768 && <TeamImage />}

        <div className="flex flex-row justify-center md:flex-none hover:scale-110 transition-all">
          <div className={`flex flex-col w-[40vw] ${PixelifySans.className} ${textColor}`}>

            {/* Text stuff */}
            <div className="text-center md:text-left">
              <p className="text-xl sm:text-[24px] font-[500]">JOIN US</p>
                            
              <div className="flex flex-row justify-center w-full">
                <p className={`${PixelifySans.className} text-4xl sm:text-5xl font-[700] my-[3%]`}>Transform Tomorrow Together</p>
              </div>

              <div className="text-lg sm:text-xl font-[400] mb-[3%]">
                <p>Have questions or want to get involved?</p>
                <p>Get in touch with us and join the CUCAI Community!</p>  
              </div>
            </div>
            
            <a className={`mt-[3%] ${windowWidth < 768  && "flex flex flex-row justify-center"}`}>
              <img 
                src="./contact-us-button.png"
                alt="mailto:chair@cucai.ca" 
                className={`w-[160px] h-auto hover:brightness-110 active:brightness-90`}
              />
            </a>
          </div>
        </div>

        {windowWidth >= 768 && <TeamImage />}

      </div>
    </div>
  );
}
