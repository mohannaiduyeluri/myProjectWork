import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Contact from '../pages/Contact.vue';
import Login from '../pages/Login.vue';
import Tasks from '../pages/Tasks.vue';
import CreatedTasks from '../pages/CreatedTasks.vue';
import AllTasks from '../pages/AllTasks.vue';
import Calendar from '../pages/Calendar.vue';
import AutoSearch from '../pages/AutoSearch.vue';

const routes: RouteRecordRaw[] = [
	{ path: '/', component: Login },
	{ path: '/contact', component: Contact },
	{ path: '/tasks', component: Tasks },
	{ path: '/AllTasks', component: AllTasks },
	{ path: '/CreatedTasks', component: CreatedTasks },
	{ path: '/Calendar', component: Calendar },
	{ path: '/autoSearch', component: AutoSearch },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
