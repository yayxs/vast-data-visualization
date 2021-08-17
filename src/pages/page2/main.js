import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
import '@/styles/index.scss';
import '@/libs/index';
new Vue({
  render: (h) => h(App),
}).$mount('#app');
