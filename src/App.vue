<template>
  <div id="app">
    <demo-components />
  </div>
</template>

<script>
import demoComponents from './components/index.js';

export default {
  name: 'App',
  components: {
    demoComponents,
  },
  data() {
    return {};
  },
};
</script>
