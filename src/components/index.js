import demoComponents from './index.vue'

demoComponents.install = function (Vue) {
  Vue.component(demoComponents.name, demoComponents)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.demoComponents = demoComponents;
  window.Vue.use(demoComponents);
}

export default demoComponents
