import type { Meta, StoryObj } from "@storybook/react-vite";
import { Table } from "../../components/ui/Table/Table";

const meta: Meta<typeof Table> = {
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: "Table",
  },
};
