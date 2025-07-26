import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AccordionItem } from "./AccordionItem";

export type AccordionProps<T extends Record<string, unknown>> = {
	data: T[];
	renderTitle: (item: T, index: number) => ReactNode;
	renderContent: (item: T, index: number) => ReactNode;
	className?: string;
	getKey?: (item: T, index: number) => string | number;
};

const defaultGetKey = <T extends Record<string, unknown>>(
	item: T,
	index: number,
) => {
	return typeof item.id === "string" || typeof item.id === "number"
		? item.id
		: index;
};

export const Accordion = <T extends Record<string, unknown>>({
	data,
	renderTitle,
	renderContent,
	className,
	getKey = defaultGetKey,
}: AccordionProps<T>) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggle = (index: number) => {
		setOpenIndex((prev) => (prev === index ? null : index));
	};

	return (
		<div className={cn("w-full", className)}>
			{data.map((item, index) => (
				<AccordionItem
					key={getKey(item, index)}
					index={index}
					isOpen={openIndex === index}
					onToggle={() => toggle(index)}
					title={renderTitle(item, index)}
					content={renderContent(item, index)}
				/>
			))}
		</div>
	);
};
