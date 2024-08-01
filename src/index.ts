import { FlatCompat } from '@eslint/eslintrc'
import mochaPlugin from 'eslint-plugin-mocha'
import { Linter } from 'eslint'

const compat = new FlatCompat()

const config: Linter.FlatConfig[] = [
  ...compat.extends('plugin:import-x/recommended'),
  mochaPlugin.configs.flat.recommended,
  {
    languageOptions: {
      ecmaVersion: 2024,
    },
    settings: {
      'import-x/resolver': {
        node: true,
      },
    },
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
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
]

export default config
