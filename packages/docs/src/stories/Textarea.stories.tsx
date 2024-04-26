import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '@joao-ui/react'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>
export const base: Story = {
  args: {
    className: 'w-[300px]',
    placeholder: ' Type your message here.',
  },
}
