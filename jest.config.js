module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.vue',
    '!src/main.js',
    '!src/App.vue',
    '!**/node_modules/**'
  ]
}
