import { configs } from './dist/index.js'

export default [
  ...configs.typescript,
  {
    ignores: ['dist/**/*'],
  },
]
