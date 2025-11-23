<template>
  <div class="deck">
    <h2 class="deck__title">Deck</h2>
    <div class="deck__table">
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
        <Card class="deck__card"></Card>
    </div>
  </div>
</template>

<script setup>
import Card from './Card.vue';
</script>

<style scoped lang="scss">
@use '../../../assets/scss/var.scss';

.deck {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;

    width: 100%;
}

.deck__title {
    margin: 10px 0 0 0;
    font-family: var.$default-font-family;
    color: var.$default-text-color;
    text-align: center;
}

.deck__table {
    display: flex;

    width: 100%;
    height: min-content;

    flex-wrap: wrap;

    border-radius: 20px;
    background-color: var.$table-background-color;
}
</style>