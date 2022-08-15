# eslint-config

Common ESLint configuration used in Hamster

## Install

```bash
npm i --save-dev eslint @hamster-bot/eslint-config
# Or use yarn
yarn add --dev eslint @hamster-bot/eslint-config
```

------

If you are using TypeScript as well, you need to install `typescript-eslint` plugin and `eslint-import-resolver-typescript`.

```bash
npm i --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript
# Or use yarn
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript
```

## Usage

Create an eslint configuration file like `.eslintrc.json` and append the following:

```json
{
  "extends": [
    "@hamster-bot"
  ]
}
```

------

TypeScript user should use `@hamster-bot/eslint-config/typescript`:

```json
{
  "extends": [
    "@hamster-bot/eslint-config/typescript"
  ]
}
```

## License

![Creative Commons License](https://i.creativecommons.org/l/by-nc/4.0/88x31.png)

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License](http://creativecommons.org/licenses/by-nc/4.0/).
