const { basename } = require('path');
const babel = require('rollup-plugin-babel');
const { terser } = require('rollup-plugin-terser');
const resolve = require('rollup-plugin-node-resolve');
const autoExternal = require('rollup-plugin-auto-external');
const babelConfig = require('./babel');

const DEFAULT_INPUT = 'src/index.js';
const pkgName = basename(process.env.LERNA_PACKAGE_NAME);
const sourcemap = true;

const plugins = () => [
  autoExternal(),
  resolve({
    preferBuiltins: true,
    module: true,
    jsnext: true,
    main: true,
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  }),
  babel(Object.assign({ exclude: 'node_modules/**' }, babelConfig)),
  terser()
];

module.exports = (input = DEFAULT_INPUT) => [
  {
    input,
    plugins: plugins(),
    output: [
      {
        file: `dist/${pkgName}.es.js`,
        format: 'es',
        sourcemap,
        sourcemapFile: `dist/${pkgName}.es.js.map`
      }
    ]
  },
  {
    input,
    plugins: plugins(),
    output: [
      {
        file: `dist/${pkgName}.js`,
        format: 'cjs',
        sourcemap,
        sourcemapFile: `dist/${pkgName}.js.map`
      }
    ]
  }
];
