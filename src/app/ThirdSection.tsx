"use client";
import Image from "next/image";
import { speakers } from "./page";
import { IBM_Plex_Sans } from "next/font/google";

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const SpeakerCarousel = ({speakers}) => {
  return (
    <div className="carousel-inner flex flex-row items-center h-fit overflow-scroll no-scrollbar divide-x-[1px] divide-[#55E0FF]/50">
      {speakers.map((speaker, i) => (
        <div
          className="flex flex-col justify-center items-center content-center py-8 px-16 gap-4 min-w-[320px]"
          key={i}
        >
          <img 
            src={speaker.img} 
            alt={"Headshot of " + speaker.name} 
            class="h-[250px] rounded-full border-[#002b5c]/50 border-[1px] object-cover bg-gradient-to-t from-[#547192]/0 to-[#002b5c]/50">
          </img>
          <p class={"text-center font-bold !text-[23pt]"}>{speaker.name}</p>
          {/* <p class={"text-center font-bold " + (speaker.name.length > 15 ? "!text-[23pt]" : "text-[28pt]")}>{speaker.name}</p> */}
          <p class="text-center text-[16pt] font-normal">{speaker.position}</p>
          <img src={speaker.company} class="w-[200px] h-[55px] object-contain"></img>
        </div>
      ))}
    </div>
  );
}

export default function ThirdSection() {
  return (
    <div className="third-section">
      <div>
        {/*
          AI Experts on Stage
        */}

        <div className="title">
          <p className="small-font">OUR 2025 SPEAKERS</p>
          <h1 className="big-font">AI Experts On Stage</h1>
        </div>

        <main 
          className={`${IBMPlexSans.className} h-[524px] w-[99dvw] overflow-x-hidden overflow-y-scroll flex flex-col items-center z-10 no-scrollbar font-light text-black pb-32`}
        >
          <div
            className="flex flex-row divide-x-[1px] divide-y-[1px] sm:divide-y-[0px divide-[#55E0FF]/50"
          >
            <SpeakerCarousel speakers={speakers}/>
            <SpeakerCarousel speakers={speakers}/>
            <SpeakerCarousel speakers={speakers}/>
          </div>
        </main>
      </div>
    </div>
  );
}
