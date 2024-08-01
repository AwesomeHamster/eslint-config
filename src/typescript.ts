import { FlatCompat } from '@eslint/eslintrc'
import { Linter } from 'eslint'
import { configs as tseslint } from 'typescript-eslint'

import baseConfig from './index'

const compat = new FlatCompat()
const config = [
  ...baseConfig,
  ...tseslint.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  ...compat.extends('plugin:import-x/typescript'),
  {
    settings: {
      'import-x/resolver': {
        typescript: true,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/array-type': 'error',
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',
      'func-call-spacing': 'off',
      '@typescript-eslint/func-call-spacing': 'error',
      'keyword-spacing': 'off',
      '@typescript-eslint/keyword-spacing': 'error',
      'no-redeclare': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none',
        },
      ],
      'no-dupe-class-members': 'off',
      '@typescript-eslint/no-dupe-class-members': 'error',
      'no-inner-declarations': 'off',
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'warn',
      'semi': 'off',
      '@typescript-eslint/semi': ['error', 'never'],
      '@typescript-eslint/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'none',
          },
          singleline: {
            delimiter: 'semi',
          },
        },
      ],
      'space-before-function-paren': 'off',
      '@typescript-eslint/space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          asyncArrow: 'always',
          named: 'never',
        },
      ],
      '@typescript-eslint/type-annotation-spacing': 'error',
    },
  },
] as Linter.FlatConfig[]

export default config
