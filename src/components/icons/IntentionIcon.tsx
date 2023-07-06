import { SVGProps } from "react";

export default function IntentionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <mask id="ipSAnnouncement0">
        <g fill="none" strokeLinejoin="round" strokeWidth="4">
          <rect
            width="40"
            height="26"
            x="4"
            y="15"
            fill="#fff"
            stroke="#fff"
            rx="2"
          ></rect>
          <path
            fill="#fff"
            stroke="#fff"
            strokeLinecap="round"
            d="m24 7l-8 8h16l-8-8Z"
          ></path>
          <path
            stroke="#000"
            strokeLinecap="round"
            d="M12 24h18m-18 8h8"
          ></path>
        </g>
      </mask>
      <path
        fill="currentColor"
        d="M0 0h48v48H0z"
        mask="url(#ipSAnnouncement0)"
      ></path>
    </svg>
  );
}
