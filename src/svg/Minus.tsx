import { cn } from "@/lib/utils";
import type { FC } from "react";

type MinusProps = {
	className?: string;
	title?: string;
};

export const Minus: FC<MinusProps> = ({ className, title = "Minus icon" }) => {
	return (
		<svg
			width="16"
			height="2"
			viewBox="0 0 16 2"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("size-4", className)}
			role="img"
			aria-label={title}
		>
			<title>{title}</title>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M15.4185 1.83065V0.168945H0.581055L0.581055 1.83065H15.4185Z"
				fill="#034459"
			/>
		</svg>
	);
};
