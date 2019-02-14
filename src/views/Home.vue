<template lang="pug">
	#Home
		.card(v-for='slideshow in slideshows')
			router-link(:to='slideshow.path' @click.native="click")
				.embeddeds
					component(
						:is="slideshow.component", embedded='true',
						:keyboardNavigation='false',
						:mouseNavigation='false')
				h3 {{ slideshow.meta.name }}
				p {{ slideshow.meta.description }} | {{ slideshow.meta.data }}
</template>

<script>
export default {
	name: 'Home',
	data () {
		return {
			slideshows: []
		}
	},
	methods: {
		click: evt => evt.stopPropagation()
	},
	created () {
		this.$router.options.routes.forEach(route => {
			if (route.name !== 'Home') {
				this.slideshows.push({
					name: route.name,
					path: route.path,
					meta: route.meta,
					component: route.component
				})
			}
		})
	}
}
</script>
<style lang='scss' scoped>
.card {
	text-align: center;
	.embeddeds {
		position: relative;
		width: 150px;
		height: 120px;
		margin: 0 auto;
		border: 1px solid grey;
		overflow: hidden;
	}
}
</style>
