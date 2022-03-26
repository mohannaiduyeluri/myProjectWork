import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Login from '../pages/Login.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: Login }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;