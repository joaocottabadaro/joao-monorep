import type { Meta, StoryObj } from '@storybook/react'
import { FontSize } from './FontSize'

const meta = {
  title: 'Tokens/Font Sizes',
  component: FontSize,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FontSize>

export default meta
type Story = StoryObj<typeof meta>

export const base: Story = {}
