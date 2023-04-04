import {defineConfig} from 'cypress'
import viteConfig from './vitest.config'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
  },
})
