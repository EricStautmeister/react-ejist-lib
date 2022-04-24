import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: './src/index.js',
        output: [
            {
                file: './dist/index.js',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: './dist/index.es.js',
                format: 'es',
                sourcemap: true,
            },
        ],
        plugins: [
            postcss({
                plugins: [],
                extract: true,
                minimize: true,
            }),
            image(),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
            external(),
            resolve(),
            terser(),
        ],
    },
];
