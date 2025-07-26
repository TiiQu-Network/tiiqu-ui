import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Accordion, AccordionProps } from ".";

import { accordionData } from "../../../dummyData/data.ts";

type AccordionDataType = (typeof accordionData)[0];

const meta: Meta<AccordionProps<AccordionDataType>> = {
	title: "Components/Accordion",
	component: Accordion,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		className: {
			control: "text",
			description: "Custom CSS class for the accordion container",
		},
	},
};

export default meta;

type Story = StoryObj<AccordionProps<AccordionDataType>>;

export const Default: Story = {
	render: (args) => (
		<Accordion<AccordionDataType>
			data={args.data}
			renderTitle={args.renderTitle}
			renderContent={args.renderContent}
			className={args.className}
		/>
	),
	args: {
		data: accordionData,
		renderTitle: (item) => item.title,
		renderContent: (item) => item.content,
		className: "",
	},
};
