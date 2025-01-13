"use client";
import Image from "next/image";
import { buttons } from "@/data/buttons";
import { icons } from "@/data/icons";
import { Pixelify_Sans } from "next/font/google";

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

export function Footer() {
  return (
    <div className={`footer ${PixelifySans.className}`}>
      <div className="contact-us hover:scale-110 transition-all">
        {/* <Image src="/image.png" alt="CUCAI logo" width={142.8} height={68} /> */}
        <a href="mailto:chair@cucai.ca">Contact Us</a>
      </div>
      <div className="menu-list">
        {buttons.map((b) => (
          <a href={b.link} className="footer-option hover:scale-110 transition-all" key={b.name}>
            {b.name}
          </a>
        ))}
        {icons.map((i) => (
          <a href={i.link} className="footer-logo hover:scale-110 transition-all" key={i.src}>
            <Image src={i.src} alt={i.link} width={250} height={250} />
          </a>
        ))}
      </div>
    </div>
  );
}
