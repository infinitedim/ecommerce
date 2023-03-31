import { FC } from "react";
import { IconProps } from "@/interfaces";

/**
 * @param {IconProps}
 * @returns
 */
export const Twitter: FC<IconProps> = ({
  height = "24px",
  width = "31px",
  stroke,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 31 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={stroke}
      {...props}
    >
      <path
        d="M30.0528 2.85821C28.935 3.34406 27.7511 3.66492 26.539 3.81052C27.8167 3.05227 28.7733 1.86192 29.2315 0.459905C28.023 1.15291 26.7076 1.64514 25.3378 1.91697C24.4167 0.943864 23.1965 0.298533 21.8665 0.0811025C20.5366 -0.136328 19.1712 0.0862973 17.9823 0.714439C16.7934 1.34258 15.8474 2.34112 15.2911 3.55514C14.7347 4.76915 14.5992 6.13077 14.9054 7.42873C9.81616 7.19342 5.3046 4.77574 2.28725 1.12338C1.73798 2.04698 1.45071 3.0999 1.45568 4.17132C1.45493 5.16733 1.70295 6.14812 2.17772 7.02658C2.65248 7.90504 3.3393 8.65399 4.17718 9.20693C3.2062 9.17791 2.25637 8.91939 1.40715 8.45302V8.52592C1.40685 9.92395 1.89546 11.2791 2.79016 12.3616C3.68486 13.4442 4.93062 14.1876 6.31629 14.4658C5.7914 14.6045 5.25059 14.6755 4.70729 14.6772C4.31437 14.6772 3.93919 14.6393 3.56493 14.571C3.95928 15.7741 4.72316 16.8256 5.75026 17.5793C6.77735 18.333 8.01656 18.7514 9.29538 18.7761C7.12865 20.4539 4.4551 21.364 1.70301 21.3608C1.21555 21.3628 0.728421 21.3356 0.244263 21.2796C3.05171 23.0583 6.31664 24.0025 9.65096 24C20.9131 24 27.0672 14.7768 27.0672 6.78925C27.0672 6.53456 27.0672 6.27526 27.0476 6.01503C28.2515 5.16197 29.289 4.10022 30.1098 2.88128L30.0528 2.85821Z"
        fill="#0A0C0F"
      />
    </svg>
  );
};