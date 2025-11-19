<template>
  <div class="nav">
    <div class="nav__layout">
      <div class="nav__deck-bttn">
        <input type="radio" name="nav" value="/deck" v-model="route" />Колода
      </div>

      <div class="nav__play-bttn">
        <input type="radio" name="nav" value="/" v-model="route" />Играть
      </div>

      <div class="nav__shop-btnn">
        <input type="radio" name="nav" value="/shop" v-model="route" />Магазин
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const route = ref(window.location.pathname); // current url

watch(route, (newRoute) => {
  router.push(newRoute);
});
</script>

<style lang="scss" scoped>
@use "../../../assets/scss/var.scss";

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
