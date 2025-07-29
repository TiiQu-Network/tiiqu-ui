import type { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AccordionToggle } from "./AccordionToggle";

export type AccordionItemProps = {
	index: number;
	isOpen: boolean;
	onToggle: () => void;
	title: ReactNode;
	content: ReactNode;
};

export const AccordionItem: FC<AccordionItemProps> = ({
	index,
	isOpen,
	onToggle,
	title,
	content,
}) => {
	return (
		<div
			className={cn(
				"border border-tiiqu-gray rounded-sm mb-4 overflow-hidden transition-all duration-300 ease-in-out",
				isOpen ? "max-h-full" : "max-h-fit",
			)}
		>
			<AccordionToggle
				index={index}
				isOpen={isOpen}
				onToggle={onToggle}
				title={title}
			/>

			<div
				id={`accordion-content-${index}`}
				className={cn(
					"transition-all duration-300 ease-in-out overflow-hidden px-4",
					isOpen ? "max-h-fit opacity-100 pb-4" : "max-h-0 opacity-0",
				)}
			>
				<div className="text-sm text-zinc-700">{content}</div>
			</div>
		</div>
	);
};
