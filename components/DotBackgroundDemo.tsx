import React from "react";

export function DotBackgroundDemo() {
  return (
    <div
      className="h-[50rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center gap-9"
      style={{
        maskImage: "radial-gradient(ellipse_at_center, transparent 20%, black)",
      }}
    >
      {/* Spotify last release */}
      <h1 className="text-5xl font-semibold capitalize">Latest Release</h1>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/album/18LI3GAcAV4gqIbrteGXKc?utm_source=generator"
        
        height="152"
        className="sm:w-[90%] md:w-[40%]"
        
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      
    </div>
  );
}
