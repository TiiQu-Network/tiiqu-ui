import {
	cloneElement,
	isValidElement,
	type ReactElement,
	type ReactNode,
} from "react";

export function getClonedSlides(
	children: ReactNode[],
	getKey: (child: ReactNode, index: number, suffix?: string) => string,
) {
	const total = children.length;
	return [
		isValidElement(children[total - 1])
			? cloneElement(children[total - 1] as ReactElement, {
					key: getKey(children[total - 1], total - 1, "-clone-last"),
				})
			: children[total - 1],
		...children.map((child, i) =>
			isValidElement(child)
				? cloneElement(child as ReactElement, {
						key: getKey(child, i),
					})
				: child,
		),
		isValidElement(children[0])
			? cloneElement(children[0] as ReactElement, {
					key: getKey(children[0], 0, "-clone-first"),
				})
			: children[0],
	];
}
