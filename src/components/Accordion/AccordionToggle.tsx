import { Minus } from "@/svg/Minus";
import { Plus } from "@/svg/Plus";
import type { FC, ReactNode } from "react";

export type AccordionToggleProps = {
	index: number;
	isOpen: boolean;
	onToggle: () => void;
	title: ReactNode;
};

export const AccordionToggle: FC<AccordionToggleProps> = ({
	index,
	isOpen,
	onToggle,
	title,
}) => {
	return (
		<button
			type="button"
			onClick={onToggle}
			className="w-full text-left cursor-pointer flex justify-between items-start gap-4 p-4"
			aria-expanded={isOpen}
			aria-controls={`accordion-content-${index}`}
		>
			<h3 className="text-tiiqu-black font-semibold text-sm md:text-lg">
				{title}
			</h3>
			<span className="text-tiiqu-primary transition-opacity ease-in-out duration-300">
				{isOpen ? <Minus /> : <Plus />}
				<span className="sr-only">Toggle Accordion</span>
			</span>
		</button>
	);
};
