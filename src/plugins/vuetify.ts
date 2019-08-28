// v2.0
import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import en from 'vuetify/src/locale/pl';
import fr from 'vuetify/src/locale/pl';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  lang: {
    locals: {en, fr},
    current: 'en',
  },
});
