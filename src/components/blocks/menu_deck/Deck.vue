<template>
  <div class="deck">
    <h2 class="deck__title">Deck</h2>
    <Table class="deck__table" :cards="deck" :displayedValues> </Table>
  </div>
</template>

<script setup>
import Table from "@/components/blocks/menu_deck/Table.vue";

const displayedValues = {
  title: true, info: true, removeBttn: true
}

const deck = [
  {
    id: 0,
    name: "Fireball",
    info: "fire and ball - FIREBALL!!",
    image: "card/Fireball.png",
    features: {
      cost: 3,
      damage: 5,
    },
  },

  {
    id: 1,
    name: "Heal",
    info: "heal my ebalo",
    image: "card/Heal.png",
    features: {
      cost: 2,
      heal: 3,
    },
  },

  {
    id: 2,
    name: "Lightning",
    info: "Power off!",
    image: "card/Lightning.png",
    features: {
      cost: 7,
      damage: 10,
    },
  },

  {
    id: 3,
    name: "Shield",
    info: "Shield for ass, use correctly!",
    image: "card/Shield.png",
    features: {
      cost: 5,
      shield: 50,
    },
  },
];
</script>

<style scoped lang="scss">
@use "@/assets/scss/var.scss";

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
