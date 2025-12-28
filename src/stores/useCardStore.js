import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCardStore = defineStore('cards', () => {

    const lockedCardImg = "content/card/Locked.jpg";

    const cards = ref([
        {
            id: 0,
            name: "Fireball",
            info: "fire and ball - FIREBALL!!",
            image: "content/card/Fireball.png",
            features: {
                cost: 3,
                damage: 5,
            }
        },

        {
            id: 1,
            name: "Heal",
            info: "heal my ebalo",
            image: "content/card/Heal.png",
            features: {
                cost: 2,
                heal: 3,
            }
        },

        {
            id: 2,
            name: "Lightning",
            info: "Power off!",
            image: "content/card/Lightning.png",
            features: {
                cost: 7,
                damage: 10,
            }
        },

        {
            id: 3,
            name: "Shield",
            info: "Shield for ass, use correctly!",
            image: "content/card/Shield.png",
            features: {
                cost: 5,
                shield: 50,
            }
        },

        {
            id: 4,
            name: "Fireball",
            info: "fire and ball - FIREBALL!!",
            image: "content/card/Fireball.png",
            features: {
                cost: 3,
                damage: 5,
            }
        },

        {
            id: 5,
            name: "Fireball",
            info: "fire and ball - FIREBALL!!",
            image: "content/card/Fireball.png",
            features: {
                cost: 3,
                damage: 5,
            }
        },

        {
            id: 6,
            name: "Fireball",
            info: "fire and ball - FIREBALL!!",
            image: "content/card/Fireball.png",
            features: {
                cost: 3,
                damage: 5,
            }
        },

        {
            id: 7,
            name: "Fireball",
            info: "fire and ball - FIREBALL!!",
            image: "content/card/Fireball.png",
            features: {
                cost: 3,
                damage: 5,
            }
        },

        {
            id: 8,
            name: "Fireball",
            info: "fire and ball - FIREBALL!!",
            image: "content/card/Fireball.png",
            features: {
                cost: 3,
                damage: 5,
            }
        },

        {
            id: 9,
            name: "Fireball",
            info: "fire and ball - FIREBALL!!",
            image: "content/card/Fireball.png",
            features: {
                cost: 3,
                damage: 5,
            }
        },

        {
            id: 10,
            name: "Fireball",
            info: "fire and ball - FIREBALL!!",
            image: "content/card/Fireball.png",
            features: {
                cost: 3,
                damage: 5,
            }
        },

        {
            id: 11,
            name: "Fireball",
            info: "fire and ball - FIREBALL!!",
            image: "content/card/Fireball.png",
            features: {
                cost: 3,
                damage: 5,
            }
        },

        {
            id: 12,
            name: "Fireball",
            info: "fire and ball - FIREBALL!!",
            image: "content/card/Fireball.png",
            features: {
                cost: 3,
                damage: 5,
            }
        },

        {
            id: 13,
            name: "Fireball",
            info: "fire and ball - FIREBALL!!",
            image: "content/card/Fireball.png",
            features: {
                cost: 3,
                damage: 5,
            }
        },

        {
            id: 14,
            name: "Fireball",
            info: "fire and ball - FIREBALL!!",
            image: "content/card/Fireball.png",
            features: {
                cost: 3,
                damage: 5,
            }
        },

        {
            id: 15,
            name: "Fireball",
            info: "fire and ball - FIREBALL!!",
            image: "content/card/Fireball.png",
            features: {
                cost: 3,
                damage: 5,
            }
        },

        {
            id: 16,
            name: "Fireball",
            info: "fire and ball - FIREBALL!!",
            image: "content/card/Fireball.png",
            features: {
                cost: 3,
                damage: 5,
            }
        },

        {
            id: 17,
            name: "Fireball",
            info: "fire and ball - FIREBALL!!",
            image: "content/card/Fireball.png",
            features: {
                cost: 3,
                damage: 5,
            }
        },
    ]);

    return {
        cards, lockedCardImg
    }
})