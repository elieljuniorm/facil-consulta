import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMask from 'v-mask';
import Vuelidate from 'vuelidate'
import VueSessionStorage from 'vue-sessionstorage';

Vue.use(VueSessionStorage);
Vue.use(Vuelidate);
Vue.use(VueMask);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
