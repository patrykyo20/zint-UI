import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../../components/Button";
import TVariant from "../../types/TVariants";
import TRounded from "../../types/TRounded";
import IButton from "../../components/Button/Button.types";

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

const createSizeStory = (size: IButton["size"]): Story => ({
  args: {
    size,
    children: "Button",
  },
});

const createRoundedStory = (rounded: TRounded): Story => ({
  args: {
    rounded,
    children: "Button",
  },
});

export const Primary = createVariantStory("primary");
export const Secondary = createVariantStory("secondary");
export const Tertiary = createVariantStory("tertiary");
export const Dark = createVariantStory("dark");
export const Light = createVariantStory("light");
export const Default = createVariantStory("default");
export const Success = createVariantStory("success");
export const Warning = createVariantStory("warning");
export const Danger = createVariantStory("danger");

export const SmallSize = createSizeStory("sm");
export const MediumSize = createSizeStory("md");
export const LargeSize = createSizeStory("lg");

export const NoneRounded = createRoundedStory("none");
export const XSmallRounded = createRoundedStory("xs");
export const SmallRounded = createRoundedStory("sm");
export const MediumRounded = createRoundedStory("md");
export const LargeRounded = createRoundedStory("lg");
export const XLargeRounded = createRoundedStory("xl");
