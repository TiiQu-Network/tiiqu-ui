import type { FC, SVGProps } from "react";
import { cn } from "@/lib/utils";

type CarouselArrowLeftIconProps = SVGProps<SVGSVGElement> & {
	title?: string;
	className?: string;
};

export const CarouselArrowLeftIcon: FC<CarouselArrowLeftIconProps> = ({
	title = "Carousel arrow left icon",
	className,
	...props
}) => {
	return (
		<svg
			viewBox="0 0 22 38"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-labelledby="carouselArrowLeftTitle"
			className={cn("w-6 h-6", className)}
			{...props}
		>
			<title id="carouselArrowLeftTitle">{title}</title>
			<path
				d="M13.0138 5.77637C17.2157 2.91403 20.916 0.917118 20.916 0.917118"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.916 37.083C20.916 37.083 1.08268 26.3777 1.08268 18.9997C1.08268 16.8607 2.74868 14.4427 5.11735 12.0867"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
