import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/login",
        name: 'Login',
        component: () => import("@/views/Login.vue"),
    },
    {
        path: "/",
        name: 'Home',
        component: () => import("@/views/Index.vue"),
    },
    {
        path: "/:catchAll(.*)",
        component: () => import("@/views/404.vue"),
    },

]


const router = createRouter({
    routes,
    history: createWebHashHistory(import.meta.env.BASE_URL),
    scrollBehavior: () => {
        return {top: 0,
            behavior: "smooth",
        }
    }
})

export default router