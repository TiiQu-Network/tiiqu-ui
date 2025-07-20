import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | "primary"
    | "secondary"
    | "primaryLight"
    | "secondaryLight"
    | "primaryOutline"
    | "secondaryOutline"
    | "primaryBorderless"
    | "secondaryBorderless";
};

export const Button = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
};

const buttonVariants = cva(
  "capitalize transition-all ease-in-out duration-300 cursor-pointer font-medium w-full px-4 h-11.75 rounded-sm text-center",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:brightness-75 focus:outline-none",
        secondary:
          "bg-secondary text-white hover:brightness-75 focus:outline-none",
        primaryLight:
          "bg-primaryLight text-white hover:brightness-75 focus:outline-none",
        secondaryLight:
          "bg-secondaryLight text-secondary hover:brightness-75 focus:outline-none",
        primaryOutline:
          "border border-primary text-primary hover:brightness-75 focus:outline-none",
        secondaryOutline:
          "border border-primaryGray text-secondaryLight hover:brightness-75 focus:outline-none",
        primaryBorderless:
          "text-primary hover:brightness-75 focus:outline-none",
        secondaryBorderless:
          "text-secondaryGray hover:brightness-75 focus:outline-none",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
