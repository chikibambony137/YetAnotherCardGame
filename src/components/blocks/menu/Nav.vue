<template>
  <div class="nav">
    <div class="nav__layout">
      <div class="nav__deck-bttn"><input type="radio" name="nav" />Колода</div>

      <div class="nav__play-bttn"><input type="radio" name="nav" />Играть</div>

      <div class="nav__shop-btnn"><input type="radio" name="nav" />Магазин</div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '../../../assets/scss/var.scss';

.nav {
    display: flex;
    align-items: end;
    
    width: 100%;
    height: 100%;

    background-color: red;
}

.nav__layout {
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 90%;

  border-radius: 20px 20px 0 0;
background-color: var.$block-background-color;
}
</style>
