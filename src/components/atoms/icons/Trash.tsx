import { FC } from "react";
import { IconProps } from "@/interfaces";

export const Trash: FC<IconProps> = ({ ...props }) => {
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
        d="M19.6755 7L18.8085 19.142C18.7726 19.6466 18.5468 20.1188 18.1767 20.4636C17.8065 20.8083 17.3194 21 16.8135 21H8.53754C8.03168 21 7.5446 20.8083 7.17442 20.4636C6.80424 20.1188 6.57845 19.6466 6.54254 19.142L5.67554 7M10.6755 11V17M14.6755 11V17M15.6755 7V4C15.6755 3.73478 15.5702 3.48043 15.3826 3.29289C15.1951 3.10536 14.9408 3 14.6755 3H10.6755C10.4103 3 10.156 3.10536 9.96843 3.29289C9.78089 3.48043 9.67554 3.73478 9.67554 4V7M4.67554 7H20.6755"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
