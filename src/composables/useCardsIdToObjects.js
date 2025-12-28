
export function useCardsIdToObjects(cardsId, cards) {
    const cardsById = [];

    cardsId.forEach(id => {
        cards.forEach(card => {
            if (card.id == id) cardsById.push(card);
        });
        
    });

    return cardsById;
}