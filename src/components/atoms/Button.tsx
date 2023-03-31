import { FC, forwardRef, memo } from "react";
import { Loader2 as Loader } from "lucide-react";
import { ButtonProps } from "@/interfaces";
import { buttonVariants } from "@/libs";
import { cn } from "@/utils";

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, isLoading, variant, ...props }, ref) => {
    return (
      <button
        type="button"
        className={cn(buttonVariants({ className, variant }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default memo(Button);
