"use client";

import { useState, useEffect } from "react";

export function Countdown({ className, isDark }: { className?: string; isDark: boolean }) {
    const CUCAIDate = new Date('March 8, 2025 00:00:00').getTime();
    const [diff, setDiff] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calcTimeLeft = () => {
            const now = new Date().getTime();
            let time_remaining = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };

            const difference = CUCAIDate - now;
            if (difference > 0) {
                time_remaining = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return time_remaining;
        };

        const timer = setInterval(() => {
            setDiff(calcTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={`text-[4vw] font-[700] sm:text-base md:text-2xl lg:text-2xl ${className} ${isDark ? "text-white" : "text-black"}`}>
            {(CUCAIDate - new Date().getTime() > 0)
                ? `${diff.days} Days, ${diff.hours} Hours, ${diff.minutes} Minutes, and ${diff.seconds} Seconds`
                : "COUNTDOWN HAS ENDED"}
        </div>
    );
}
