import 'bulma';
import './assets/styles/main.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import Oruga from '@oruga-ui/oruga'
import { Autocomplete, Sidebar } from '@oruga-ui/oruga-next';

import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

createApp(App).use(Oruga).use(router).mount('#app')
