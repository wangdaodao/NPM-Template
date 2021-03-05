import components1 from './src/index.vue'

components1.install = function (Vue) {
  Vue.component(components1.name, components1)
}

export default components1