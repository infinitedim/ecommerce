import { FC } from "react";
import { IconProps } from "@/interfaces";

export const EyeShown: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_141_841)">
        <path
          d="M1.67554 12C1.67554 12 5.67554 4 12.6755 4C19.6755 4 23.6755 12 23.6755 12C23.6755 12 19.6755 20 12.6755 20C5.67554 20 1.67554 12 1.67554 12Z"
          stroke="#0A0C0F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.6755 15C14.3324 15 15.6755 13.6569 15.6755 12C15.6755 10.3431 14.3324 9 12.6755 9C11.0187 9 9.67554 10.3431 9.67554 12C9.67554 13.6569 11.0187 15 12.6755 15Z"
          stroke="#0A0C0F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_141_841">
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
