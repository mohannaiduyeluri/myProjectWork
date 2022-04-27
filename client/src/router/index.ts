import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Login from '../pages/Login.vue';
import Tasks from '../pages/Tasks.vue';
import TasksCalendar from '../pages/TasksCalendar.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: Login },
  { path: '/tasks', component: Tasks },
  { path: '/calendar', component: TasksCalendar }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;