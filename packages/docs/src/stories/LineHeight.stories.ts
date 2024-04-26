import type { Meta, StoryObj } from '@storybook/react'
import { lineHeight } from '@joao-ui/tokens'

import { TokenTable } from '../components/TokenTable'

const meta = {
  title: 'Tokens/LineHeights',
  component: TokenTable,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TokenTable>

export default meta
type Story = StoryObj<typeof meta>

export const base: Story = {
  args: {
    tokens: lineHeight,
  },
}
