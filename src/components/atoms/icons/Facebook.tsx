import { IconProps } from "@/interfaces";
import { FC } from "react";

export const Facebook: FC<IconProps> = ({ ...props }) => {
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
        d="M24.2443 12.0743C24.2443 5.40402 18.8417 0 12.1832 0C5.52022 0 0.122131 5.40402 0.122131 12.0743C0.122131 18.0994 4.53121 23.0952 10.2987 24V15.5653H7.2359V12.0751H10.2987V9.41345C10.2987 6.38808 12.0965 4.71729 14.8525 4.71729C16.1724 4.71729 17.5541 4.95274 17.5541 4.95274V7.92378H16.0307C14.5351 7.92378 14.0677 8.85577 14.0677 9.8104V12.0743H17.4124L16.875 15.5646H14.0677V23.9992C19.8307 23.0944 24.2443 18.0987 24.2443 12.0736V12.0743Z"
        fill="#0A0C0F"
      />
    </svg>
  );
};
