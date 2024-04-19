import { Button } from '@joao-ui/react'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
    variant: 'default',
    size: 'default',
    disabled: false,
  },
  tags: ['autodocs'],

  argTypes: {
    variant: {
      options: [
        'primary',
        `secondary`,
        `ghost`,
        'link',
        'destructive',
        'outline',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['default', `sm`, 'icon', `lg`],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      type: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'button',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'button',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'button',
  },
}
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'button',
  },
  parameters: {
    pseudo: { hover: true },
  },
}
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'button',
  },
}
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'button',
  },
}
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'button',
  },
}
