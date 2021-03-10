module.exports = {
  presets: [
    ['@babel/preset-env', { loose: true, modules: false }],
    '@babel/preset-react'
  ],
  plugins: [['@babel/plugin-transform-runtime', { esModules: false }]]
}
