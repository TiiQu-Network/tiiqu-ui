import { Minus } from "@/svg/Minus";
import { Plus } from "@/svg/Plus";
import type { FC, ReactNode } from "react";
import { cn } from "../../lib/utils";

export type AccordionToggleProps = {
	index: number;
	isOpen: boolean;
	onToggle: () => void;
	title: ReactNode;
	icon?: ReactNode;
};

export const AccordionToggle: FC<AccordionToggleProps> = ({
	index,
	isOpen,
	onToggle,
	title,
	icon,
}) => {
	const showCustomIcon = !!icon;

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

			<span
				className={cn(
					"flex items-center transition-transform duration-300 ease-in-out",
					isOpen ? "rotate-180" : "rotate-0",
				)}
			>
				{showCustomIcon ? icon : isOpen ? <Minus /> : <Plus />}
				<span className="sr-only">Toggle Accordion</span>
			</span>
		</button>
	);
};
