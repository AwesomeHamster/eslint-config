declare module 'eslint-config-standard' {
import { Linter } from 'eslint'
  const config: Linter.Config
  export = config
}

declare module 'eslint-plugin-import' {
  import { Linter } from 'eslint'
  const _config: {
    rules: Linter.RulesRecord
    configs: {
      recommended: Linter.Config
      errors: Linter.Config
      warnings: Linter.Config
      react: Linter.Config
      'react-native': Linter.Config
      electron: Linter.Config
      typescript: Linter.Config
    }
  }
  export = _config
}

declare module 'eslint-plugin-mocha' {
  import { Linter } from 'eslint'
  const _config: {
    rules: Linter.RulesRecord
    configs: {
      flat: {
        recommended: Linter.FlatConfig
        all: Linter.FlatConfig
      }
    }
  }
  export = _config
}
