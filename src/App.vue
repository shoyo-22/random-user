<template>
  <div id="app">
    <base-navbar />
    <router-view />
  </div>
</template>

<script>
import BaseNavbar from './components/BaseNavbar.vue';

export default {
  name: 'App',
  components: {
    BaseNavbar,
  },
};
</script>
