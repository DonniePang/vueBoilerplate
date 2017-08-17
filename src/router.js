import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import home from './components/home.vue';
import products from './components/products.vue';

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/products',
        component: products
    }
];

export default () => {
    return new VueRouter({
        routes
    })
}