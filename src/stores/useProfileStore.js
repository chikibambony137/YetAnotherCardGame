import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProfileStore = defineStore('profile', () => {

    const user = ref({
        nickname: "Shmatko",
        gold: 500,
        level: 1,

        deckCardsId: [0, 1, 2, 3],
        collectionCardsId: [0, 1, 2, 3, 4],
    });

    return {
        user,
    }
})