import React from "react";

export const VideoSection = () => {
  return (
    <section className="relative w-full lg:w-5/6 mx-auto">
      <video
        playsInline
        autoPlay
        muted
        loop
        className="shadow-2xl aspect-video relative  mx-auto w-full"
      >
        <source src="/videos/dron3.mp4" type="video/mp4" />
        Twoja przeglądarka nie obsługuje tagu video.
      </video>
      <div className="absolute inset-0 bg-black/40 grid place-items-center select-none">
        <h2 className="text-2xl md:text-4xl lg:text-5xl text-background text-center font-extralight w-10/12 italic">
          Parafia Rzymskokatolicka św. Maksymiliama M. Kolbego w Gruszowie
          Wielkim
        </h2>
      </div>
    </section>
  );
};
