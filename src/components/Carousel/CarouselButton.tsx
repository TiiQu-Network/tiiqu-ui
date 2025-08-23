import type { ReactNode, FC, MouseEventHandler } from "react";
import { cn } from "@/lib/utils";
import { CarouselArrowLeftIcon } from "@/svg/CarouselArrowLeftIcon";
import { CarouselArrowRightIcon } from "@/svg/CarouselArrowRightIcon";

export type CarouselButtonProps = {
	prevButton?: ReactNode;
	nextButton?: ReactNode;
	prevButtonClassName?: string;
	nextButtonClassName?: string;
	onPrev?: MouseEventHandler<HTMLButtonElement>;
	onNext?: MouseEventHandler<HTMLButtonElement>;
};

const CarouselButton: FC<CarouselButtonProps> = ({
	prevButton,
	nextButton,
	prevButtonClassName,
	nextButtonClassName,
	onPrev,
	onNext,
}) => {
	return (
		<div
			className={cn(
				"absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2 pointer-events-auto",
			)}
		>
			<button
				type="button"
				aria-label="Previous slide"
				onClick={onPrev}
				className={cn("pointer-events-auto", prevButtonClassName)}
			>
				{prevButton ?? <CarouselArrowLeftIcon />}
			</button>

			<button
				type="button"
				aria-label="Next slide"
				onClick={onNext}
				className={cn("pointer-events-auto", nextButtonClassName)}
			>
				{nextButton ?? <CarouselArrowRightIcon />}
			</button>
		</div>
	);
};

export default CarouselButton;
