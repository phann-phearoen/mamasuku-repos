import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import store from './store/index';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';

import BaseTitle from './components/base/BaseTitle.vue';
import TheFooter from './components/TheFooter.vue';
import YoyakuForm from './components/YoyakuForm.vue';
import Home from './components/Home.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/vue-pages/', redirect: '/vue-pages/home'},
        { path: '/vue-pages/home', component: Home },
        { path: '/vue-pages/contact', component: YoyakuForm }

    ],
});

const app = createApp(App).use(Quasar, quasarUserOptions);

app.component('base-title', BaseTitle);
app.component('the-footer', TheFooter);

app.use(store);
app.use(router);

app.mount('#app');
