import type { Meta, StoryObj } from '@storybook/react'
import { Spacing } from '../components/Spacing'

const meta = {
  title: 'Tokens/Spacing',
  component: Spacing,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Spacing>

export default meta
type Story = StoryObj<typeof meta>

export const base: Story = {}
