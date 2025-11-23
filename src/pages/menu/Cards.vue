<template>
    <div class="menu__cards cards">
      <Deck class="cards__deck"></Deck>
      <Collection class="cards__collection"></Collection>
    </div>
  </template>
  
  <script setup>
  import Deck from '@/components/blocks/menu_deck/Deck.vue';
  import Collection from '@/components/blocks/menu_deck/Collection.vue';
  </script>
  
  <style scoped lang="scss">
  .cards {
    display: flex;
    flex-direction: column;

    overflow: scroll;

    width: 100%;
    height: 100%;
  }
  </style>