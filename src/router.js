import { createRouter, createWebHistory } from "vue-router";

import Play from "./pages/menu/Play.vue";
import Deck from "./pages/menu/Deck.vue";
import Shop from "./pages/menu/Shop.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Play },
        { path: '/deck', component: Deck },
        { path: '/shop', component: Shop },
    ]
})