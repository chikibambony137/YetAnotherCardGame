<template>
  <div class="deck">
    <h2 class="deck__title">Deck</h2>
    <Table class="deck__table" :cards="deck" :displayedValues> </Table>
  </div>
</template>

<script setup>
import Table from "@/components/blocks/menu_deck/Table.vue";
import { useProfileStore } from "../../../stores/useProfileStore";
import { useCardStore } from "../../../stores/useCardStore";
import { ref, onMounted, watch } from "vue";

const displayedValues = {
  title: true, info: true, removeBttn: true
}

const profileStore = useProfileStore();
const user = profileStore.user;
const cardStore = useCardStore();

const deck = ref([])

const updateDeck = () => {
  deck.value = user.deckCards;
  console.log('deck is updated');
}

onMounted(() => {
  updateDeck();
})

watch(user, () => {
  updateDeck();
})
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
  min-height: 150px;
  height: min-content;

  flex-wrap: wrap;

  border-radius: 20px;
  background-color: var.$table-background-color;
}
</style>
