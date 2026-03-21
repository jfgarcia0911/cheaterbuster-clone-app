import React from "react";

export default function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      transform="rotate(45)"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style>
            {`
              .cls-1 { fill: #898c90; }
              .cls-2 { fill: #a9adb1; }
              .cls-3 { fill: #4c5665; }
              .cls-4 { fill: #83c0ec; }
              .cls-5 { fill: #3398d6; }
            `}
          </style>
        </defs>
        <g id="Search">
          <rect
            className="cls-1"
            height="4"
            transform="translate(47 60) rotate(180)"
            width="1"
            x="23"
            y="28"
          />
          <rect
            className="cls-2"
            height="4"
            transform="translate(50 60) rotate(180)"
            width="2"
            x="24"
            y="28"
          />
          <path
            className="cls-3"
            d="M24.5,32h0A2.5,2.5,0,0,1,27,34.5V47a1,1,0,0,1-1,1H23a1,1,0,0,1-1-1V34.5A2.5,2.5,0,0,1,24.5,32Z"
            transform="translate(49 80) rotate(180)"
          />
          <circle className="cls-1" cx="25" cy="15" r="15" />
          <circle className="cls-4" cx="25" cy="15" r="13" />
          <path
            className="cls-5"
            d="M15.5,16.5a1,1,0,0,1-1-1A10.512,10.512,0,0,1,25,5a1,1,0,0,1,0,2,8.51,8.51,0,0,0-8.5,8.5A1,1,0,0,1,15.5,16.5Z"
          />
        </g>
      </g>
    </svg>
  );
}