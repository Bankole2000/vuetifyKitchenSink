import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-scss.min';
import 'prismjs/plugins/autolinker/prism-autolinker.min';
import 'prismjs/plugins/autolinker/prism-autolinker.css';
import VueClipboard from 'vue-clipboard2';
import Prism from 'vue-prism-component';

Vue.use(VueClipboard);

Vue.component('prism', Prism);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
