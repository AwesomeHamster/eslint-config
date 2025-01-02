import { Linter } from 'eslint'
import { flatConfigs as importx } from 'eslint-plugin-import-x'
import { configs as tseslint } from 'typescript-eslint'

import baseConfig from './base'

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
  importx.typescript,
  {
    rules: {
      '@typescript-eslint/array-type': 'error',
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',
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
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
          enforceForJSX: true,
        },
      ]
    },
  },
] as Linter.Config[]

export default config
