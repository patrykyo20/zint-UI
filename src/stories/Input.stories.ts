import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TVariant from "../types/TVariants";
import TRounded from "../types/TRounded";
import IInput, { TInput } from "../components/Input/Input.types";
import { Input } from "../components/Input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;


const createVariantStory = (variant: TVariant): Story => ({
  args: {
    variant,
  },
});

const createSizeStory = (size: IInput["size"]): Story => ({
  args: {
    size,
  },
});

const createRoundedStory = (rounded: TRounded): Story => ({
  args: {
    rounded,
  },
});

const createTypeStory = (type: TInput): Story => ({
  args: {
    type,
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

export const Text = createTypeStory("text");
export const Color = createTypeStory("color");
export const Date = createTypeStory("date");
export const DateTimeLocal = createTypeStory("datetime-local");
export const Email = createTypeStory("email");
export const File = createTypeStory("file");
export const Hidden = createTypeStory("hidden");
export const Month = createTypeStory("month");
export const Number = createTypeStory("number");
export const Password = createTypeStory("password");
export const Search = createTypeStory("search");
export const Tel = createTypeStory("tel");
export const Time = createTypeStory("time");
export const Url = createTypeStory("url");
export const Week = createTypeStory("week");