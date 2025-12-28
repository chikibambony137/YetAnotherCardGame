<template>
  <div class="table">
    <Card class="table__card" 
    v-for="card in cards" :key="card.id" 
    :card="card" :displayedValues></Card>
  </div>
</template>

<script setup>
import Card from "@/components/blocks/menu_deck/Card.vue";
const { cards, displayedValues } = defineProps({ cards: Array, displayedValues: Object });
</script>

<style scoped lang="scss">
@use "@/assets/scss/var.scss";

.table {
  display: flex;

  width: 100%;
  height: 100%;

  flex-wrap: wrap;

  border-radius: 20px;
  background-color: var.$table-background-color;
}
</style>
