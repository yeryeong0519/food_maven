import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB9qQKbNic7JdZEKRYNgG7EOqYDrN5EqFY',
    libraries: 'places', // 필요한 라이브러리를 선택적으로 추가할 수 있습니다.
  },
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
