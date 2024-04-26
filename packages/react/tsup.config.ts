import { defineConfig } from 'tsup'

export default defineConfig({
  name: '@joao-ui/react',
  entry: ['src/index.ts', 'src/client.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  minify: true,
  external: ['react', 'react-dom'],
})
