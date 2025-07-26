import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Modal, ModalProps } from ".";

const meta: Meta<typeof Modal> = {
	title: "Components/Modal",
	component: Modal,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Modal>;

type ModalWrapperProps = Omit<ModalProps, "open" | "onClose">;

const ModalWrapper = ({ children, ...rest }: ModalWrapperProps) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				className="border-tiiqu-secondary border-[1px] rounded-lg hover:border-tiiqu-gray transition-colors ease-in-out duration-150 min-h-[3.1874rem] min-w-[12.8125rem] px-4 cursor-pointer text-tiiqu-secondary"
				type="button"
				onClick={() => setOpen(true)}
			>
				Open Modal
			</button>
			<Modal open={open} onClose={() => setOpen(false)} {...rest}>
				{children ?? <p>This is the modal content.</p>}
			</Modal>
		</>
	);
};

export const Default: Story = {
	render: (args) => <ModalWrapper {...args} />,
	args: {
		showCloseIcon: true,
	},
};
