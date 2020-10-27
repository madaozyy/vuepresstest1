import Vue from 'vue'
import App from './App.vue'
import HUI from 'hui';
import 'hui/lib/hui.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(HUI);