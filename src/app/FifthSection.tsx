"use client";
import Image from "next/image";

export function FifthSection() {
  return (
    <div className="fifth-section flex-col md:flex-row gap-8">
      <div className="text-part p-4 flex-shrink-0">
        <div className="title flex-shrink-0">
          <p className="small-text">JOIN US</p>
          <h1 className="big-text">Transform Tomorrow Together</h1>
          <div className="text-part">
            <p>Have questions or want to get involved?</p>
            <p>Get in touch with us and join the CUCAI Community!</p>
            <a href="/" className="contact-button">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <img
        src="/image 32.png"
        width="586px"
        height="390px"
        alt={"CUCAI Team Picture"}
        className="join-us-pic py-8"
      />
    </div>
  );
}
