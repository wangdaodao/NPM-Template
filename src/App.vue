<template>
  <div id="app">
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from './components/index.js';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
};
</script>
