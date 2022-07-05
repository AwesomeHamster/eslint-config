# eslint-config

Common ESLint configuration used in Hamster


## Install

```bash
npm i --save-dev eslint @hamster-bot/eslint-config
# Or
yarn add --dev eslint @hamster-bot/eslint-config
```

If you are using TypeScript as well, you need to install typescript-eslint plugin.

```bash
npm i --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
# Or
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Usage

Create an `.eslintrc.json` file and append the following:

```json
{
  "extends": [
    "@hamster-bot" // or "@hamster-bot/eslint-config/typescript" for TypeScript users
  ]
}
```

## License

![Creative Commons License](https://i.creativecommons.org/l/by-nc/4.0/88x31.png)

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License](http://creativecommons.org/licenses/by-nc/4.0/).
