import components2 from './src/index.vue'

components2.install = function (Vue) {
  Vue.component(components2.name, components2)
}

export default components2