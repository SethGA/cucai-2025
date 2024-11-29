"use client";
import Image from "next/image";
import { buttons } from "@/data/buttons";
import { icons } from "@/data/icons";

export function Footer() {
  return (
    <div className="footer">
      <div className="contact-us">
        {/* <Image src="/image.png" alt="CUCAI logo" width={142.8} height={68} /> */}
        Contact Us
      </div>
      <div className="menu-list">
        {buttons.map((b) => (
          <a href={b.link} className="footer-option" key={b.name}>
            {b.name}
          </a>
        ))}
        {icons.map((i) => (
          <a href={i.link} className="footer-logo" key={i.link}>
            <Image src={i.src} alt={i.link} width={250} height={250} />
          </a>
        ))}
      </div>
    </div>
  );
}
