import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useCardStore } from './useCardStore';

export const useProfileStore = defineStore('profile', () => {
    const maxCardsInDeck = 4;

    const user = ref({
        nickname: "Shmatko",
        gold: 500,
        level: 1,

        deckCards: [],
        collectionCardsId: [0, 1, 2, 3, 4],
    });

    const visibleCollectionCardsId = user.visibleCollectionCardsId;
    const cardStore = useCardStore();

    const addCardToDeck = (cardId) => {
        const card = cardStore.cards.filter(card => {card.id == cardId});
        card.id = Date.now();
        user.value.deckCards.push(card);
    }

    const removeCardFromCollection = (cardId) => {
        try {
            
        }
        catch {
            console.log(`Remove error ${user.value}`);
            return `Remove error ${user.value}`;
        }
    }

    // const addCardToDeck = (cardId) => {
    //     removeCardFromCollection(cardId);

    //     if (user.value.deckCards.length < maxCardsInDeck)
    //         user.value.deckCards.push(cardId);
    // }

    const removeCardFromDeck = (cardId) => {
        addCardToCollection(cardId);

        try {
            user.value.deckCardsId = user.value.deckCardsId.filter(id => id != cardId);
            return user.value.deckCardsId;
        }
        catch {
            console.log(`Remove error ${user.value}`);
            return `Remove error ${user.value}`;
        }
    }

    return {
        user, visibleCollectionCardsId, addCardToDeck, removeCardFromDeck
    }
})