import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProfileStore = defineStore('profile', () => {
    const maxCardsInDeck = 4;

    const user = ref({
        nickname: "Shmatko",
        gold: 500,
        level: 1,

        deckCardsId: [0, 1, 2, 3],
        collectionCardsId: [0, 1, 2, 3, 4],
    });

    const addCardToDeck = (cardId) => {
        if (user.value.deckCardsId.length < maxCardsInDeck)
            user.value.deckCardsId.push(cardId);
    }

    return {
        user, addCardToDeck
    }
})