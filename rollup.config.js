import autoExternal from 'rollup-plugin-auto-external';
import dts from 'rollup-plugin-dts';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import { terser } from 'rollup-plugin-terser';

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

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
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx'],
      }),
      terser(),
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
    output: { file: 'dist/index.d.ts', format: 'es' },
    plugins: [dts.default()],
  },
  {
    input: 'src/lib/plugin.ts',
    output: {
      file: 'plugin/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      autoExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx'],
      }),
      terser(),
    ],
  },
  {
    input: 'src/lib/plugin.ts',
    output: {
      file: 'plugin/index.d.ts',
      format: 'es',
    },
    plugins: [dts.default()],
  },
];

export default config;
