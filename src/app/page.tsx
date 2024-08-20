"use client";

import Header from "./Header";
import { useState } from "react";

export default function Home() {
const [isDark, setDark] = useState<boolean>(true);

  return (
    <div>
      <Header isDark={isDark} setDark={setDark} />
      <div className='first-section'>
        <h1 className="big-text">Join the Future of AI at CUCAI 2025</h1>
      </div>
    </div>
  );
}