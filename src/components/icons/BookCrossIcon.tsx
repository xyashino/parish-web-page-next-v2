import { SVGProps } from "react";

export default function BookCrossIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5.81 2H7v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v16c0 1.05-.95 2-2 2H6c-1.05 0-2-.95-2-2V4c0-1 .83-1.91 1.81-2M13 10v3h-3v2h3v5h2v-5h3v-2h-3v-3h-2Z"
      ></path>
    </svg>
  );
}
