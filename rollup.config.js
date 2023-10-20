import autoExternal from 'rollup-plugin-auto-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import preserveDirectives from 'rollup-plugin-preserve-directives';

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        sourcemap: true,
        preserveModules: true,
      },
      {
        dir: 'dist/esm',
        format: 'esm',
        sourcemap: true,
        preserveModules: true,
      },
    ],
    plugins: [
      autoExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),
      preserveDirectives.default(),
    ],
    onwarn(warning, warn) {
      if (
        (warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
          warning.message.includes(`"use client"`)) ||
        warning.code === 'MIXED_EXPORTS'
      ) {
        return;
      }
      warn(warning);
    },
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    external: [/\.css$/],
    plugins: [dts.default()],
  },
];

export default config;
