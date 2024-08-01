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
import hamster from '@hamster-bot/eslint-config'

export default [
  hamster,
  // Add more configurations here
]
```

> You can also use `require()` and `module.export` if you are using CommonJS.
> In that case, you should use `.cjs` extension or just `.js` for the configuration file.

------

TypeScript user should use `@hamster-bot/eslint-config/typescript`:

```js file=eslint.config.mjs
import hamster from '@hamster-bot/eslint-config/typescript'

export default [
  hamster,
  // Add more configurations here
]
```

------

We also provide a configuration for Node scripts:

```js file=eslint.config.mjs
import hamster from '@hamster-bot/eslint-config/node'

export default [
  hamster,
  // Add more configurations here
]
```

## License

![Creative Commons License](https://i.creativecommons.org/l/by-nc/4.0/88x31.png)

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License](http://creativecommons.org/licenses/by-nc/4.0/).
