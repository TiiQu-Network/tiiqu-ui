import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from ".";

type Testimonial = {
	photo: string;
	name: string;
	position: string;
	from: string;
	content: string;
};

const testimonialList: Testimonial[] = [
	{
		photo:
			"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_19.png",
		name: "Mark",
		position: "PhD Researcher",
		from: "UK",
		content:
			'"PDF2QA has completely transformed the way I work with academic papers. What used to take me hours—reading, summarizing, and cross-referencing—now takes just minutes. I can extract precise Q&As directly from the source, saving me 3-4 hours per paper. It’s the most efficient tool I’ve found for staying accurate while saving time."',
	},
	{
		photo:
			"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_19.png",
		name: "Dr. Susan Carter",
		position: "Environmental Science Professor",
		from: "BD",
		content:
			'"As an educator, PDF2QA has been invaluable. Preparing lectures and course materials is so much faster with direct, source-authentic Q&As. It helps me ensure my students get accurate information while freeing up time to focus on teaching and mentoring."',
	},
	{
		photo:
			"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_19.png",
		name: "Alex",
		position: "Sustainability Student",
		from: "BD",
		content:
			'"Studying sustainability can be overwhelming with all the resources out there. PDF2QA makes it simple to pull out the key insights I need for projects and discussions. It’s like having a personal assistant for research, and it keeps me on track with accurate, source-based answers."',
	},
];

const meta: Meta<typeof Carousel> = {
	title: "Components/Carousel",
	component: Carousel,
	tags: ["autodocs"],
	argTypes: {
		prevButton: {
			description:
				"Custom React node for the previous button. Defaults to a left arrow icon.",
			control: false,
		},
		nextButton: {
			description:
				"Custom React node for the next button. Defaults to a right arrow icon.",
			control: false,
		},
		prevButtonClassName: {
			description: "Additional CSS class names to style the previous button.",
			control: "text",
		},
		nextButtonClassName: {
			description: "Additional CSS class names to style the next button.",
			control: "text",
		},
	},
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
	render: (args) => (
		<Carousel {...args}>
			{testimonialList.map((item) => {
				const key = `${item.name}-${item.position}-${item.from}`;
				return (
					<div
						key={key}
						className="py-14 px-9 md:py-20 md:px-12 text-secondary"
					>
						<p className="mb-6 opacity-80">{item.content}</p>
						<h5 className="text-[19px] font-medium">
							-{item.name}, {item.position}, {item.from}
						</h5>
					</div>
				);
			})}
		</Carousel>
	),
};
