import { calculateTypeScale } from 'utopia-core'
import { configUtopiaFont } from './configUtopia'

export type UtopiaStep = {
  step: number
  minFontSize: number
  maxFontSize: number
  wcagViolation?: {
    from: number
    to: number
  } | null
  clamp: string
}

export const fontSize: UtopiaStep[] = calculateTypeScale(configUtopiaFont)
