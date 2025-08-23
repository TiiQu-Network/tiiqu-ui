"use client";

import { cn } from "@/lib/utils";
import { isValidElement, type FC, type ReactNode } from "react";
import CarouselButton from "./CarouselButton";
import { useSlideKeyGenerator } from "./hooks/useSlideKeyGenerator";
import { getClonedSlides } from "./utils/getClonedSlides";
import { useCarousel } from "./hooks/useCarousel";

export type CarouselProps = {
	children: ReactNode[];
	className?: string;
	prevButton?: ReactNode;
	nextButton?: ReactNode;
	prevButtonClassName?: string;
	nextButtonClassName?: string;
	transitionDuration?: number; // ms
};

export const Carousel: FC<CarouselProps> = ({
	children,
	className,
	prevButton,
	nextButton,
	prevButtonClassName,
	nextButtonClassName,
	transitionDuration = 500,
}) => {
	const total = children.length;
	const getKey = useSlideKeyGenerator();
	const slides = getClonedSlides(children, getKey);

	const {
		currentIndex,
		isTransitioning,
		handlePrev,
		handleNext,
		handleTransitionEnd,
	} = useCarousel(total, transitionDuration);

	return (
		<section className="relative">
			<div className={cn("w-full px-6 mx-auto overflow-hidden", className)}>
				<div
					className={cn(
						"flex",
						isTransitioning && "transition-transform ease-in-out",
					)}
					style={{
						transform: `translateX(-${currentIndex * 100}%)`,
						transitionDuration: isTransitioning
							? `${transitionDuration}ms`
							: "0ms",
					}}
					onTransitionEnd={handleTransitionEnd}
				>
					{slides.map((child) => (
						<div
							key={isValidElement(child) ? child.key : undefined}
							className="w-full flex-shrink-0"
						>
							{child}
						</div>
					))}
				</div>
			</div>
			<CarouselButton
				prevButton={prevButton}
				nextButton={nextButton}
				prevButtonClassName={prevButtonClassName}
				nextButtonClassName={nextButtonClassName}
				onPrev={handlePrev}
				onNext={handleNext}
			/>
		</section>
	);
};
