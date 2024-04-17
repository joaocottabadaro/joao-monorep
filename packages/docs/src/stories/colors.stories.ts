import type { Meta, StoryObj } from '@storybook/react'

import { Colors } from './Colors'

const meta = {
  title: 'Tokens/Colors',
  component: Colors,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Colors>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {}
