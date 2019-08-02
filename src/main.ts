import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import '@/styles/global.css';
import '@/styles/global.scss';
import moment from 'moment';
import VueI18n from 'vue-i18n'
import vuetify from './plugins/vuetify';

Vue.filter('dateFix', (value: string) => {
  if (!value) {
    return '';
  }
  return moment(value).format('DD, MM, YYYY');
});

Vue.config.productionTip = false;
Vue.use(VueI18n)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
