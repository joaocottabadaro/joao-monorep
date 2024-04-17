import type { Meta, StoryObj } from '@storybook/react'
import { fontSizes } from '@joao-ui/tokens'

import { TokenTable } from './TokenTable'

const meta = {
  title: 'Tokens/Font Sizes',
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
    tokens: fontSizes,
    hasRemValue: false,
  },
}
