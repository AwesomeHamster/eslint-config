import { configs, defineConfig } from './dist/index.js'

export default defineConfig(
  configs.typescript,
  configs.node,
  {
    ignores: ['dist/**/*'],
  },
)
