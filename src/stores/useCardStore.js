import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCardStore = defineStore('cards', () => {
    const cards = ref([
        {
            id: 0,
            name: "Fireball",
            info: "fire and ball - FIREBALL!!",
            image: "../../../assets/content/card/Fireball.png",
            features: {
                cost: 3,
                damage: 5,
            }
        },

        {
            id: 1,
            name: "Heal",
            info: "heal my ebalo",
            image: "@/assets/content/card/Heal.png",
            features: {
                cost: 2,
                heal: 3,
            }
        },

        {
            id: 2,
            name: "Lightning",
            info: "Power off!",
            image: "@/assets/content/card/Lightning.png",
            features: {
                cost: 7,
                damage: 10,
            }
        },

        {
            id: 3,
            name: "Shield",
            info: "Shield for ass, use correctly!",
            image: "@/assets/content/card/Shield.png",
            features: {
                cost: 5,
                shield: 50,
            }
        },
    ]);

    return {
        cards,
    }
})