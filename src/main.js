/* eslint-disable import/no-extraneous-dependencies */

import Vue from 'vue';
import App from './App.vue';
import VueTelInput from './components/vue-tel-input.vue';
import VueTelSelect from './components/vue-tel-select.vue';
import VueTelShow from './components/vue-tel-show.vue';

Vue.config.productionTip = false;

Vue.component('vue-tel-input', VueTelInput);
Vue.component('vue-tel-select', VueTelSelect);
Vue.component('vue-tel-show', VueTelShow);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
