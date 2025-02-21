"use client";

import Image from "next/image";
import { Pixelify_Sans, IBM_Plex_Sans } from "next/font/google";
import { student_partners } from "@/data/student_partners";

export const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

interface Partner {
  name: string;
  logo: string;
  university: string;
  website: string;
  insta: string;
  width: number;
}

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const chunk_array = (array: Partner[], size: number) => {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};


export function StudentPartners({windowWidth, isDark}:{windowWidth:number, isDark:boolean}) {

  // console.log(windowWidth);
  // console.log(Math.floor(windowWidth / 382));
  
  const chunked_partners = chunk_array(
    student_partners,
    Math.min(Math.floor(windowWidth / 382) + 1, 3)
  );

  const start_color = isDark ? [60, 60, 128] : [111, 169, 242];
  const end_color = isDark ? [23, 20, 86] : [116, 173, 246];
  const diffs = end_color.map((color, i) => (color - start_color[i]));
  const qmind_color = isDark ? [60, 60, 128] : [131, 187, 243];
  const textColor = isDark ? "text-white" : "text-black";
  const headColor = isDark ? "text-[#a2d8d7]" : "text-[#4705d2]" ;

  let gradients = Array.from({ length: chunked_partners.length }, (_, i) => ({
    from: `rgb(${
      start_color[0] - i * diffs[i]
    }, ${
      start_color[1] - i * diffs[i]
    }, ${
      start_color[2]- i * diffs[i]
    })`,

    to: `rgb(${
      end_color[0] - (i + 1) * diffs[i]
    }, ${
      end_color[1] - (i + 1) * diffs[i]
    }, ${
      end_color[2] - (i + 1) * diffs[i]
    })`,
  }));

  // console.log(diffs);

  // for(let i = 0; i < gradients.length; i++){
  //   console.log(i + " " + gradients[i].from + ", " + gradients[i].to);
  // }
  console.log(chunked_partners[0]);
  console.log(chunked_partners[1]);

  return (
    <div className="fourth-section flex flex-row justify-center p-8">
      <div className="flex flex-col">
        {/* Title text */}
        <div className={`${PixelifySans.className} ${textColor}`}>
          <p className={`text-xl sm:text-3xl font-[500] ${headColor}`}>
            OUR STUDENT PARTNERS
          </p>
          <p className="text-[52px] font-[700] leading-[62.4px] mb-[3%]">
            Empowering Tomorrow&apos;s Experts Today
          </p>
        </div>
        {/* QMIND Feature */}
        <div className="flex flex-row justify-center">
          <div className="pixel-corners--wrapper hover:scale-110 transition-all">
            <div 
              className={`pixel-corners w-[70vw] lg:w-[60vw]`}
              style={{
                background: `rgb(${qmind_color})`
              }}
            >
              <div className="p-8 flex flex-col md:flex-row md:justify-center">
                {/* Text stuff */}
                <div className={`flex flex-col text-center md:text-right ${PixelifySans.className} ${textColor}`}>
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-[700]">
                    QMIND
                  </p>
                  <p className="text-2xl lg:mt-4">
                    Queen&apos;s University
                  </p>
                  <div>

                    <div className="flex flex-row justify-center mt-2">
                      <div className={`flex ${windowWidth >= 500 ? "flex-row gap-6" : "flex-col"}`}>
                        <a href="https://qmind.ca/" 
                          className="flex flex-row items-center"
                        >
                          <p className="text-2xl underline gap-1">
                            Website
                          </p>
                          <img 
                            src="./Link.png"
                            alt="Link symbol"
                            className={`w-[24px] h-[24px] ${isDark && "invert"}`}
                          />
                        </a>
                        <a 
                          href="https://www.instagram.com/qmind.ai/"  
                          className="flex flex-row items-center gap-1"
                        >
                          <p className="text-2xl underline">
                            Insta
                          </p>
                          <img 
                            src="./insta.png"
                            alt="Insta symbol"
                            className={`w-[24px] h-[24px] ${isDark && "invert"}`}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Logo */}
                <div className={`${windowWidth < 773 && "flex flex-row justify-center mt-4"}`}>
                  <img 
                    src="./logos/qmind-logo.png"
                    alt="QMIND Logo"
                    className="w-[50vw] h-auto max-w-[100%] px-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of other partners */}
        <div>
          {chunked_partners.map((row, row_index) => (
            <div key={row_index} className="flex flex-row justify-center">
              <div className="mt-[8vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[5vw]">
              {row.map((partner, index) => (
                  // Partner exterior
                  <div key={index} className="pixel-corners--wrapper hover:scale-110 transition-all">

                    {/* Partner interior */}
                    <div 
                      className="pixel-corners w-[70vw] sm:w-[40vw] lg:w-[25vw] p-8 min-h-[45vh]"
                      // className="pixel-corners w-[70vw] sm:w-[27vw] md:w-[45vw] lg:w-[27vw] min-h-[35vh]"
                      style={{
                        background: gradients[row_index] ? 
                          `linear-gradient(to bottom, ${gradients[row_index].from}, ${gradients[row_index].to})`
                          :
                          'bg-green-200',
                      }}
                    >
                      <div className="flex flex-row justify-center">
                        <div className="flex flex-col">
                          {/* Manually tune each logo based on behavior */}
                          <div className="flex flex-row justify-center">
                            {/* UTMIST's logo is too wide, causing problems. Help would be greatly appreciated. */}
                            <img 
                              src={partner.logo}
                              style={{
                                width: `${1.1*partner.width}px`,
                                // height: `${partner.name == "UTMIST" ? "auto" : "90px"}`
                                height: `100px`
                              }}
                              // className={`w-[${partner.width}px]`}
                            />
                          </div>
                          <p className={`${PixelifySans.className} ${textColor} text-center mt-4`}>
                            <p className={`lg:mt-[3vh] text-4xl sm:text-5xl font-[700]`}>
                              {partner.name}
                            </p>
                            <p className={`text-2xl lg:mt-4`}>
                              {partner.university}
                            </p>
                            
                            {/* Links */}
                            <div className="flex flex-row justify-center mt-2 md:mt-8">
                              <div className={`flex ${windowWidth >= 500 ? "flex-row gap-6" : "flex-col"} lg:gap-6`}>
                                <a href={partner.website} className="flex flex-row items-center">
                                  <p className="text-2xl underline gap-1">
                                    Website
                                  </p>
                                  <img 
                                    src="./Link.png"
                                    alt="Link symbol"
                                    className={`w-[24px] h-[24px] ${isDark && "invert"}`}
                                  />
                                </a>
                                <a href={partner.insta} className="flex flex-row items-center gap-1">
                                  <p className="text-2xl underline">
                                    Insta
                                  </p>
                                  <img 
                                    src="./insta.png"
                                    alt="Insta symbol"
                                    className={`w-[24px] h-[24px] ${isDark && "invert"}`}
                                  />
                                </a>
                              </div>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Become a partner button */}
        <a href="mailto:chair@cucai.ca" className="flex flex-row justify-center sm:hover:scale-110 transition-all">
          <img 
            src="./become_a_partner.png"
            alt="Become a partner here"
            className="mt-8 h-[61px] w-[220px] hover:brightness-90"
          />
        </a>
      </div>
    </div>
  );
}
