import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/github',
    name: 'GitHub',
    redirect: () => {
      window.location.replace('https://github.com/hjonkbot');
      return '/github-redirecting';
    },
  },
  {
    path: '/discord',
    name: 'Discord',
    redirect: () => {
      window.location.replace('https://discord.com/api/oauth2/authorize?client_id=705511891715490003&permissions=3411008&scope=bot');
      return '/discord-redirecting';
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
