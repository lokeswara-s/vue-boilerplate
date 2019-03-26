import Vue from 'vue';

import i18n from './lang/i18n';
import App from './app/App.vue';
import router from './routes/router';

new Vue({
    i18n,
    router,
    render:h =>h(App)
}).$mount('#root');
