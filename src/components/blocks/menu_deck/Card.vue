<template>
  <div class="card" :class="{'card_choosed': isChoosed}" @click="chooseCard">
    
    <div class="card__cover">
        <img class="card__img" :src=getCardImgSrc() :alt="card.name" draggable="false">
    </div>

    <div class="card__buttons" v-show="isChoosed">
        <h3 class="card__title" v-if="displayedValues.title">{{ card.name }}</h3>
        <button class="card__bttn card__bttn_info" v-if="displayedValues.info">INFO</button>
        <button class="card__bttn card__bttn_use" v-if="displayedValues.useBttn">USE</button>
        <button class="card__bttn card__bttn_remove" v-if="displayedValues.removeBttn">REMOVE</button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useProfileStore } from '@/stores/useProfileStore';
import { useCardStore } from '../../../stores/useCardStore';

const isChoosed = ref(false);

const { card, displayedValues } = defineProps({card: Object, displayedValues: Object});

const profileStore = useProfileStore();
const user = profileStore.user;
const cardStore = useCardStore();

const isUnlocked = card.id in user.collectionCardsId ? true : false;

const getCardImgSrc = () => {
    if (isUnlocked) {
        return card.image;
    }
    else return cardStore.lockedCardImg;
}

const chooseCard = () => {
    if (isUnlocked) isChoosed.value = !isChoosed.value
}

</script>

<style scoped lang="scss">
@use '@/assets/scss/var.scss';

.card {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 15px 25px;
    
    min-width: 150px;
    height: 150px;

    box-sizing: border-box;
    border-radius: 20px;;
    
    transition: all 0.2s ease-in-out;
    background-color: transparent;
    z-index: 1;
}

.card_choosed {
    display: block;
    height: min-content;

    z-index: 10;

    transform: scale(1.05);

    /* Обводка поверх карты */
    box-shadow: 
        0 0 0 3px var.$button-color_choosed, /* Внутренняя обводка */
        0 10px 25px rgba(0, 0, 0, 0.2); /* Тень для эффекта поднятия */

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

    transition: transform 0.2s ease;

    border-radius: 20px;
}

.card_choosed .card__img {
    transform: scale(1.02); /* Легкое увеличение изображения при выборе */
}

.card__buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    margin: 10px auto;
    
}

.card__title {
    margin: 0;
    padding: 0;

    color: var.$default-text-color;
}
</style>