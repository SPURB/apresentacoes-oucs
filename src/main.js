import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import './registerServiceWorker'

import Eagle, { Options } from 'eagle.js'
import 'eagle.js/dist/eagle.css'
import hljs from 'highlight.js'
Vue.use(Eagle)
Options.hljs = hljs

Vue.config.productionTip = false

new Vue({
	router,
	// store,
	render: h => h(App)
}).$mount('#app')
