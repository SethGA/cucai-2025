"use client";
import Image from "next/image";
import { leaders } from "@/data/leaders";
import { useState, useEffect } from "react";
import { IBM_Plex_Sans } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";
import '@/app/globals.css';

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

// TODO: Edit @data/leaders.ts to include current CUCAI staff

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

interface Staff {
  name: string;
  headshot: string;
  title: string;
  linkedin: string;
}

function StaffImage({person}:{person:Staff}) {
  const [headShotExists, setHeadShotExists] = useState(true);
  
  fetch(person.headshot, { method: 'HEAD' })
  .then((response) => {
    if(!response.ok){
      setHeadShotExists(false);
    }
  })
  .catch(() => {
    setHeadShotExists(false);
  });

  if(headShotExists){
    return (
      <img 
        src={person.headshot}
        alt={`Headshot of ${person.name}`}
        className="pixel-corners3 h-[150px] object-cover bg-gradient-to-t from-[#55E0FF]/50 to-[#55E0FF]/0"
      />
    );
  }else{
    return (
      <img 
        src="/headshots/default-headshot.png"
        alt={`Headshot of ${person.name}`}
        className="pixel-corners3 h-[150px] object-cover bg-gradient-to-t from-[#55E0FF]/50 to-[#55E0FF]/0"
      />); 
  }
}

function CUCAITeam({color}:{color:string}) {
  return (
    <div className="carousel-inner flex flex-row items-center h-[40vh] overflow-scroll no-scrollbar divide-x-[1px] divide-[#55E0FF]/50">
      {leaders.map((person, i) => (
        <div
          className="flex flex-col justify-center items-center py-8 px-16 gap-4 min-w-[5vw] hover:scale-110 transition-all"
          key={i}
        >
          <div className="pixel-corners3--wrapper">
            <StaffImage person={person}/>
          </div>
          <div className={`text-center ${color} ${PixelifySans.className}`}>
            <p
              className={`${
                person.name.length > 13 ? `!text-[13pt]` : "text-2xl"
              } `}
            >
              {person.name}
            </p>
            <p className="text-sm">{person.title}</p>
          </div>
          <a
            target="_blank"
            className="flex w-full items-center justify-center hover:bg-white/10 rounded-md p-2"
            href={person.linkedin}
          >
            <img src="/linkedin.png" className="h-5" />
          </a>
        </div>
      ))}
    </div>
  );
}

function CUCAIList({color}:{color:string}) {
  return leaders.map((person, i) => (
    <div
      className="flex flex-col justify-center items-center py-8 px-16 gap-4 min-w-[80vw]"
      key={i}
    >
      
      <div className="pixel-corners3--wrapper">
        <StaffImage person={person}/>
      </div>
      <div className={`text-center ${color} ${PixelifySans.className}`}>
        <p
          className={`${
            person.name.length > 13 ? `!text-[13pt]` : "text-2xl"
          } `}
        >
          {person.name}
        </p>
        <p className="text-sm">{person.title}</p>
      </div>
      <a
        target="_blank"
        className="flex w-full items-center justify-center hover:bg-white/10 rounded-md p-2"
        href={person.linkedin}
      >
        <img src="/linkedin.png" className="h-5" />
      </a>
    </div>
  ));
}

export function CUCAITeamShowcase({isLargeScreen, isDark}:{isLargeScreen:boolean, isDark:boolean}) {
  const textColor = isDark ? "text-white" : "text-black";
  const headColor = isDark ? "text-[#a2d8d7]" : "text-[#4705d2]" ;

  return (
    <div className="sixth-section w-full">
      {/*
          Leaders Behind the Vision
      */}

      <div className={`team-title px-[80px] pt-[80px] ${textColor}`}>
        <p className={"small-text " + PixelifySans.className + " font-[600] text-[24px] " + headColor}>MEET OUR TEAM</p>
        <h1 className={"text-4xl font-[700] sm:text-[52px] " + PixelifySans.className + " w-[70%] sm:w-full h-auto"}>
          Leaders Behind the Vision
        </h1>
      </div>
      {/* Main has some trailing bottom space - delete this */}
      <div>
        {isLargeScreen ? (
          <main className="custom-main">
            <div
              id="Team"
              className="flex flex-row my-8 divide-x-[1px] divide-y-[1px] sm:divide-y-[0px divide-[#55E0FF]/50"
            >
              <CUCAITeam color={textColor}/>
              <CUCAITeam color={textColor}/>
              <CUCAITeam color={textColor}/>
            </div>
          </main>
        ) : (
          <main className="custom-main3">
            <CUCAIList color={textColor}/>
          </main>
        )}
      </div>
    </div>
  );
}