import type { KeyboardEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AccordionContent } from "./AccordionContent";
import { AccordionHeader } from "./AccordionHeader";

export type AccordionPanelProps<T> = {
	id: string;
	item: T;
	isOpen: boolean;
	onToggle: () => void;
	renderHeading: (item: T, isOpen: boolean) => ReactNode;
	renderContent: (item: T, isOpen: boolean) => ReactNode;
	renderToggleIcon?: (isOpen: boolean) => ReactNode;
	className?: string;
	headingClassName?: string;
	contentClassName?: string;
	buttonClassName?: string;
	buttonRef?: (el: HTMLButtonElement | null) => void;
	onButtonKeyDown?: (e: KeyboardEvent<HTMLButtonElement>) => void;
};

export const AccordionPanel = <T,>({
	id,
	item,
	isOpen,
	onToggle,
	renderHeading,
	renderContent,
	renderToggleIcon,
	className,
	headingClassName,
	contentClassName,
	buttonRef,
	buttonClassName,
}: AccordionPanelProps<T>) => {
	return (
		<div
			className={cn(
				"w-[100%] bg-ui-white overflow-hidden",
				"border-t-gray border-t-[1px]",

				className,
			)}
		>
			<AccordionHeader
				id={id}
				item={item}
				isOpen={isOpen}
				onToggle={onToggle}
				renderHeading={renderHeading}
				renderToggleIcon={renderToggleIcon}
				className={headingClassName}
				buttonRef={buttonRef}
				buttonClassName={buttonClassName}
			/>
			<AccordionContent
				id={id}
				item={item}
				renderContent={renderContent}
				isOpen={isOpen}
				className={contentClassName}
			/>
		</div>
	);
};
