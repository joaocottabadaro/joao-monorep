// tailwind config is required for editor support

import type { Config } from 'tailwindcss'
import sharedConfig from '@joao-ui/tailwind-config'

const config: Pick<Config, 'content' | 'presets'> = {
  content: [
    './src/stories/*.{js,jsx,ts,tsx}',
    './src/stories/**/*.{js,jsx,ts,tsx}',
    './src/globals.css',
    '../../node_modules/@joao-ui/react/dist/**',
  ],
  presets: [sharedConfig],
}

export default config
