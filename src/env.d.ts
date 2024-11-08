declare module 'eslint-plugin-mocha' {
  import { Linter } from 'eslint'
  const _config: {
    rules: Linter.RulesRecord
    configs: {
      flat: {
        recommended: Linter.Config
        all: Linter.Config
      }
    }
  }
  export = _config
}
