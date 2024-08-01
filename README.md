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

Create an eslint configuration file like `eslint.config.js` and append the following:

```js
const hamster = require('@hamster-bot/eslint-config')

module.exports = [
  hamster,
  // Add more configurations here
]
```

------

TypeScript user should use `@hamster-bot/eslint-config/typescript`:

```js
const hamster = require('@hamster-bot/eslint-config/typescript')

module.exports = [
  hamster,
  // Add more configurations here
]
```

## License

![Creative Commons License](https://i.creativecommons.org/l/by-nc/4.0/88x31.png)

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License](http://creativecommons.org/licenses/by-nc/4.0/).
