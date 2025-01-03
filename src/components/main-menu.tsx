"use client"

import { useMediaQuery } from "./hooks/use-media-query"
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { NextFont } from "next/dist/compiled/@next/font";
import { MenuIcon } from "lucide-react";

export default function MainMenu({
    isDark,
    items,
    font
}:{
    isDark:boolean,
    items:{
        name:string,
        link:string
    }[],
    font:NextFont;
}){
    // const isDesktop = useMediaQuery("(min-width: 906px)");
    const fontSize = 50;

    return <div className="absolute right-0 pr-4">
        <Drawer direction="right">
            <DrawerTrigger>
                <MenuIcon size={75} color="white" className={!isDark ? "invert" : ""}/>
            </DrawerTrigger>
            <DrawerContent 
                // style={{
                //     background: "linear-gradient(rgba(115, 100, 255, 1), rgba(162,216,235, 1))"
                // }}
                style = {isDark ? {
                    background: "linear-gradient(180deg, #171456 0%, #6A6CB3)"
                } : {
                    background: "linear-gradient(rgba(115, 100, 255, 1), rgba(162,216,235, 1))"
                }}
                className="menu-list"
                >
                {items.map((b) => (
                    <a href={b.link} className={"table-cell p-[10px] " + `text-[${fontSize}px] ` + (isDark ? "invert " : "") + font.className} key={b.name}>
                        {b.name}
                    </a>
                ))}
                <a href="mailto:chair@cucai.ca" className={"table-cell p-[10px] " + `text-[${fontSize}px] ` + (isDark ? "invert " : "") + font.className} key="Contact Us">
                    Contact Us
                </a>
            </DrawerContent>
        </Drawer>
    </div>
}