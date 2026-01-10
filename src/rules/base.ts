import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import { importX } from 'eslint-plugin-import-x'

import stylistic from './stylistic.js'

const config = defineConfig(
  js.configs.recommended,
  // @ts-expect-error for poor typing
  importX.flatConfigs.recommended,
  {
    name: '@maiko/base/ignores',
    ignores: [
      '**/.git/**',
      '**/.yarn/**',
      '**/node_modules/**',
      '**/.pnp.*',
    ],
  },
  {
    name: '@maiko/base/rules',
    languageOptions: {
      ecmaVersion: 'latest',
    },
    settings: {
      'import-x/resolver': {
        node: true,
      },
    },
    rules: {
      'dot-notation': 'off',
      'generator-star-spacing': ['error', 'after'],
      'max-len': ['warn', 120],
      'multiline-ternary': 'off',
      'no-callback-literal': 'off',
      'no-mixed-operators': 'off',
      'no-use-before-define': 'off',
      'no-return-assign': 'off',
      'no-sequences': 'off',
      'no-useless-escape': 'off',
      'one-var': 'off',
      'operator-linebreak': [
        'error',
        'after',
        {
          overrides: {
            '?': 'before',
            ':': 'before',
          },
        },
      ],
      'quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      'quote-props': ['error', 'consistent-as-needed'],
      'valid-typeof': 'off',
      'yield-star-spacing': ['error', 'after'],
      'space-before-function-paren': 'off',
      // Import plugin
      'import-x/export': 'off',
      'import-x/no-unresolved': 'error',
      'import-x/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index', 'object', 'type'],
          'newlines-between': 'always',
          'alphabetize': {
            order: 'asc',
            caseInsensitive: false,
          },
        },
      ],
    },
  },
  stylistic,
)

export default config
