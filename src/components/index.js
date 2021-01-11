import helloWorld from './hello-world.vue'

helloWorld.install = function (Vue) {
  Vue.component(helloWorld.name, helloWorld)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.helloWorld = helloWorld;
  window.Vue.use(helloWorld);
}

export default helloWorld
