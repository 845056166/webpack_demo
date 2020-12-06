import Vue from 'vue';
// import Vue from 'vue/dist/vue.esm.js'
import App from './app.vue';
import VueRouter from 'vue-router';
import routes from './router';

Vue.use(VueRouter);
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   router,
//   components: {
//     App
//   }
// })

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");