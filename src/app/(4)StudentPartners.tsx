"use client";

import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";
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
}

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
    Math.min(Math.floor(windowWidth / 382), 3)
  );

  var fade_speed = 5;

  const start_color = isDark ? [60, 60, 128] : [111, 169, 242];
  const end_color = isDark ? [23, 20, 86] : [116, 173, 246];
  const qmind_color = isDark ? [60, 60, 128] : [131, 187, 243];

  const gradients = Array.from({ length: chunked_partners.length }, (_, i) => ({
    from: `rgb(${start_color[0] - i * fade_speed}, ${start_color[1] - i * fade_speed}, ${start_color[2]})`,
    to: `rgb(${end_color[0] - (i + 1) * fade_speed}, ${
      end_color[1] - (i + 1) * fade_speed
    }, ${end_color[2]})`,
  }));

  console.log(gradients);

  return (
    <div id="student-partners" className="fourth-section">
      <div className="flex flex-col">
        <div className="title flex-shrink-0">
          <p className="small-liner">OUR STUDENT PARTNERS</p>
          <h1 className={"big-text " + PixelifySans.className + " w-[70%] sm:w-full h-auto break-words"}>
            Empowering Tomorrow&apos;s Experts Today
          </h1>
        </div>
        <div className="partner-content flex flex-col items-center">
          <div className="flex flex-col justify-center items-center self-stretch">
            <div 
              className="partner-feature flex flex-col md:flex-row gap-8 overflow-hidden mt-8 mx-auto min-w-[60vw] pixel-corners--wrapper p-2"
              style={{
                background: `rgb(${qmind_color[0]}, ${qmind_color[1]}, ${qmind_color[2]})`,
              }}
            >
              <div className={"main-partner-text"}>
                <h1 className={"main-partner-title " + (isDark ? "invert " : " ") + (windowWidth >= 964 ? "text-right self-end" : "text-center")}>QMIND</h1>
                <p className={"main-partner-details text-[22px] " 
                  + (windowWidth >= 964 ? "text-right self-end " : "text-center ")
                  + ( (windowWidth >= 948 || windowWidth <= 761) ? " text-[22px]" : " text-[15px]")}>
                  {"Queen's University"}
                </p>
                <p className="main-partner-links mx-auto">
                  <a className={"inner-text gap-2 " + (isDark ? "invert" : "")} href="https://qmind.ca/">
                    <u>Website</u>
                    <Image
                      src={"/Link.png"}
                      width={24}
                      height={25}
                      alt="Link Symbol"
                      className="link-symbol"
                    />
                  </a>
                  <a
                    className={`inner-text gap-2 ${isDark ? "invert" : ""}`}
                    href="https://www.instagram.com/qmind.ai/"
                  >
                    <u>Insta</u>
                    <Image
                      src={"/insta.png"}
                      width={24}
                      height={25}
                      alt="Insta Symbol"
                      className="link-symbol"
                    />
                  </a>
                </p>
              </div>
              <Image
                src={"/logos/qmind-logo.png"}
                width={488}
                height={155}
                alt="QMIND Logo"
                className={"main-feature-logo" + (windowWidth >= 768 ? " py-[2px] pl-[2px] pr-4" : " p-[32px] mx-auto")}
              />
            </div>
          </div>
          {/* TODO: Fix typing problem */}
          <div className="flex justify-center">
            <div className="partner-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 ml-[40px]">
              {chunked_partners.map((row, row_index) => (
                <div className="partner-rows py-4" key={row_index}>
                  {row.map((partner) => (
                    <div key={partner.name}>
                      <div className="pixel-corners--wrapper flex flex-col justify-center items-center self-stretch">
                        <div
                          className={`"pixel-corners partner-body flex flex-col h-[347px] min-w-[30vw] gap-4 mx-auto ${windowWidth > 693 ? "-ml-[50px]" : ""}`}
                          key={partner.name}
                          style={{
                            background: `linear-gradient(to bottom, ${gradients[row_index].from}, ${gradients[row_index].to})`,
                          }}
                        >
                          <img
                            src={partner.logo}
                            className="w-[182px] h-[100px] mt-8 object-contain mx-auto" 
                          ></img>
                          <p className="font-bold !text-[23pt] text-center">{partner.name}</p>
                          <p className="text-[16pt] font-normal text-center">
                            {partner.university}
                          </p>

                          <p className="partner-inner-text text-center">
                            <a className="partner-links gap-2" href={partner.website}>
                              <u className="partner-link-text">Website</u>
                              <Image
                                src={"/Link.png"}
                                width={24}
                                height={54}
                                alt="Link Symbol"
                                className={`link-symbol ${isDark ? "invert" : ""}`}
                              />
                            </a>
                            <a
                              className="partner-links ml-[32px] gap-2"
                              href={partner.insta}
                            >
                              <u className="partner-link-text">Insta</u>
                              <Image
                                src={"/insta.png"}
                                width={24}
                                height={25}
                                alt="Insta Symbol"
                                className={`link-symbol ${isDark ? "invert" : ""}`}
                              />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <a href="mailto:chair@cucai.ca" className="partner-button--wrapper">
        <img
          src="become_a_partner.png"
          alt="Become A Partner"
          className="mt-8 ml-[40px] h-[61px] w-[220px] hover:brightness-90"
        />
      </a>
    </div>
  );
}
