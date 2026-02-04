import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Mail, Plus, ArrowRight, Loader2 } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
        "success",
        "warning",
        "info",
        "xp",
        "achievement",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "xl", "icon", "icon-sm", "icon-lg"],
    },
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default
export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
};

// Variants
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link Button",
    variant: "link",
  },
};

// Educational variants
export const Success: Story = {
  args: {
    children: "Concluir",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Atenção",
    variant: "warning",
  },
};

export const Info: Story = {
  args: {
    children: "Saiba mais",
    variant: "info",
  },
};

// Gamification variants
export const XPBadge: Story = {
  args: {
    children: "+50 XP",
    variant: "xp",
    size: "sm",
  },
};

export const Achievement: Story = {
  args: {
    children: "Conquista Desbloqueada!",
    variant: "achievement",
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    children: "Extra Large Button",
    size: "xl",
  },
};

// With Icons
export const WithLeftIcon: Story = {
  args: {
    children: "Email",
    leftIcon: <Mail className="h-4 w-4" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "Continue",
    rightIcon: <ArrowRight className="h-4 w-4" />,
  },
};

export const IconOnly: Story = {
  args: {
    children: <Plus className="h-4 w-4" />,
    size: "icon",
    "aria-label": "Add item",
  },
};

// States
export const Loading: Story = {
  args: {
    children: "Saving...",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

// All Variants Grid
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button variant="xp">+100 XP</Button>
        <Button variant="achievement">Conquista!</Button>
      </div>
    </div>
  ),
};

// All Sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};
