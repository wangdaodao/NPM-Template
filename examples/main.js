import Vue from 'vue'
import App from './App.vue'

// // 统一加载
// import materiel from 'materiel-demo'
// Vue.use(materiel)

// 只加载component2
// import { component2 } from 'materiel-demo'
// Vue.use(component2)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
