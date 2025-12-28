<template>
  <div class="collection">
    <h2 class="collection__title">Collection</h2>
    <div class="collection__table">
      <Card class="collection__card" 
      v-for="card in cardStore.cards" :key="card.id" 
      :card="card" :displayedValues></Card>
    </div>
  </div>
</template>

<script setup>
import { useCardStore } from "../../../stores/useCardStore";

import Card from "./Card.vue";

const cardStore = useCardStore();

const displayedValues = {
  title: true, info: true, useBttn: true
}
</script>

<style scoped lang="scss">
@use "@/assets/scss/var.scss";

.collection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  flex-grow: 1;

  user-select: none;
  width: 100%;
}

.collection__title {
  margin: 10px 0 0 0;
  font-family: var.$default-font-family;
  color: var.$default-text-color;
  text-align: center;
}

.collection__table {
  display: flex;

  width: 100%;
  height: 100%;

  flex-wrap: wrap;

  border-radius: 20px;
  background-color: var.$table-background-color;
}
</style>
