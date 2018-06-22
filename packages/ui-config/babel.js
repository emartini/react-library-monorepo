const presets = [
  ['@babel/preset-env', { modules: false }],
  '@babel/preset-react'
];

const env = {
  test: {
    presets: ['@babel/preset-env', '@babel/typescript', '@babel/preset-react']
  }
};

const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread'
];

module.exports = {
  presets,
  plugins,
  env
};
