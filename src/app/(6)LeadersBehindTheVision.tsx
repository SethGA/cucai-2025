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
        className="h-[150px] rounded-full border-[#55E0FF]/50 border-[1px] object-cover bg-gradient-to-t from-[#55E0FF]/50 to-[#55E0FF]/0"
      />
    );
  }else{
    return (
      <img 
        src="/headshots/default.svg"
        alt={`Headshot of ${person.name}`}
        className="h-[150px] rounded-full border-[#55E0FF]/50 border-[1px] object-cover bg-gradient-to-t from-[#55E0FF]/50 to-[#55E0FF]/0"
      />); 
  }
}

function CUCAITeam() {
  return (
    <div className="carousel-inner flex flex-row items-center h-fit overflow-scroll no-scrollbar divide-x-[1px] divide-[#55E0FF]/50">
      {leaders.map((person, i) => (
        <div
          className="flex flex-col justify-center items-center py-8 px-16 gap-4 min-w-[320px]"
          key={i}
        >
          <StaffImage person={person}/>
          <div className="text-center">
            <p
              className={`${
                person.name.length > 13 ? `!text-[13pt]` : "text-2xl"
              } font-normal`}
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

function CUCAIList() {
  return leaders.map((person, i) => (
    <div
      className="flex flex-col justify-center items-center py-8 px-16 gap-4 min-w-[320px]"
      key={i}
    >
      <StaffImage person={person}/>
      <div className="text-center">
        <p
          className={`${
            person.name.length > 13 ? `!text-[13pt]` : "text-2xl"
          } font-normal`}
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

export function CUCAITeamShowcase({isLargeScreen}:{isLargeScreen:boolean}) {

  return (
    <div>
    <div className="sixth-section">
      {/*
          Leaders Behind the Vision
      */}

      <div className="team-title">
        <p className="small-text">MEET OUR TEAM</p>
        <h1 className={"big-text " + PixelifySans.className + " w-[70%] sm:w-full h-auto break-words"}>
          Leaders Behind the Vision
        </h1>
      </div>
      {/* Main has some trailing bottom space - delete this */}
      <div>
        {isLargeScreen ? (
          <main className="custom-main">
            <div
              id="Team"
              className="flex flex-row divide-x-[1px] divide-y-[1px] sm:divide-y-[0px divide-[#55E0FF]/50"
            >
              <CUCAITeam />
              <CUCAITeam />
              <CUCAITeam />
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
    </div>
  </main>
  
  </div>
  );
}
