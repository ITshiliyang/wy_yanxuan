import Vue from 'vue'
import 'lib-flexible/flexible'

import App from './App'
import './mock/mock-server'
import router from './router'
import store from './store/store'


new Vue({
  el: '#app',
  template: '<App/>',
  render: h => h(App),
  router,
  store
})
