import { Linter } from 'eslint'

export = {
  extends: ['./index.js', 'plugin:n/recommended'],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2024,
  },
  plugins: ['n'],
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
} satisfies Linter.Config
