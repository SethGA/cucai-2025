"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { NextFont } from "next/dist/compiled/@next/font";
import { MenuIcon } from "lucide-react";
import { act, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MainMenu({
  isDark,
  items,
  font,
}: {
  isDark: boolean;
  items: {
    name: string;
    link: string;
  }[];
  font: NextFont;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeURL, setActiveUrl] = useState("");

  // const isDesktop = useMediaQuery("(min-width: 906px)");
  const fontSize = 50;

  // const pathname = usePathname();

  // useEffect(() => {
  //     console.log(window.location.href);
  //     console.log(activeURL);

  //     const element = activeURL != "/" && document.querySelector(activeURL);
  //     if (!isOpen) {
  //         // setActiveUrl(window.location.href);
  //         if(element){
  //             element.scrollIntoView({block : "start"});
  //         }
  //     }
  // }, [activeURL, isOpen]);

  // get a neater solution when we have time - for now, just take the user there
  // page is rerendering when we exit (can be seen by difference in dimensions when we exit)
  // before: 518.4 X 16845.5
  // after: 518.2 X 16845.4
  const jumpPaths = (id: string) => {
    setIsOpen(false); // to close the drawer (and act like this is normal)
    window.location.hash = id;
    window.location.reload();
  };

  return (
    <Drawer
      direction="right"
      onOpenChange={() => {
        setIsOpen(!isOpen);
      }}
      open={isOpen}
      preventScrollRestoration
    >
      <DrawerTrigger>
        <MenuIcon size={50} color="white" className={!isDark ? "invert" : ""} />
      </DrawerTrigger>
      <DrawerContent
        style={
          isDark
            ? {
                background: "linear-gradient(180deg, #171456 0%, #6A6CB3)",
              }
            : {
                background:
                  "linear-gradient(rgba(115, 100, 255, 1), rgba(162,216,235, 1))",
              }
        }
        className="menu-list"
      >
        {items.map((b) => (
          <a
            href={b.link}
            className={
              "table-cell p-[10px] " +
              `text-[${fontSize}px] ` +
              (isDark ? "invert " : "") +
              font.className
            }
            key={b.name}
            onClick={() => jumpPaths(b.link)}
          >
            {b.name}
          </a>
        ))}
        <a
          href="mailto:chair@cucai.ca"
          className={
            "table-cell p-[10px] " +
            `text-[${fontSize}px] ` +
            (isDark ? "invert " : "") +
            font.className
          }
          key="Contact Us"
        >
          Contact Us
        </a>
      </DrawerContent>
    </Drawer>
  );
}
