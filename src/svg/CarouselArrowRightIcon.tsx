import type { FC, SVGProps } from "react";
import { cn } from "@/lib/utils";

type CarouselArrowRightIconProps = SVGProps<SVGSVGElement> & {
	title?: string;
	className?: string;
};

export const CarouselArrowRightIcon: FC<CarouselArrowRightIconProps> = ({
	title = "Carousel arrow right icon",
	className,
	...props
}) => {
	return (
		<svg
			viewBox="0 0 22 38"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-labelledby="carouselArrowRightTitle"
			className={cn("w-6 h-6", className)}
			{...props}
		>
			<title id="carouselArrowRightTitle">{title}</title>
			<path
				d="M8.98615 32.2236C4.78432 35.086 1.08398 37.0829 1.08398 37.0829"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M1.08398 0.916992C1.08398 0.916992 20.9173 11.6223 20.9173 19.0003C20.9173 21.1393 19.2513 23.5573 16.8827 25.9133"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
