"use client";

import Header from "./Header";
import FirstSection from "./FirstSection";
import { useState } from "react";
import Image from "next/image";
import { SecondSection } from "./SecondSection";

let speakers = [
  { name: "Ben Rossen", position: "AI Policy & Regulation", img: "/headshots/ben-rossen.png",company: "/logos/open-ai-logo.png", width: 220.43},
  { name: "Eddie Kim", position: "Manager of Technical Staff", img: "/headshots/eddie-kim.png",company: "/logos/cohere-logo.png", width: 255.36},
  { name: "Ezequiel Lanza", position: "AI Open Source Evangelist", img: "/headshots/ezequiel-lanza.png",company: "/logos/intel-logo.png", width: 140.81},
  { name: "Dr. Ruslan Salakhutdinov", position: "Ex-Director of AI Research", img: "/headshots/ruslan.png",company: "/logos/apple-logo.png", width: 44.66},
];

export default function Home() {
  const [isDark, setDark] = useState<boolean>(true);

  return (
    <div>
      <Header isDark={isDark} setDark={setDark} />
      <FirstSection/>
      <div id="about">
        <SecondSection />
      </div>
      <div id="speakers">
        <div className="third-section">
          {/* 
            AI Experts on Stage
          */}
          <div className="title">
            <p className="small-font">OUR 2025 SPEAKERS</p>
            <h1 className="big-font">AI EXPERTS ON STAGE</h1>
          </div>
          <div className="speaker-list">
          {speakers.map((speaker) => (
            <div className="speaker-elem" key={speaker.name}>
                <Image
                  src={speaker.img}
                  alt={speaker.name}
                  width={250}
                  height={250}
                  className="speaker-img"
                />
                <p className="speaker-name">{speaker.name}</p>
                <p className="speaker-text">{speaker.position}</p>
                <Image
                  src={speaker.company}
                  alt={speaker.company}
                  width={speaker.width}
                  height={55}
                  className="speaker-logo"
                />
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* <div className="tbd-section">
        <div id="schedule">
          <h1>EVENT AGENDA:</h1>
          <p>TBD</p>
        </div>
        <div id="sponsors">
          <h1>OUR SPONSORS</h1>
          <p>TBD</p>
        </div>
      </div> */}
      
      <div className="fourth-section">
        {/* 
          Our Student Partners
        */}

      </div>
      <div className="fifth-section">
        {/* 
          Transform Tomorrow Together
        */}
      </div>
      <div className="sixth-section">
        {/* 
          Leaders Behind the Vision
        */}
      </div>
    </div>
  );
}
