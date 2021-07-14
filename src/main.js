import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';

import BaseTitle from './components/BaseTitle.vue';
import TheFooter from './components/TheFooter.vue';

const app = createApp(App).use(Quasar, quasarUserOptions);

app.component('base-title', BaseTitle);
app.component('the-footer', TheFooter);

app.use(store);

app.mount('#app');
