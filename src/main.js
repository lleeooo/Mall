import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import toast from 'components/common/toast/index'
import lazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

Vue.use(toast)
Vue.use(lazyload,{
  loading: require('./assets/img/common/loading.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')



