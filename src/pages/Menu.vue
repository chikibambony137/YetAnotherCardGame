<template>
  <div class="menu">

    <div class="menu__player-info">
        <PlayerInfo></PlayerInfo>
    </div>

    <div class="menu__view">
        <router-view></router-view>
    </div>

    <div class="menu__nav">
        <Nav></Nav>
    </div>
    
  </div>
</template>

<script setup>
import PlayerInfo from '../components/blocks/menu/PlayerInfo.vue';
import Nav from '../components/blocks/menu/Nav.vue';
</script>

<style lang="scss" scoped>
@use '../assets/scss/var.scss';

.menu {
    display: flex;
    flex-direction: column;
    gap: 20px;

    max-width: 600px;
    width: 100%;
    height: 100dvh;

    margin: auto;
}

.menu__player-info {
    width: 100%;
    height: 60px;

    border-radius: 0 0 20px 20px;

    background-color: var.$block-background-color;
}

.menu__view {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;

    border-radius: 20px;

    background-color: var.$block-background-color;
}

.menu__nav {
    width: 100%;
    height: 80px;
}
</style>