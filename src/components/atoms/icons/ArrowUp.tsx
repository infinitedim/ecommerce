import { FC } from "react";
import { IconProps } from "@/interfaces";

export const ArrowUp: FC<IconProps> = ({ ...props }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.6755 19V5"
        stroke="#0A0C0F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.67554 12L12.6755 5L19.6755 12"
        stroke="#0A0C0F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
