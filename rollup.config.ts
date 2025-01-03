import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: ['src/index.ts'],
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames(chunkInfo) {
        return chunkInfo.name + '.cjs'
      },
    },
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames(chunkInfo) {
        return chunkInfo.name + '.js'
      },
    },
  ],
  external: [
    '@eslint/js',
    'eslint',
    /^eslint-plugin-.*/,
    'globals',
    'typescript-eslint',
    /^@stylistic\//,
  ],
  treeshake: true,
  plugins: [nodeResolve(), commonjs(), typescript()],
})
