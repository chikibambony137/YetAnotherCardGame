<template>
  <div class="nav">
    <div class="nav__layout">
      <div
        class="nav__bttn"
        :class="{ nav__bttn_active: isDeckActive }"
        @click="goTo('/deck')">
        <img class="nav__img" src="../../../assets/icons/menu/deck.svg" alt="deck.svg" draggable="false">
      </div>

      <div
        class="nav__bttn nav__bttn_play bttn"
        :class="{ nav__bttn_active: isPlayActive }"
        @click="goTo('/')">
        <span class="bttn__title">Play</span>
      </div>

      <div
        class="nav__bttn"
        :class="{ nav__bttn_active: isShopActive }"
        @click="goTo('/shop')">
        <img class="nav__img" src="../../../assets/icons/menu/shop.svg" alt="shop.svg" draggable="false">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";

const isDeckActive = ref(false);
const isPlayActive = ref(true);
const isShopActive = ref(false);

const styleButton = (route) => {
  switch (route) {
    case "/deck": {
      isDeckActive.value = true;
      isPlayActive.value = false;
      isShopActive.value = false;
      break;
    }
    case "/": {
      isPlayActive.value = true;
      isDeckActive.value = false;
      isShopActive.value = false;
      break;
    }
    case "/shop": {
      isShopActive.value = true;
      isPlayActive.value = false;
      isDeckActive.value = false;
      break;
    }
  }
}

const router = useRouter();

const goTo = (newRoute) => {
  router.push(newRoute);
  styleButton(newRoute);
};

onMounted(() => {
  const route = window.location.pathname;
  styleButton(route);
})
</script>

<style lang="scss" scoped>
@use "../../../assets/scss/var.scss";

.nav {
  display: flex;
  align-items: end;

  width: 100%;
  height: 100%;
}

.nav__layout {
  display: flex;
  justify-content: center;
  gap: 20px;
  overflow: visible;

  width: 100%;
  height: 90%;

  padding: 0 20px;
  border-radius: 20px 20px 0 0;
  background-color: var.$block-background-color;
}

.nav__radio-bttn {
  display: none;
}

.nav__bttn {
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  border-radius: 20px 20px 0 0;

  cursor: pointer;
  user-select: none;

  padding: 10px 20px;
  background-color: var.$button-color;
}

.nav__bttn_active {
  position: relative;
  top: -10px;
  height: 110%;
  
  background-color: var.$button-color_choosed;
}

.nav__bttn_play {
  width: 200px;
}

.bttn__title {
  color: var.$default-text-color;
  font-family: var.$default-font-family;
  font-size: 2rem;
  font-weight: 700;
}

.nav__img {
  width: 42px;
  height: auto;
}
</style>
