import { useRef, type FC, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Cancel } from "@/svg/Cancel";
import { useDialog } from "@/hooks/useDialog";

export type ModalProps = {
	open: boolean;
	onClose: () => void;
	children: ReactNode;
	className?: string;
	showCloseIcon?: boolean;
	closeIcon?: ReactNode;
};

export const Modal: FC<ModalProps> = ({
	open,
	onClose,
	children,
	className,
	showCloseIcon = true,
	closeIcon,
}) => {
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	useDialog(dialogRef, open, onClose);

	if (typeof window === "undefined") return null;

	return (
		<dialog
			ref={dialogRef}
			className={cn(
				"transition-colors fixed inset-0 w-[100%] h-[100%] flex justify-center items-center",
				{
					"bg-black/20 visible": open,
					invisible: !open,
				},
			)}
			onClick={onClose}
			onKeyDown={(e) => {
				if (e.key === "Escape") onClose();
			}}
		>
			<div
				role="presentation"
				onClick={(e) => e.stopPropagation()}
				aria-hidden
				className={cn(
					"relative transition-all bg-white max-w-[90vw] max-h-[90vh] rounded-[0.5rem] shadow p-4",
					{ "scale-100 opacity-100": open, "scale-125 opacity-0 ": !open },
					className,
				)}
			>
				{children}

				{showCloseIcon && (
					<button
						type="button"
						onClick={onClose}
						aria-label="Close modal"
						className={cn(
							"absolute -top-2 -right-2 bg-zinc-200 rounded-full p-1 flex justify-center items-center hover:brightness-75 hover:text-tiiqu-primary transition-all shadow-lg ease-in-out duration-300 cursor-pointer",
						)}
					>
						{closeIcon ?? (
							<>
								<Cancel />

								<span className="sr-only">Cancel Button</span>
							</>
						)}
					</button>
				)}
			</div>
		</dialog>
	);
};
