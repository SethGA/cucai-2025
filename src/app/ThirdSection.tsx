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
            <div className={"speaker-elem"} key={speaker.name}>
              {/* <Image
                src={speaker.img}
                alt={speaker.name}
                width={250}
                height={250}
                className="speaker-img"
              /> */}
              <img src={speaker.img} alt={"Headshot of " + speaker.name} class="h-[250px] rounded-full border-[#002b5c]/50 border-[1px] object-cover bg-gradient-to-t from-[#547192]/0 to-[#002b5c]/50"></img>
              <p className={"speaker-name" + (speaker.name.length > 15 ? "-long" : "")}>{speaker.name}</p>
              <p className="speaker-text">{speaker.position}</p>
              <div className="speaker-img">
                <img src={speaker.company} class="w-[200px] h-[55px] object-contain"></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
