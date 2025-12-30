<template>
  <div class="collection">
    <h2 class="collection__title">Collection</h2>
    <Table class="collection__table" :cards="cardStore.cards" :displayedValues> </Table>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useCardStore } from "@/stores/useCardStore";

import Table from "@/components/blocks/menu_deck/Table.vue";
import { useProfileStore } from "../../../stores/useProfileStore";

const cardStore = useCardStore();
const collection = ref(cardStore.cards);
const profileStore = useProfileStore();

const displayedValues = {
  title: true,
  info: true,
  useBttn: true,
};

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
