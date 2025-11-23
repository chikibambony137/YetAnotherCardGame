import { createRouter, createWebHistory } from "vue-router";

import Play from "@/pages/menu/Play.vue";
import Cards from "@/pages/menu/Cards.vue";
import Shop from "@/pages/menu/Shop.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Play },
        { path: '/cards', component: Cards },
        { path: '/shop', component: Shop },
    ]
})