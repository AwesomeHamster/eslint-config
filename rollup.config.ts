import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: [
    'src/index.ts',
    'src/node.ts',
    'src/typescript.ts',
  ],
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
  plugins: [nodeResolve(), commonjs(), typescript()],
})
