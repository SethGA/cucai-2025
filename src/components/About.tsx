"use client";
import { Pixelify_Sans } from "next/font/google";
import { sponsors } from "@/data/sponsors";

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

const SponsorCarousel = ({isDark}:{isDark:boolean}) => {
  return (
  <div className="carousel-inner-landing">
    {sponsors.map((company, i) => (
      <a
        className={`h-full w-[100vw] sm:w-[40vw] px-16 mt-16 mb-8 flex items-center border-2 border-solid border-white`}
        href={company.website}
        key={i}
      >
        <img
          alt={company.name}
          src={company.logo} 
          // style={{
          //   width: `auto`,
          //   height: `fill`
          // }}
          className="max-h-[10vh] min-w-[100px] max-w-[80vw] w-auto sm:max-w-full mx-auto"
        />
      </a>
    ))}
  </div>)
}

// justify-center requires flex-row
export function About({ isDark }: { isDark: boolean }) {
  
  const headColor = isDark ? "text-[#a2d8d7]" : "text-[#4705d2]" ;
  const textColor = isDark ? "text-white" : "text-black";

  return (
    <div
      id="about"
      className="second-section"
    >
      {/* Carousel of sponsors */}
      <div className="flex flex-row divide-x-[1px] divide-[#55E0FF]/50">
        <SponsorCarousel isDark={isDark}/>
        <SponsorCarousel isDark={isDark}/>
        <SponsorCarousel isDark={isDark}/>
      </div>
      
      <div className="flex flex-col md:flex-row px-5 lg:px-[10vw] py-14 md:px-[80px] md:py-[100px] w-full h-full gap-10">
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
              CUCAI is a not-for-profit conference that unites over 320 of Canada&apos;s brightest AI minds.
              Run entirely by passionate undergraduate volunteers, we provide a platform for students to learn, collaborate, and connect with industry leaders.
            </p>
            <p className={`font-[400] mt-[30px] text-[22px] ${textColor}`}>
              Since 2018, CUCAI has been at the forefront of fostering AI talent, offering students the opportunity to showcase their projects and research.
              Our flagship event, the AI Project Showcase, brings together top student teams from across Canada to present their work to recruiters, sponsors, speakers, and peers.
            </p>
            <p className={`font-[400] mt-[30px] text-[22px] ${textColor}`}>
              Join us for CUCAI 2025, happening in <strong>Toronto, Ontario, on March 8-9</strong>.
            </p>
          </div>
          <p className={`font-[400] mt-[30px] text-[22px] `}>
            <a href="https://tally.so/r/mZ1MAz">
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
    </div>
  );
}
