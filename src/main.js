import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import Region from "./components/region.vue";
Vue.config.productionTip = false
Vue.component("Region",Region);
new Vue({
  render: h => h(App),
}).$mount('#app')
