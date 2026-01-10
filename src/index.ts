import { defineConfig } from 'eslint/config'

import base from './rules/base.js'
import node from './rules/node.js'
import typescript from './rules/typescript.js'

const configs: {
  base: typeof base
  node: typeof node
  typescript: typeof typescript
} = {
  base,
  node,
  typescript,
}

export {
  configs,
  defineConfig,
}
