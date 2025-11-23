<template>
  <button class="play-button">
    Fight
  </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use '@/assets/scss/var.scss';

.play-button {
    width: 100%;
    height: 50px;

    padding: 5px;
    box-sizing: border-box;
    border: 0;
    border-radius: 10px;

    font-family: var.$default-font-family;
    color: var.$default-text-color;
    font-weight: 600;
    font-size: 1.5rem;

    background-color: var.$main-button-color;
}
</style>