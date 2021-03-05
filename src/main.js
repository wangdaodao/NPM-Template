import Vue from 'vue'
import App from './App.vue'

// 全部引用
// import glo from './components/index.js'
// Vue.use(glo)

import components1 from './components/name1/index.js'
import components2 from './components/name2/index.js'

Vue.use(components1)
Vue.use(components2)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
