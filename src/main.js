import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import { message1, message2 } from './data';
// import func from './func';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// func(message1);
// func(message2);
