import { createRouter, createWebHistory } from 'vue-router';
import Graph from '../views/Graph.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/graph',
    name: 'Graph',
    component: Graph,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.VITE_APP_BASE_URL),
  routes,
});

export default router;
