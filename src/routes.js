/** @type {import('vue-router').RouteLocationRaw[]} */
export const routes = [{
        path: "/",
        component: () =>
            import ("./pages/Index.vue"),
    },
    {
        path: "/tentang",
        component: () =>
            import ("./pages/About.vue"),
    },
];