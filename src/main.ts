import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import moment from 'moment';
import vuetify from './plugins/vuetify';
import './registerServiceWorker';
import VueI18n from 'vue-i18n';
import translations from '@/translations';

import '@/styles/global.css';
import '@/styles/global.scss';

Vue.use(VueI18n)

Vue.filter('dateFix', (value: string) => {
  if (!value) {
    return '';
  }
  return moment(value).format('DD, MM, YYYY');
});


const i18n = new VueI18n({
  locale: 'en', // set locale
  messages: translations, // set locale messages
});

Vue.config.productionTip = false;

var vm = new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');