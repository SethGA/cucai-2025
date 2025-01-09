"use client";
import Image from "next/image";
import { Pixelify_Sans } from "next/font/google";

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

export function ContactUs({ windowWidth }: { windowWidth: number }) {
  return (
    // 1401 sm:flex-col md:flex-col lg:flex-row
    <div className={` flex ${windowWidth > 931 ? "flex-row" : "flex-col"} `}>
      <div className="text-part  flex-shrink-0">
        <div className="title flex-shrink-0">
          <p className="small-text">JOIN US</p>
          <h1
            className={
              "big-text " +
              PixelifySans.className +
              " sm:w-[800px] h-auto break-words"
            }
          >
            Transform Tomorrow Together
          </h1>
          <div className={"text-part" + " sm:w-full h-auto break-words"}>
            <p>Have questions or want to get involved?</p>
            <p>Get in touch with us and join the CUCAI Community!</p>
            <a href="mailto:chair@cucai.ca">
              <img
                src="contact-us-button.png"
                alt="Contact Us Button"
                className="contact-button mt-8 hover:brightness-110 active:brightness-90"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="pixel-corners--wrapper">
        <img
          src="/image 32.png"
          alt={"CUCAI Team Picture"}
          className="pixel-corners h-[350px] object-cover bg-gradient-to-t from-[#547192]/0 to-[#002b5c]/50"
        ></img>
      </div>
    </div>
  );
}
