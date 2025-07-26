import { cn } from "@/lib/utils";
import type { FC } from "react";

type PlusProps = {
	className?: string;
	title?: string;
};

export const Plus: FC<PlusProps> = ({ className, title = "Plus icon" }) => {
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("size-3", className)}
			role="img"
			aria-label={title}
		>
			<path
				d="M11.8327 6.83366H6.83268V11.8337H5.16602V6.83366H0.166016V5.16699H5.16602V0.166992H6.83268V5.16699H11.8327V6.83366Z"
				fill="#4B7D94"
			/>
		</svg>
	);
};
