import Vue from 'vue';
// import Vue from 'vue/dist/vue.esm.js'
import App from './app.vue';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import routes from './router.js';
import commonPop from '@/components/commonPop';

Vue.use(commonPop);
Vue.use(VueRouter);
Vue.use(vueResource);
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {
    App
  }
})
// new Vue({
//     router,
//     render: h => h(App)
//   }).$mount("#app");