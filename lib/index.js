import component1 from './component1'
import component2 from './component2'

const components = [
  component1, component2
]

function install (Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  component1,
  component2
}
