import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
Vue.config.productionTip = false

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue')
	},
	{
		path: '/oucab',
		name: 'Oucab',
		component: () => import(/* webpackChunkName: "Oucab" */ './views/oucab/Oucab.vue'),
		meta: {
			title: 'Operação Urbana Consorciada Água Branca',
			description: 'Apresentação da OUC Água Branca',
			autor: 'SP URBANISMO | DIRETORIA DE GESTÃO DAS OPERAÇÕES URBANAS',
			data: '2019-02'
		}
	},
	{
		path: '/oucae',
		name: 'Oucae',
		component: () => import(/* webpackChunkName: "Oucae" */ './views/oucae/Oucae.vue'),
		meta: {
			title: 'Operação Urbana Consorciada Água Espraiada',
			description: 'Registro de balanço da OUC Água Espraiada',
			autor: 'SP URBANISMO | DIRETORIA DE GESTÃO DAS OPERAÇÕES URBANAS',
			data: '2018-12'
		}
	}
]

export default new Router({ routes })
