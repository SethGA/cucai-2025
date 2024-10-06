"use client";
import Image from "next/image";
import { leaders } from "./page";
import { IBM_Plex_Sans } from "next/font/google";

// TODO: Replace with CUCAI 2025 Staff
const Team = [
  {
    name: "Marcelo Chaman Mallqui",
    headshot: "/headshots/marcelo-chamanmallqui.png",
    title: "President",
    linkedin: "https://www.linkedin.com/in/marc-cham/",
  },
  {
    name: "Olivia Xu",
    headshot: "/headshots/olivia-xu.png",
    title: "Advisor",
    linkedin: "https://www.linkedin.com/in/olivia-chen-xu/",
  },
  {
    name: "Rabab Azeem",
    headshot: "/headshots/rabab-azeem.png",
    title: "Advisor",
    linkedin: "https://www.linkedin.com/in/rabab-azeem/",
  },
  {
    name: "Lejla Sain",
    headshot: "/headshots/lejla-sain.png",
    title: "Director of Partnerships",
    linkedin: "https://www.linkedin.com/in/lejla-s/",
  },
  {
    name: "Daniel Wang",
    headshot: "/headshots/daniel-wang.png",
    title: "Director of Partnerships",
    linkedin: "https://www.linkedin.com/in/itsdanielwang/",
  },
  {
    name: "Rhea George",
    headshot: "/headshots/rhea-george.png",
    title: "Director of Marketing",
    linkedin: "https://www.linkedin.com/in/rhea-george-b81bab1b1/",
  },
  {
    name: "Seth Grief Albert",
    headshot: "/headshots/seth-grief-albert.png",
    title: "Director of Strat. Parternships",
    linkedin: "https://www.linkedin.com/in/sethgriefalbert/",
  },
  {
    name: "Rowan McDonald",
    headshot: "/headshots/rowan-mcdonald.png",
    title: "Director of Finance",
    linkedin: "https://www.linkedin.com/in/rowan-m/",
  },
  {
    name: "Zana Yan",
    headshot: "/headshots/zana-yan.png",
    title: "Product Designer",
    linkedin: "https://www.linkedin.com/in/zana-zhizi-yan/",
  },
  {
    name: "Skyye Lambert",
    headshot: "/headshots/skyye-lambert.png",
    title: "Product Designer",
    linkedin: "https://www.linkedin.com/in/skyye-lambert/",
  },
  {
    name: "Jasmine Zangeneh",
    headshot: "/headshots/jasmine-zangeneh.png",
    title: "Content Designer",
    linkedin: "https://www.linkedin.com/in/jasmine-zangeneh-aa5147277/",
  },
  {
    name: "Andy Huang",
    headshot: "/headshots/andy-huang.png",
    title: "Content Designer",
    linkedin: "https://www.linkedin.com/in/andy-snowflake-huang/",
  },
  {
    name: "John Warren",
    headshot: "/headshots/john-warren.png",
    title: "Community Lead",
    linkedin: "https://www.linkedin.com/in/warrenjk/",
  },
];

const IBMPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export function SixthSection() {
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
      </div>
    {/* Main has some trailing bottom space - delete this */}
    <main 
      className={`${IBMPlexSans.className} h-[350px] w-[99dvw] overflow-x-hidden overflow-y-scroll flex flex-col items-center z-10 no-scrollbar font-light text-white pb-32`}
      style={{ backgroundColor: 'rgba(77, 136, 255, 1)' }}
    >
      <div
        id="Team"
        className="flex flex-row divide-x-[1px] divide-y-[1px] sm:divide-y-[0px divide-[#55E0FF]/50"
      >
        <div className="carousel-inner flex flex-row items-center h-fit overflow-scroll no-scrollbar divide-x-[1px] divide-[#55E0FF]/50">
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
        </div>
        <div className="carousel-inner flex flex-row items-center h-fit overflow-scroll no-scrollbar divide-x-[1px] divide-[#55E0FF]/50">
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
        </div>
        <div className="carousel-inner flex flex-row items-center h-fit overflow-scroll no-scrollbar divide-x-[1px] divide-[#55E0FF]/50">
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
        </div>
      </div>
    </main>
    
    </div>
  );
}
