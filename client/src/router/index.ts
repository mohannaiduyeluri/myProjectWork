import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Contact from '../pages/Contact.vue';
import Login from '../pages/Login.vue';
import Tasks from '../pages/Tasks.vue';

const routes: RouteRecordRaw[] = [
	{ path: '/', component: Login },
	{ path: '/tasks', component: Tasks },
	{ path: '/contact', component: Contact },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
