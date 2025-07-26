import { useEffect, type RefObject } from "react";

export function useDialog(
	dialogRef: RefObject<HTMLDialogElement | null>,
	open: boolean,
	onClose: () => void,
) {
	useEffect(() => {
		const dialog = dialogRef.current;

		if (open) {
			if (!dialog?.open) {
				dialog?.showModal();
			}
		} else {
			dialog?.close();
		}

		const handleCancel = (e: Event) => {
			e.preventDefault();
			onClose();
		};

		dialog?.addEventListener("cancel", handleCancel);

		return () => {
			dialog?.removeEventListener("cancel", handleCancel);
		};
	}, [dialogRef, open, onClose]);
}
