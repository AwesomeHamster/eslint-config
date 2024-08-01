import { FlatCompat } from '@eslint/eslintrc'
import { Linter } from 'eslint'
import globals from 'globals'

import baseConfig from './index'

const compat = new FlatCompat()
const config: Linter.FlatConfig[] = [
  ...baseConfig,
  ...compat.extends('plugin:n/recommended'),
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'n/global-require': 'error',
      'n/no-new-require': 'error',
      'n/no-unpublished-import': 'off',
      'n/no-unsupported-features/node-builtins': 'off',
      'n/no-process-exit': 'off',
      'n/prefer-global/buffer': 'error',
      'n/prefer-global/console': 'error',
      'n/prefer-global/process': 'error',
      'n/prefer-global/text-decoder': 'error',
      'n/prefer-global/text-encoder': 'error',
      'n/prefer-global/url-search-params': 'error',
      'n/prefer-global/url': 'error',
    },
  },
]

export default config
