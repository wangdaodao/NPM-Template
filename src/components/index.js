import components1 from './name1/index.js'
import components2 from './name2/index.js'

const components = [
  components1,
  components2
]

const install = function (Vue) { 
  components.forEach(component => {
    Vue.component(component.name, component);
  });
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  components1,
  components2
}
