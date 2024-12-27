"use client";
import Image from "next/image";

import { leaders } from "@/data/leaders";
import { useState, useEffect } from "react";
import { IBM_Plex_Sans } from "next/font/google";

// TODO: Replace with CUCAI 2025 Staff
const Team = [
  {
    name: "Seth Greif Albert",
    headshot: "/headshots/seth-grief-albert.png",
    title: "Co-President",
    linkedin: "https://www.linkedin.com/in/sethgriefalbert/",
  },
  {
    name: "Lejla Sain",
    headshot: "/headshots/lejla-sain.png",
    title: "Co-President",
    linkedin: "https://www.linkedin.com/in/lejla-s/",
  },
  {
    name: "Mercy Doan",
    headshot: "/headshots/Mercy.png",
    title: "Director of Student Partnerships",
    linkedin: "https://www.linkedin.com/in/merd/",
  },
  {
    name: "Leonardo Montes Quiliche",
    headshot: "/headshots/Leo.png",
    title: "Director of Sponsorship",
    linkedin: "https://www.linkedin.com/in/leo-mont/",
  },
  {
    name: "Sara Laker",
    headshot: "/headshots/Sara-Laker.png",
    title: "Director of Logistics",
    linkedin: "https://www.linkedin.com/in/sara-laker/",
  },
  {
    name: "Aiya Farhan",
    headshot: "/headshots/Kevin-Wang.png",
    title: "Director of Marketing",
    linkedin: "https://www.linkedin.com/in/aiya-farhan-94243b233/",
  },
  {
    name: "Zana Yan",
    headshot: "/headshots/zana-yan.png",
    title: "Senior Designer",
    linkedin: "https://www.linkedin.com/in/zana-zhizi-yan/",
  },
  {
    name: "Skyye Lambert",
    headshot: "/headshots/skyye-lambert.png",
    title: "Senior Designer",
    linkedin: "https://www.linkedin.com/in/skyye-lambert/",
  },
  {
    name: "Kevin Wang",
    headshot: "/headshots/Kevin-Wang.png",
    title: "Web Developer",
    linkedin: "https://www.linkedin.com/in/kevin-wang-9b1650226/",
  },
  {
    name: "Ryan Su",
    headshot: "/headshots/Ryan-Su.png",
    title: "Web Developer",
    linkedin: "https://www.linkedin.com/in/ryan-z-su/",
  },

];

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

function CUCAITeam(){
  return (<div className="carousel-inner flex flex-row items-center h-fit overflow-scroll no-scrollbar divide-x-[1px] divide-[#55E0FF]/50">
    {Team.map((person, i) => (
      <div
        className="flex flex-col justify-center items-center py-8 px-16 gap-4 min-w-[320px]"
        key={i}
      >
        <img
          src={person.headshot}
          alt={`Headshot of ${person.name}`}
          className="h-[150px] rounded-full border-[#55E0FF]/50 border-[1px] object-cover bg-gradient-to-t from-[#55E0FF]/50 to-[#55E0FF]/0"
        />
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
  </div>);
}

function CUCAIList(){
  return Team.map((person, i) => (
    <div
      className="flex flex-col justify-center items-center py-8 px-16 gap-4 min-w-[320px]"
      key={i}
    >
      <img
        src={person.headshot}
        alt={`Headshot of ${person.name}`}
        className="h-[150px] rounded-full border-[#55E0FF]/50 border-[1px] object-cover bg-gradient-to-t from-[#55E0FF]/50 to-[#55E0FF]/0"
      />
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

export function SixthSection() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
  
    window.addEventListener('resize', handleResize);
  
    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <div>
      <div className="sixth-section">
        {/*
            Leaders Behind the Vision
          */}
        <div className="team-title">
          <p className="small-text">MEET OUR TEAM</p>
          <h1 className="big-text">Leaders Behind the Vision</h1>
        </div>
        {/* Main has some trailing bottom space - delete this */}
        <div>
          {isLargeScreen ? (
            <main 
              className="custom-main"
            >
              <div
                id="Team"
                className="flex flex-row divide-x-[1px] divide-y-[1px] sm:divide-y-[0px divide-[#55E0FF]/50"
              >
                <CUCAITeam />
                <CUCAITeam />
                <CUCAITeam />
              </div>
            </main>
          ) : (
            <main className="custom-main3">
                <CUCAIList />
            </main>
          )}
        </div>

      </div>
    
    
    </div>
  );
}
