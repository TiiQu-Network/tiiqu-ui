import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from ".";

const meta = {
	title: "components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: "Primary",
		variant: "primary",
	},
};

export const Secondary: Story = {
	args: {
		children: "Secondary",
		variant: "secondary",
	},
};

export const PrimaryLight: Story = {
	args: {
		children: "Primary Light",
		variant: "primaryLight",
	},
};

export const SecondaryLight: Story = {
	args: {
		children: "Secondary Light",
		variant: "secondaryLight",
	},
};

export const PrimaryOutline: Story = {
	args: {
		children: "Primary Outline",
		variant: "primaryOutline",
	},
};

export const SecondaryOutline: Story = {
	args: {
		children: "Secondary Outline",
		variant: "secondaryOutline",
	},
};

export const PrimaryBorderless: Story = {
	args: {
		children: "Primary Borderless",
		variant: "primaryBorderless",
	},
};

export const SecondaryBorderless: Story = {
	args: {
		children: "Secondary Borderless",
		variant: "secondaryBorderless",
	},
};
