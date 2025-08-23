import { useState, useCallback } from "react";

type IndexUpdater = number | ((prev: number) => number);

export function useCarousel(totalSlides: number, transitionDuration = 500) {
	const [currentIndex, setCurrentIndex] = useState(1);
	const [isTransitioning, setIsTransitioning] = useState(true);

	const goToSlide = useCallback((index: IndexUpdater) => {
		setCurrentIndex(index);
		setIsTransitioning(true);
	}, []);

	const handlePrev = useCallback(() => {
		goToSlide((prev) => prev - 1);
	}, [goToSlide]);

	const handleNext = useCallback(() => {
		goToSlide((prev) => prev + 1);
	}, [goToSlide]);

	const handleTransitionEnd = useCallback(() => {
		if (currentIndex === 0) {
			// Jump to last real slide without animation
			setIsTransitioning(false);
			setCurrentIndex(totalSlides);
		} else if (currentIndex === totalSlides + 1) {
			// Jump to first real slide without animation
			setIsTransitioning(false);
			setCurrentIndex(1);
		} else {
			// Ensure transition is on
			if (!isTransitioning) {
				setIsTransitioning(true);
			}
		}
	}, [currentIndex, totalSlides, isTransitioning]);

	return {
		currentIndex,
		isTransitioning,
		goToSlide,
		handlePrev,
		handleNext,
		handleTransitionEnd,
		transitionDuration,
	};
}
