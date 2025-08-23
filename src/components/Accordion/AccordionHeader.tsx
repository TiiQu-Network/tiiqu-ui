import type { KeyboardEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "@/svg/ArrowIcon";

export type AccordionHeaderProps<T> = {
	id: string;
	item: T;
	isOpen: boolean;
	onToggle: () => void;
	renderHeading: (item: T, isOpen: boolean) => ReactNode;
	renderToggleIcon?: (isOpen: boolean) => ReactNode;
	className?: string;
	buttonClassName?: string;
	headingClassName?: string;
	buttonRef?: (el: HTMLButtonElement | null) => void;
};

export const AccordionHeader = <T,>({
	id,
	item,
	isOpen,
	onToggle,
	renderHeading,
	renderToggleIcon,
	className,
	buttonClassName,
	headingClassName,
	buttonRef,
}: AccordionHeaderProps<T>) => {
	const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			onToggle();
		}
	};

	return (
		<h2 id={`${id}-heading`} className={cn(className)}>
			<button
				ref={buttonRef}
				type="button"
				aria-controls={`${id}-content`}
				aria-expanded={isOpen}
				onClick={onToggle}
				onKeyDown={handleKeyDown}
				className={cn(
					"p-4 w-full flex cursor-pointer h-full items-center gap-4 justify-between",
					buttonClassName,
				)}
			>
				<span
					className={cn(
						"text-left text-md md:text-lg text-black leading-[150%] font-semibold text-[1rem]",
						headingClassName,
					)}
				>
					{renderHeading(item, isOpen)}
				</span>
				{renderToggleIcon ? (
					renderToggleIcon(isOpen)
				) : (
					<span
						className={cn(
							"text-[#84818A] transition duration-300 ease-in-out flex items-center justify-center",
							isOpen && "rotate-180",
						)}
					>
						<ArrowIcon
							className="w-3 h-3"
							direction="bottom"
							aria-hidden="true"
						/>
						<span className="sr-only">Toggle Icon</span>
					</span>
				)}
			</button>
		</h2>
	);
};
