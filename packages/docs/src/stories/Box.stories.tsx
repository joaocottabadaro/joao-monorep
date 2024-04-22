import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@joao-ui/react'

const meta = {
  title: 'Box',
  component: Box,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>
export const base: Story = {
  args: {
    children: (
      <>
        <p>Container</p>
      </>
    ),
  },
}
