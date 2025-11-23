<template>
  <div class="menu__play play">
    <h2 class="play__level">Level 1</h2>

    <div class="play__boss boss">
      <img
        class="boss__img"
        src="@/assets/content/boss/GoblinKing.png"
        alt="GoblinKing.png" />
      <h2 class="boss__name">Goblin King</h2>
    </div>

    <PlayButton class="play__play-button"></PlayButton>
  </div>
</template>

<script setup>
import PlayButton from "@/components/buttons/PlayButton.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/var.scss";

h2 {
  margin: 10px;
  font-family: var.$default-font-family;
  font-weight: 500;
}

.menu__play {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  gap: 7vh;

  color: var.$default-text-color;
}

.play__boss {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
}

.boss__img {
  width: 200px;
  height: auto;
}
</style>
