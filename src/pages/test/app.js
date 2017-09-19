import Vue from 'vue';
import App from './app.vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import  ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import sample from 'components/test/sample.vue';




Vue.use(Router);
Vue.use(Vuex);
Vue.use(ElementUI);

//define the router
const router = new  Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: sample
    }
  ]
});
//
// const store = new Vuex.Store({
//   state: {
//     isLogin: false,
//     accessToken: '',
//     loginName: '',
//   },
//   mutations: {
//     login (state){
//       state.isLogin = true;
//     },
//     logout (state){
//       state.isLogin = false;
//     },
//     setAccessToken (state, userInfo){
//       state.accessToken = userInfo.token;
//       state.loginName = userInfo.loginName;
//     }
//   }
// })
//
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!store.state.isLogin) {
//       next({
//         name: 'login'
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })



new Vue({
  el: '#app',
  render: h => h(App),
	router
})
