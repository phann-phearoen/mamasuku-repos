import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { registerScrollSpy } from 'vue3-scroll-spy';

import App from './App.vue'
import store from './store/index';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';

import BaseTitle from './components/base/BaseTitle.vue';
import TheFooter from './components/TheFooter.vue';
import YoyakuForm from './components/YoyakuForm.vue';
import Home from './components/Home.vue';
import BtnToggleMore from './components/base/BtnToggleMore.vue';
import BtnSend from './components/base/BtnSend.vue';
import Douga from './components/Douga.vue';
import Soudan from './components/Soudan.vue';
import ToiAwase from './components/ToiAwase.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/vue-pages/home'},
        { path: '/vue-pages/', redirect: '/vue-pages/home'},
        { path: '/vue-pages/home', component: Home },
        { path: '/vue-pages/contact', component: YoyakuForm },
        { path: '/vue-pages/home/douga', component: Douga},
        { path: '/vue-pages/home/soudan', component: Soudan },
        { path: '/vue-pages/home/inquiry', component: ToiAwase }

    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
    },
});

const app = createApp(App).use(Quasar, quasarUserOptions);

app.component('base-title', BaseTitle);
app.component('the-footer', TheFooter);
app.component('toggle-more', BtnToggleMore);
app.component('btn-send', BtnSend);

registerScrollSpy(app);

app.use(store);
app.use(router);

app.mount('#app');
