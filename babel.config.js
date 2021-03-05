module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "component",
      { "libraryName": "materiel-demo", "style": false, },
      "materiel-demo"
    ]
  ]
}
