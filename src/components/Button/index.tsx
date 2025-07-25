import { cva, type VariantProps } from "class-variance-authority";

import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	`capitalize transition-all ease-in-out duration-300  font-medium outline-transparent cursor-pointer w-full px-4 min-h-[2.5em] min-w-[13.8125em] rounded-lg text-center`,
	{
		variants: {
			variant: {
				primary: `bg-[#18E1C9] text-white hover:brightness-75`,
				secondary: `bg-[#4B7D94] text-white hover:brightness-75`,
				primaryLight: `bg-[#18e1c966] text-white hover:brightness-75`,
				secondaryLight: `text-[#034459] bg-[#0344594D]  hover:brightness-75`,
				primaryOutline: `border border-[#18E1C9] text-[#18E1C9] hover:brightness-75`,
				secondaryOutline: `text-[#4B7D94] border border-[#e0e0e0]  hover:brightness-75 py-[3rem]`,
				primaryBorderless: `text-[#18E1C9] hover:brightness-75`,
				secondaryBorderless: `text-[#4B7D94] hover:brightness-75`,
			},
		},
		defaultVariants: {
			variant: `primary`,
		},
	},
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>;

export const Button = ({ className, variant, ...props }: ButtonProps) => {
	return (
		<button className={cn(buttonVariants({ variant }), className)} {...props} />
	);
};
