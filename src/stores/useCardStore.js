import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCardStore = defineStore('cards', () => {
    const cards = ref({
        "fireball": {
            name: "fireball",
            info: "fire and ball - FIREBALL!!",
            image: "",
        }
    })
})