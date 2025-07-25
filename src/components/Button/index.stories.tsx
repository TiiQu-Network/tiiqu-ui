import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from ".";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		intent: {
			control: "select",
			options: [
				"primary",
				"secondary",
				"light_primary",
				"light_secondary",
				"outline_primary",
				"outline_secondary",
				"borderless_primary",
				"borderless_secondary",
			],
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		fullWidth: {
			control: "boolean",
		},
		disabled: {
			control: "boolean",
		},
	},
	args: {
		size: "md",
		fullWidth: true,
		disabled: false,
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: "Primary",
		intent: "primary",
	},
};

export const Secondary: Story = {
	args: {
		children: "Secondary",
		intent: "secondary",
	},
};

export const PrimaryLight: Story = {
	args: {
		children: "Primary Light",
		intent: "light_primary",
	},
};

export const SecondaryLight: Story = {
	args: {
		children: "Secondary Light",
		intent: "light_secondary",
	},
};

export const PrimaryOutline: Story = {
	args: {
		children: "Primary Outline",
		intent: "outline_primary",
	},
};

export const SecondaryOutline: Story = {
	args: {
		children: "Secondary Outline",
		intent: "outline_secondary",
	},
};

export const GrayOutline: Story = {
	args: {
		children: "Gray Outline",
		intent: "outline_gray",
	},
};

export const PrimaryBorderless: Story = {
	args: {
		children: "Primary Borderless",
		intent: "borderless_primary",
	},
};

export const SecondaryBorderless: Story = {
	args: {
		children: "Secondary Borderless",
		intent: "borderless_secondary",
	},
};

export const DisabledPrimary: Story = {
	args: {
		children: "Disabled Primary",
		intent: "primary",
		disabled: true,
	},
};

export const LargeOutlineSecondary: Story = {
	args: {
		children: "Large Outline Secondary",
		intent: "outline_secondary",
		size: "lg",
		fullWidth: false,
	},
};
