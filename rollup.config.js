import typescript from "@rollup/plugin-typescript"
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: "src/index.ts",
    plugins: [typescript(), babel({ babelHelpers: 'bundled' })],
    output: [
      {
        file: "dist/index.mjs",
        format: 'esm',
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        plugins: [commonjs()],
      }
    ]
  },
  {
    input: "src/types.ts",
    plugins: [dts()],
    output: {
      file: "dist/types.d.ts",
      format: 'esm'
    }
  },
  {
    input: "src/index.ts",
    plugins: [dts()],
    output: {
      file: "dist/index.d.ts",
      format: 'esm'
    }
  }
]
