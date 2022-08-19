import { createRouter, createWebHistory } from 'vue-router';
import Graph from '../views/Graph.vue';
import Home from '../views/Home.vue';
import LineChart from '../views/LineChart.vue';
import ScatterPlotChart from '../views/ScatterPlotChart.vue';
import TypeHead from '../views/TypeHead.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/chart/line',
    name: 'Line Chart',
    component: LineChart,
  },
  {
    path: '/chart/scatter-plot',
    name: 'Scatter Plot Chart',
    component: ScatterPlotChart,
  },
  {
    path: '/typehead',
    name: 'typehead',
    component: TypeHead,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.VITE_APP_BASE_URL),
  routes,
});

export default router;
