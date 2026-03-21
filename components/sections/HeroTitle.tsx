import React from "react";
import FaceIcon from "../icons/FaceIcon";
import EChartsIcon from "../icons/EchartsIcon";
import FireIcon from "../icons/FireIcon";
import PhoneIcon from "../icons/PhoneIcon";

type HeroColor = "red" | "yellow" | "blue" | "gray";

interface HeroTitleProps {
  color: HeroColor;
}

export default function HeroTitle({ color }: HeroTitleProps) {
  const content = {
    red: {
      title: (
        <>
          <h1 className="text-2xl md:text-3xl">
            THE <span className="font-bold">AI</span> THAT{" "}
          </h1>
          <h1 className="text-4xl lg:text-6xl">
            <span className="font-bold">CATCHES</span> CHEATER
          </h1>
        </>
      ),
      icon: <EChartsIcon className="w-25 md:w-50 h-25 md:h-45 rotate-10" />,
    },
    yellow: {
      title: (
        <>
          <h1 className="text-2xl md:text-3xl">
            FOLLOWING <span className="font-bold">AI</span>
          </h1>
          <h1 className="text-4xl lg:text-6xl font-extrabold">
            SOCIAL PROFILE &{" "}
            <span className="block">FOLLOWERS DETECTOR</span>
          </h1>
        </>
      ),
      icon: <FireIcon className="w-20 md:w-35 h-25 md:h-45 rotate-10" />,
    },
    blue: {
      title: (
        <>
          <h1 className="text-2xl md:text-3xl">
            <span className="font-bold">AI</span> FACE SEARCH
          </h1>
          <h1 className="text-4xl lg:text-6xl font-extrabold">
            REVERSE IMAGE &{" "}
            <span className="block">FACE RECOGNITION TOOL</span>
          </h1>
        </>
      ),
      icon: <FaceIcon className="w-20 md:w-40 h-25 md:h-45 rotate-10" />,
    },
    gray: {
      title: (
        <>
          <h1 className="text-2xl md:text-3xl font-bold">REVERSE</h1>
          <h1 className="text-4xl lg:text-6xl">PHONE LOOKUP</h1>
        </>
      ),
      icon: <PhoneIcon className="w-20 md:w-40 h-25 md:h-45 rotate-10" />,
    },
  }[color];

  return (
    <div className="relative text-white flex flex-col items-start justify-start mt-5 w-full">
      {content.title}
      <p className="tracking-widest text-sm mt-1 font-light">
        Dating App Search ● Social Profile Analysis ● FaceTrace: Photo Search ●
        Reverse Phone/Name/Address Search
      </p>
      <div aria-hidden="true" className="absolute -top-3 md:-top-6 right-0 opacity-20 blur-[2px]">
        {content.icon}
      </div>
    </div>
  );
}