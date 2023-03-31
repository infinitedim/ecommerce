import { cva } from "class-variance-authority";

export const buttonVariants = cva("", {
  variants: {
    variant: {
      default: "",
      solid: "",
      outline: "",
    },
  },
  defaultVariants: { variant: "default" },
});
