import Vue from 'vue';
import Index from './index.vue';
// import router from "./router";
// import store from "./store";

Vue.config.productionTip = false;

import '@/styles/index.scss';

import '@/libs/index';
new Vue({
  // router,
  // store,
  render: (h) => h(Index),
}).$mount('#app');
