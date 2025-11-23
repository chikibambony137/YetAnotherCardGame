<template>
  <div class="card" :class="{'card_choosed': isChoosed}" @click="isChoosed = !isChoosed">
    
    <div class="card__cover">
        <img class="card__img" src="@/assets/content/card/Fireball.png" :alt="card.name" draggable="false">
    </div>

    <div class="card__buttons" v-show="isChoosed">
        <button class="card__bttn card__bttn_info">INFO</button>
        <button class="card__bttn card__bttn_remove">REMOVE</button>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const isChoosed = ref(false);

const { card } = defineProps({card: Object});

</script>

<style scoped lang="scss">
@use '@/assets/scss/var.scss';

.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 15px 25px;
    
    min-width: 150px;
    height: 150px;

    box-sizing: border-box;
    border-radius: 20px;
    background-color: transparent;
    z-index: 1;
}

.card_choosed {
    display: block;
    height: min-content;

    z-index: 2;
    box-sizing: border-box;
    background-color: var.$button-color_choosed;
}

.card__cover {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100px;
    height: 120px;

    box-sizing: border-box;
}

.card__img {
    width: 100%;
    height: 100%;
}

.card__buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    margin: 10px auto;
}
</style>