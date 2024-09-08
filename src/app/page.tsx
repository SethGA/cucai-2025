"use client";

import Header from "./Header";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
const [isDark, setDark] = useState<boolean>(true);

  return (
    <div>
      <Header isDark={isDark} setDark={setDark} />
      <div className='first-section'>
        <div className="toronto-skyline">
          <div className="white-box">
            <h1 className="title">{"Experience AI\'s Future at CUCAI 2025!"}</h1>
            <p className="subtext">Empowering the Next Generation of AI Innovators</p>
            <a href="/" className="register-button">Register Now</a>
          </div>
        </div>
      </div>
      <div className="second-section">
        {/* 
          Where Tomorrow's AI Innovators Meet
          Video 
          Apply Now
        */}
        <div className="web-video">
          {/* <p>lalala Test Test Test</p> */}
        </div>
      </div>
      <div className="third-section">
        {/* 
          AI Experts on Stage
        */}
      </div>
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