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
const preset = {
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radius,
    space,
    extend: {
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

export default preset
