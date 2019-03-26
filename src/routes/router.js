import Vue from 'vue';
import Router from 'vue-router';

import Home from 'App/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../app/About.vue')
        }, 
        {
            path: '/example',
            name: 'about',
            component: () => import('../app/Example.vue')
            // Which allows you to
            // load this component when we navigate to this page.
        }
    ]
});
