<template>
  <div class="app">
    <Menu></Menu>
  </div>
</template>

<script setup>
import Menu from './pages/Menu.vue';


</script>

<style scoped lang="scss">
@use './assets/scss/var.scss';

.app {
  margin: 0;
  padding: 0 20px;

  background-color: var.$root-background-color;
}
</style>