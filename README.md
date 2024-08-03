# eslint-config

Common ESLint configuration used in Hamster

## Install

```bash
npm i --save-dev eslint @hamster-bot/eslint-config
# Or use yarn
yarn add --dev eslint @hamster-bot/eslint-config
```

## Usage

This package provides flat config introduced in ESLint v9.

Create an eslint configuration file like `eslint.config.mjs` and append the following:

```js file=eslint.config.mjs
import * as hamster from '@hamster-bot/eslint-config'

export default [
  ...hamster.configs.base,
  // Add more configurations here
]
```

> You can also use `require()` and `module.export` if you are using CommonJS.
> In that case, you should use `.cjs` extension or just `.js` for the configuration file.

------

TypeScript user should use `hamster.configs.typescript`:

```js file=eslint.config.mjs
import * as hamster from '@hamster-bot/eslint-config'

export default [
  ...hamster.configs.typescript,
  // Add more configurations here
]
```

------

We also provide a configuration for Node scripts:

```js file=eslint.config.mjs
import * as hamster from '@hamster-bot/eslint-config'

export default [
  ...hamster.configs.node,
  // Add more configurations here
]
```

> [!NOTE]
> If you are using Yarn PnP, since the `import-x` plugin that we are using if not
> actually support PnP, it is supported by the `eslint`'s FlatCompat plugin right now.
> So it require you to manually declare this plugin as the dependencies in your `package.json`.

## License

![Creative Commons License](https://i.creativecommons.org/l/by-nc/4.0/88x31.png)

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License](http://creativecommons.org/licenses/by-nc/4.0/).
