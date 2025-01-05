"use client";
import { useState, useEffect } from "react";
import "./globals.css";
import { Pixelify_Sans } from "next/font/google";

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

export function AboutCucai({isLargeScreen}:{isLargeScreen:boolean}) {
  return (
    <div className="second-section flex flex-col xl:flex-row">
      <div className="w-[401px] h-[701px] bg-[#171456] rounded-3xl p-2 aspect-[9/16]">
        <iframe
          className="rounded-2xl w-full h-full min-w-full min-h-full"
          src="https://www.youtube.com/embed/D9mYUk5Tji4?controls=0?quality=auto"
          allow="accelerometer; autoplay;"
        />
      </div>
      <div
        className={
          "flex flex-col gap-4 min-w-[475px] gap-4" +
          (isLargeScreen ? " ml-[15%]" : "")
        }
      >
        <div className="main-text">
          <p>ABOUT CUCAI</p>
          <h1 className={"big-font " + PixelifySans.className + " w-[70%] sm:w-full h-auto break-words"}>
            {"Where Tomorrow's AI Innovators Meet"}
          </h1>
          <p className={"small-font"  + " w-[70%] sm:w-full h-auto break-words"}>
            Join the Canadian Undergraduate Conference in AI (CUCAI) to connect
            with students, researchers, and industry leaders exploring
            cutting-edge AI.
          </p>
          <p className={"small-font" + " w-[70%] sm:w-full h-auto break-words"}>
            Discover, innovate, and shape the future of AI with us!
          </p>
          <a href="mailto:chair@cucai.ca">
            <img
              src="apply.png"
              alt="Apply to CUCAI"
              className="mt-8 h-[50px] w-[122px] hover:brightness-110 active:brightness-90"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
