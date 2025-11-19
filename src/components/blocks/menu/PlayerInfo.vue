<template>
  <div class="player-info">
    <p>Shmatko</p>
    <p>~</p>
    <p>Gold: 1000</p>
    <p>~</p>
    <p>Level 1</p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '../../../assets/scss/var.scss';

.player-info {
  display: flex;
  gap: 20px;
  justify-content: space-around;

  color: var.$default-text-color;
  font-size: 1.2rem;
  font-weight: 800;
}
</style>
