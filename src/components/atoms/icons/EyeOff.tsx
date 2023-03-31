import { IconProps } from "@/interfaces";
import { FC } from "react";

export const EyeOff: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_141_842)">
        <path
          d="M14.7955 14.12C14.5209 14.4147 14.1897 14.6511 13.8217 14.8151C13.4537 14.9791 13.0564 15.0673 12.6536 15.0744C12.2508 15.0815 11.8507 15.0074 11.4771 14.8565C11.1036 14.7056 10.7643 14.481 10.4794 14.1961C10.1945 13.9113 9.96993 13.5719 9.81905 13.1984C9.66816 12.8248 9.59406 12.4247 9.60117 12.0219C9.60828 11.6191 9.69645 11.2218 9.86041 10.8538C10.0244 10.4858 10.2608 10.1546 10.5555 9.87999M18.6155 17.94C16.9061 19.243 14.8246 19.9649 12.6755 20C5.67554 20 1.67554 12 1.67554 12C2.91943 9.68189 4.64467 7.6566 6.73554 6.05999L18.6155 17.94ZM10.5755 4.23999C11.2639 4.07887 11.9686 3.99833 12.6755 3.99999C19.6755 3.99999 23.6755 12 23.6755 12C23.0685 13.1356 22.3446 14.2047 21.5155 15.19L10.5755 4.23999Z"
          stroke="#0A0C0F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.67554 1L23.6755 23"
          stroke="#0A0C0F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_141_842">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.675537)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
