/* eslint-disable @typescript-eslint/no-unused-vars */
import { fontSize, spacing } from '@joao-ui/tokens/src'

export const utopiafontSize = fontSize.map((item) => {
  let label = 'SM'
  if (item.step === 0) {
    label = 'MD'
  } else if (item.step === 1) {
    label = 'LG'
  } else if (item.step === 2) {
    label = 'XL'
  } else if (item.step > 2) {
    label = `${item.step - 2}XL`
  } else if (item.step === -2) {
    label = 'XS'
  } else if (item.step < -2) {
    label = `${Math.abs(item.step)}XS`
  }

  const formattedLabel = label.toLowerCase()
  return { [formattedLabel]: item.clamp }
})

export const utopiafontSizeObject = Object.assign({}, ...utopiafontSize)

export const spacingUtopia = spacing.sizes.map((item) => {
  let label = item.label
  if (item.label === 's') label += 'm'
  else if (item.label === 'm') label += 'd'
  else if (item.label === 'l') label += 'g'
  return { [label]: item.clamp }
})

export const spacingUtopiaObject = Object.assign({}, ...spacingUtopia)
