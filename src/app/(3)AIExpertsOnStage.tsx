"use client";
import Image from "next/image";
import { IBM_Plex_Sans } from "next/font/google";
import { useState, useEffect } from "react";
import { Pixelify_Sans } from "next/font/google";
import { speakers } from "@/data/speakers";

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface Speaker {
  name: string;
  position: string;
  img: string;
  company: string;
}

function SpeakerCarousel({ speakers }:{ speakers:Speaker[] }) {
  return (
    <div className={`carousel-inner flex flex-row items-center h-[65vh] overflow-scroll no-scrollbar divide-x-[1px] divide-[#55E0FF]/50  ${PixelifySans.className}`}>
      {speakers.map((speaker, i) => (
        <div
          className="flex flex-col justify-center items-center content-center py-8 px-16 gap-4 min-w-[5vw] hover:scale-100 transition-all"
          key={i}
        >
          <div className="pixel-corners--wrapper">
            <img
              src={speaker.img}
              alt={"Headshot of " + speaker.name}
              className="pixel-corners h-[250px] object-cover bg-gradient-to-t from-[#547192]/0 to-[#002b5c]/50"
            ></img>
          </div>
          <p className="speaker-name">{speaker.name}</p>
          {/* <p class={"text-center font-bold " + (speaker.name.length > 15 ? "!text-[23pt]" : "text-[28pt]")}>{speaker.name}</p> */}
          <p className="speaker-position">{speaker.position}</p>
          <img
            src={speaker.company}
            className="w-[200px] h-[55px] object-contain"
          ></img>
        </div>
      ))}
    </div>
  );
}

function SpeakerList({ speakers }:{ speakers:Speaker[] }) {
  return speakers.map((speaker, i) => (
    <div
      className={`flex flex-col justify-center items-center content-center py-8 px-16 gap-4 min-w-[80vw] ${PixelifySans.className}`}
      key={i}
    >
      <div className="pixel-corners--wrapper">
        <img
          src={speaker.img}
          alt={"Headshot of " + speaker.name}
          className="pixel-corners h-[250px] object-cover bg-gradient-to-t from-[#547192]/0 to-[#002b5c]/50"
        ></img>
      </div>
      <p className="speaker-name">{speaker.name}</p>
      {/* <p class={"text-center font-bold " + (speaker.name.length > 15 ? "!text-[23pt]" : "text-[28pt]")}>{speaker.name}</p> */}
      <p className="speaker-position">{speaker.position}</p>
      <img
        src={speaker.company}
        className="w-[200px] h-[55px] object-contain"
      ></img>
    </div>
  ));
}

export function PastSpeakers({isLargeScreen, isDark}:{isLargeScreen:boolean, isDark:boolean}) {
  const headColor = isDark ? "text-[#a2d8d7]" : "text-[#4705d2]" ;

  return (
    <div className="third-section">
      <div>
        {/*
          AI Experts on Stage
        */}

        <div className={"title px-[80px] py-[40px] sm:py-[80px] " + PixelifySans.className}>
          <p className={`${isDark ? "text-[#a2d8d7]" : "text-[#4705d2]"} text-xl sm:text-3xl font-[600]`}>OUR 2025 SPEAKERS</p>
          <h1 className={`${isDark ? "text-white" : "text-[#171456]"} text-4xl sm:text-5xl font-[700] w-[70%] sm:w-full h-auto`}>
            AI Experts On Stage
          </h1>
        </div>

        <div>
          {isLargeScreen ? (
            <main className="custom-main2">
              <div className="flex flex-row divide-x-[1px] divide-y-[1px] sm:divide-y-[0px divide-[#55E0FF]/50">
                <SpeakerCarousel speakers={speakers} />
                <SpeakerCarousel speakers={speakers} />
                <SpeakerCarousel speakers={speakers} />
              </div>
            </main>
          ) : (
            <main className="custom-main3">
              <SpeakerList speakers={speakers}></SpeakerList>
            </main>
          )}
        </div>
      </div>
    </div>
  );
}
