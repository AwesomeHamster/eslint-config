import stylistic from '@stylistic/eslint-plugin'
import { Linter } from 'eslint'

const config: Linter.BaseConfig[] = [
  stylistic.configs.customize({
    arrowParens: true,
    blockSpacing: true,
    commaDangle: 'always-multiline',
    indent: 2,
    quotes: 'single',
    semi: false,
  }),
  {
    rules: {
      'comma-dangle': 'off',
      'quotes': 'off',
      '@stylistic/linebreak-style': ['error', 'unix'],
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
      '@stylistic/function-call-spacing': 'error',
      '@stylistic/keyword-spacing': 'error',
      '@stylistic/member-delimiter-style': 'error',
      'max-len': 'off',
      '@stylistic/max-len': ['error', {
        code: 120,
        ignoreTrailingComments: true,
        ignoreUrls: true, ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }],
      '@stylistic/multiline-comment-style': 'warn',
    },
  },
]

export default config
