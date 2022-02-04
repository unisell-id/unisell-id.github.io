/** @type {import('vue-router').RouteLocationRaw[]} */
export const routes = [{
        path: "/",
        name: "Beranda",
        component: () =>
            import ("./pages/Index.vue"),
    },
    {
        path: "/tentang",
        name: "Tentang",
        component: () =>
            import ("./pages/About.vue"),
    },
];
