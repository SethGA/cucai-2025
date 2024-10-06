"use client";
import Image from "next/image";
import { speakers } from "./page";

export default function ThirdSection() {
  return (
    <div>
      <div>
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
  );
}
