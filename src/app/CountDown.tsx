"use client"

import { Pixelify_Sans } from "next/font/google";

const PixelifySans = Pixelify_Sans({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

export function Countdown(){
    return(
        <div>
            <h1 className={PixelifySans.className}>Add a countdown here</h1>
        </div>
    )
}