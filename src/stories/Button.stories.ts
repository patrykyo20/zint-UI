import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../components/Button";
import TVariant from "../types/TVariants";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const createVariantStory = (variant: TVariant): Story => ({
  args: {
    variant,
    children: "Button",
  },
});

const createSizeStory = (size: "sm" | "md" | "lg"): Story => ({
  args: {
    size,
    children: "Button",
  },
});

export const Primary = createVariantStory("primary");
export const Secondary = createVariantStory("secondary");
export const Tertiary = createVariantStory("tertiary");
export const Dark = createVariantStory("dark");

export const Small = createSizeStory("sm");
export const Medium = createSizeStory("md");
export const Large = createSizeStory("lg");
