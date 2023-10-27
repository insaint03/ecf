import Vue from 'vue'
import App from './App.vue'

import Router from '@/plugins/router'
import Vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Router.Register(Vue),
  vuetify: Vuetify(Vue),
}).$mount('#app');
