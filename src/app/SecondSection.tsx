"use client";
import { useState, useEffect } from "react";

export function SecondSection() {
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
    <div className="second-section flex flex-col xl:flex-row">

      <div className="w-[401px] h-[701px] bg-[#171456] rounded-3xl p-2 aspect-[9/16]">
        <iframe
          className="rounded-2xl w-full h-full min-w-full min-h-full"
          src="https://www.youtube.com/embed/D9mYUk5Tji4?controls=0?quality=auto"
          allow="accelerometer; autoplay;"
        />
      </div>
      <div className={"flex flex-col gap-4 min-w-[475px] gap-4" + (isLargeScreen ? " ml-[15%]" : "")}>
        <div className="main-text">
          <p>ABOUT CUCAI</p>
          <h1 className="big-font">{"Where Tomorrow's AI Innovators Meet"}</h1>
          <p className="small-font">
            Join the Canadian Undergraduate Conference in AI (CUCAI) to connect
            with students, researchers, and industry leaders exploring
            cutting-edge AI.
          </p>
          <p className="small-font">
            Discover, innovate, and shape the future of AI with us!
          </p>
          <a href="/" className="register-button">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
