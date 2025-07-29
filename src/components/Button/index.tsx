import { cva, type VariantProps } from "class-variance-authority";

import React, {
	useRef,
	type ButtonHTMLAttributes,
	type MouseEvent,
} from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
	[
		"transition-all",
		"duration-300",
		"ease-in-out",
		"font-medium",
		"outline-none",
		"cursor-pointer",
		"rounded-[0.5em]",
		"text-center",
		"min-h-[3.1875em]",
		"min-w-[13.8125em]",
		"px-4",
		"hover:brightness-75",
	],
	{
		variants: {
			intent: {
				primary: "bg-tiiqu-primary text-tiiqu-white border border-transparent",
				secondary:
					"bg-tiiqu-secondary text-tiiqu-white border border-transparent",
				light_primary:
					"bg-tiiqu-primary-light text-tiiqu-white border border-transparent",
				light_secondary:
					"bg-tiiqu-secondary-light text-tiiqu-secondary border border-transparent",
				outline_primary:
					"bg-transparent text-tiiqu-primary border border-tiiqu-primary",
				outline_secondary:
					"bg-transparent text-tiiqu-secondary border border-tiiqu-secondary",
				outline_gray:
					"bg-transparent text-tiiqu-secondary border border-tiiqu-gray",

				borderless_primary: "bg-transparent text-tiiqu-primary border-none",
				borderless_secondary: "bg-transparent text-tiiqu-secondary border-none",
			},
			size: {
				sm: "text-sm px-3",
				md: "text-base px-4",
				lg: "text-lg px-6",
			},
			fullWidth: {
				true: "w-full",
				false: "w-fit",
			},
			disabled: {
				true: "opacity-50 cursor-not-allowed pointer-events-none",
				false: "",
			},
		},
		compoundVariants: [
			{
				intent: "primary",
				disabled: false,
				className: "hover:brightness-90",
			},
			{
				intent: "secondary",
				disabled: false,
				className: "hover:brightness-85",
			},
			{
				intent: "light_primary",
				disabled: false,
				className: "hover:brightness-75",
			},
			{
				intent: "light_secondary",
				disabled: false,
				className: "hover:brightness-75",
			},
			{
				intent: "outline_primary",
				disabled: false,
				className: "hover:brightness-75",
			},
			{
				intent: "outline_secondary",
				disabled: false,
				className: "hover:brightness-75",
			},
			{
				intent: "outline_gray",
				disabled: false,
				className: "hover:brightness-75",
			},
			{
				intent: "borderless_primary",
				disabled: false,
				className: "hover:brightness-75",
			},
			{
				intent: "borderless_secondary",
				disabled: false,
				className: "hover:brightness-75",
			},
		],
		defaultVariants: {
			intent: "primary",
			size: "md",
			fullWidth: true,
			disabled: false,
		},
	},
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof buttonVariants>;

export const Button = ({
	className,
	intent,
	size,
	fullWidth,
	disabled,
	...props
}: ButtonProps) => {
	const buttonRef = useRef<HTMLButtonElement>(null);

	const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
		const button = buttonRef.current;
		if (!button) return;

		const ripple = document.createElement("span");
		ripple.className = "ripple";

		const rect = button.getBoundingClientRect();
		const size = Math.max(rect.width, rect.height);
		const x = event.clientX - rect.left - size / 2;
		const y = event.clientY - rect.top - size / 2;

		ripple.style.width = ripple.style.height = `${size}px`;
		ripple.style.left = `${x}px`;
		ripple.style.top = `${y}px`;

		// Get the text color and convert to transparent ripple color
		const computedStyle = window.getComputedStyle(button);
		const textColor = computedStyle.color;
		const rgba = textColor.replace("rgb", "rgba").replace(")", ", 0.2)");
		ripple.style.backgroundColor = rgba;

		button.appendChild(ripple);

		setTimeout(() => {
			ripple.remove();
		}, 1000);
	};

	return (
		<button
			ref={buttonRef}
			disabled={disabled}
			onClick={(e) => {
				if (!disabled) createRipple(e);
				props.onClick?.(e);
			}}
			className={cn(
				"ripple-container",
				buttonVariants({ intent, size, fullWidth, disabled }),
				className,
			)}
			{...props}
		/>
	);
};
