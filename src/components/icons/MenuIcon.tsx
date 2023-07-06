import { SVGProps } from "react";

export default function MenuIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3 18v-2h13v2H3Zm16.6-1l-5-5l5-5L21 8.4L17.4 12l3.6 3.6l-1.4 1.4ZM3 13v-2h10v2H3Zm0-5V6h13v2H3Z"
      ></path>
    </svg>
  );
}
