import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import( './views/Detail.vue'),
    },
    {
      path: '/hot',
      name: 'hot',
      component: () => import( './views/Hot.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import( './views/Contact.vue'),
    },
  ],
});
