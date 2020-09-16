import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
// import ApiService from "../common/api.service";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import('../views/Home/Home'),
        children: [
            {
                path: '',
                name: 'GlobalFeed',
                component: () => import('../views/Home/GlobalFeed')
            },

            {
                path: 'my-feed',
                name: 'MyFeed',
                component: () => import('../views/Home/YourFeed'),
                meta: {
                    auth: true
                },
            }
        ]
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Auth/Login')
    },

    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Auth/Register')
    },

    {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/Settings'),
        meta: {
            auth: true
        },
    },
    {
        path: '/@:username',
        props: true,
        component: () => import('../views/Profile/Profile'),
        children: [
            {
                path: '',
                name: 'MyArticles',
                component: () => import('../views/Profile/MyArticles'),
                props: true,
            },
            {
                path: 'favorites',
                name: 'MyFavorites',
                component: () => import('../views/Profile/FavoritedArticles'),
                props: true,
                meta: {
                    auth: true
                },
            }
        ],
    },

    {
        path: '/editor',
        component: () => import('../views/Article/Article'),
        children: [
            {
                path: '',
                name: 'CreateArticle',
                component: () => import('../views/Article/Create'),
                meta: {
                    auth: true
                }
            },

            {
                path: ':slug',
                name: 'EditArticle',
                component: () => import('../views/Article/Edit'),
                props: true,
                meta: {
                    auth: true
                },
            }
        ]
    },

    {
        path: '/articles/:slug',
        name: 'DetailArticle',
        component: () => import('../views/Article/Detail'),
        props: true
    }






    // {
    //   path: "/about",
    //   name: "About",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue")
    // }
];

const router = new VueRouter({
    //mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
        const isAuth = store.getters["auth/isAuth"];
        if (isAuth) {
            next();
        } else {
            next({name: 'login'});
        }
    } else {
        next();
    }
})

export default router;
