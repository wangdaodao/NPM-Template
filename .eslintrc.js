module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential'
  ],
  plugins: ['vue'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars':0,
    'eqeqeq':'off',
    'no-self-compare':'off',
    'comma-spacing':'off',
    'one-var':'off',
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'quotes': [1, 'single'] //引号类型 `` ' ''
  }
}
