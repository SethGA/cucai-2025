"use client";

export default function FirstSection() {
  return (
    <div className="first-section">
      <div className="toronto-skyline">
        <div className="white-box flex flex-wrap items-start p-4 gap-4 auto-rows-auto">
          <h1 className="title">{"Experience AI's Future at CUCAI 2025!"}</h1>
          <p className="subtext">
            Empowering the Next Generation of AI Innovators
          </p>
          <a href="/" className="register-button">
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
}

/*
Fixes:
 landing page Toronto backdrop 
- 1. fix so that it covers entire screen (left and right edges aren't covered)
- 2. remove thin blue line between Toronto backdrop and starting fade of section 2 (about cucai)

- 1. Fixed using background-size: cover
- 2. png has the thin line, adjust the png and we'll be ok
*/
