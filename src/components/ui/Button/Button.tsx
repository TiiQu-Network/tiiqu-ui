import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";

const buttonVariants = cva(
  "capitalize transition-all ease-in-out duration-300 cursor-pointer font-medium w-full px-4 h-[2.9375rem] rounded-sm text-center",
  {
    variants: {
      variant: {
        primary:
          "bg-[#7dffef] text-white hover:brightness-75 focus:outline-none",
        secondary:
          "bg-[#4b7d94] text-white hover:brightness-75 focus:outline-none",
        primaryLight:
          "bg-[#18e1c966] text-white hover:brightness-75 focus:outline-none",
        secondaryLight:
          "bg-[#0344594d] text-[#4b7d94] hover:brightness-75 focus:outline-none",
        primaryOutline:
          "border border-[#7dffef] text-[#7dffef] hover:brightness-75 focus:outline-none",
        secondaryOutline:
          "border border-[#e0e0e0] text-[#0344594d] hover:brightness-75 focus:outline-none",
        primaryBorderless:
          "text-[#7dffef] hover:brightness-75 focus:outline-none",
        secondaryBorderless:
          "text-[#03445966] hover:brightness-75 focus:outline-none",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

// Combine props from cva variants and button element
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
