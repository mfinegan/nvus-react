import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import scss from 'rollup-plugin-scss'
import babel from '@rollup/plugin-babel'
import image from '@rollup/plugin-image'
import sass from 'rollup-plugin-sass'
import autoprefixer from 'autoprefixer'
import copy from 'rollup-plugin-copy'

const packageJson = require('./package.json')

export default {
    input: 'src/lib/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss(),
        copy({
            targets: [
                {
                    src: 'src/lib/_theme.scss',
                    dest: 'dist',
                    rename: '_theme.scss',
                },
            ],
        }),
    ],
}
