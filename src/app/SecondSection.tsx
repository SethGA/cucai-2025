"use client";
export function SecondSection() {
  return (
    <div className="second-section">
      <div className="web-video">
        <iframe
          className="rounded-2xl w-full h-full object-cover"
          src="https://www.youtube.com/embed/D9mYUk5Tji4?controls=0?quality=auto"
          allow="accelerometer; autoplay;"
        />
      </div>
      <div className="flex flex-col gap-4 lg:min-w-[475px]">
        <div className="main-text">
          <p>ABOUT CUCAI</p>
          <h1 className="big-font">{"Where Tomorrow's AI Innovators Meet"}</h1>
          <p className="small-font">
            Join the Canadian Undergraduate Conference in AI (CUCAI) to connect
            with students, researchers, and industry leaders exploring
            cutting-edge AI.
          </p>
          <p className="small-font">
            Discover, innovate, and shape the future of AI with us!
          </p>
          <a href="/" className="register-button">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
