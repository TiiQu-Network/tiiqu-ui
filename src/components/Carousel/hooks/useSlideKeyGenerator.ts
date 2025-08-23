import { useId, type ReactNode, isValidElement } from "react";

export function useSlideKeyGenerator() {
	const idPrefix = useId();

	return (child: ReactNode, index: number, suffix = ""): string => {
		if (isValidElement(child)) {
			const key = child.key;
			if (key !== null && key !== undefined) return `${key}${suffix}`;
		}
		return `${idPrefix}-slide-${index}${suffix}`;
	};
}
