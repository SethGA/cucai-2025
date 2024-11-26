"use client";
import Image from "next/image";
import { Pixelify_Sans } from 'next/font/google';

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
})

export function FifthSection() {
  return (
    <div className="fifth-section flex-col md:flex-row gap-8">
      <div className="text-part p-4 flex-shrink-0">
        <div className="title flex-shrink-0">
          <p className="small-text">JOIN US</p>
          <h1 className={"big-text " + PixelifySans.className}>Transform Tomorrow Together</h1>
          <div className="text-part">
            <p>Have questions or want to get involved?</p>
            <p>Get in touch with us and join the CUCAI Community!</p>
            <a href="/">
            <img 
              src="contact-us-button.png"
              alt="Contact Us Button"
              className="contact-button mt-8"
            />
            </a>
          </div>
        </div>
      </div>

      <img
        src="/image 32.png"
        alt={"CUCAI Team Picture"}
        className="join-us-pic py-8"
      />
    </div>
  );
}
