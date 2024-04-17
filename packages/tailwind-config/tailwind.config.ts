import type { Config } from 'tailwindcss'
// Example preset
import {
  colors,
  fontSizes,
  fontWeights,
  radius,
  space,
  fonts,
  lineHeights,
} from '@joao-ui/tokens/src'

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  preset: [],
  theme: {
    extend: {
      colors,
      fontSizes,
      fontWeights,
      fonts,
      lineHeights,
      radius,
      space,
      flexGrow: {
        2: '2',
        3: '3',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
    },
  },
}
export default config
