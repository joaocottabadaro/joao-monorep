import type { Config } from 'tailwindcss'
import sharedConfig from '@joao-ui/tailwind-config'

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./src/**/*.tsx'],
  presets: [sharedConfig],
}
console.log(
  "🚀 ~ config: Pick<Config, 'content' | 'presets'>.sharedConfig:",
  sharedConfig.fontSize,
)

export default config
