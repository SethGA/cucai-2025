"use client";
import Image from "next/image";

export function FifthSection() {
  return (
    <div className="fifth-section">
      <div className="text-part">
        <div className="title">
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
      <Image
        src={"/image 32.png"}
        width={1000}
        height={1000}
        alt={"CUCAI Team Picture"}
        className="join-us-pic"
      />
    </div>
  );
}
