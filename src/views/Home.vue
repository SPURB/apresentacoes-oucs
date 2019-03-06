<template lang="pug">
	#Home
		header
			h1 Apresentações
			p Habilite o modo de tela cheia do seu navegador (<kbd>F11</kbd>, para Windows, ou <kbd title="Control">⌃</kbd> + <kbd title="Command">⌘</kbd> + <kbd>F</kbd>, para macOS) e selecione uma das apresentações abaixo para começar.
		main#wrap
			.card(v-for='slideshow in slideshows')
				router-link(:to='slideshow.path' @click.native="click")
					.embeddeds
						component(
							:is="slideshow.component", embedded='true',
							:keyboardNavigation='false',
							:mouseNavigation='false')
					h1 {{ slideshow.meta.title }}
					h2 {{ slideshow.meta.description }}
					p <span>Data</span> {{ renderDate(slideshow.meta.data) }}
					p <span>Autoria</span> {{ slideshow.meta.autor }}
			.card(v-for='slideshow in slideshows')
				router-link(:to='slideshow.path' @click.native="click")
					.embeddeds
						component(
							:is="slideshow.component", embedded='true',
							:keyboardNavigation='false',
							:mouseNavigation='false')
					h1 {{ slideshow.meta.title }}
					h2 {{ slideshow.meta.description }}
					p <span>Data</span> {{ renderDate(slideshow.meta.data) }}
					p <span>Autoria</span> {{ slideshow.meta.autor }}
			.card(v-for='slideshow in slideshows')
				router-link(:to='slideshow.path' @click.native="click")
					.embeddeds
						component(
							:is="slideshow.component", embedded='true',
							:keyboardNavigation='false',
							:mouseNavigation='false')
					h1 {{ slideshow.meta.title }}
					h2 {{ slideshow.meta.description }}
					p <span>Data</span> {{ renderDate(slideshow.meta.data) }}
					p <span>Autoria</span> {{ slideshow.meta.autor }}
			.card(v-for='slideshow in slideshows')
				router-link(:to='slideshow.path' @click.native="click")
					.embeddeds
						component(
							:is="slideshow.component", embedded='true',
							:keyboardNavigation='false',
							:mouseNavigation='false')
					h1 {{ slideshow.meta.title }}
					h2 {{ slideshow.meta.description }}
					p <span>Data</span> {{ renderDate(slideshow.meta.data) }}
					p <span>Autoria</span> {{ slideshow.meta.autor }}
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
		click: evt => evt.stopPropagation(),
		renderDate (str) {
			let a = str.substring(0, 4)
			let m = str.substring(5, 7)
			let d = str.substring(9, 11)
			if (d) {
				return d + '/' + m + '/' + a
			} else {
				return m + '/' + a
			}
		},
		goFS () {
			let el = document.documentElement
			if (el.mozRequestFullScreen) {
				console.log('fs')
			}
		}
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
#Home {
	background: linear-gradient(#222, #333);
	height: 100vh;
	width: 100vw;
	overflow: auto;
	font-family: 'Roboto';
	color: #FFF;
	* {
		box-sizing: border-box;
		transition: all ease-in-out .2s;
	}
	kbd {
		border: 1px solid #AAA;
		border-radius: 2px;
		padding: 0 3px;
		margin: 0 3px;
		vertical-align: middle;
		box-shadow: 0 2px 0 #777;
		font-size: 80%;
	}
	header {
		width: 100%;
		padding: 20px calc((100% - 1500px + 80px) / 2);
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: rgba(255, 255, 255, .1);
		h1, p { margin: 0; }
		h1 {
			margin-right: 20px;
			font-size: 24px;
			text-shadow: 0 0 4px rgba(0, 0, 0, .4);
		}
		p {
			opacity: .5;
			font-size: 14px;
		}
	}
	main#wrap {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
		max-width: 1500px;
		margin: 0 auto;
		padding: 0 0 40px 0;
		.card {
			position: relative;
			margin: 20px;
			padding: 20px 20px 14px 20px;
			cursor: pointer;
			.embeddeds {
				position: relative;
				width: 100%;
				height: 240px;
				overflow: hidden;
			}
			a, a:link, a:visited, a:active, h1, h2, p {
				text-decoration: none;
				margin: 0;
				line-height: 120%;
			}
			h1 {
				font-size: 32px;
				margin: 20px 0 5px 0;
				color: #FFF;
			}
			h2 {
				font-size: 16px;
				margin: 0 0 20px 0;
				color: rgba(255, 255, 255, .5);
				font-weight: normal;
			}
			p {
				font-size: 12px;
				margin: 5px 0 0 0;
				color: rgba(255, 255, 255, .5);
				span {
					text-transform: uppercase;
					margin-right: 2px;
					color: rgba(255, 255, 255, .2);
					font-size: 80%;
				}
			}
			&::before {
				display: inline-block;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(calc(-50% + 16px), -50%);
				content: '';
				box-sizing: border-box;
				border-style: solid;
				border-width: 70px 0 70px 120px;
				border-color: transparent transparent transparent rgba(255, 255, 255, 1);
				transition-duration: .4s;
				transition-delay: .2s;
				opacity: 0;
			}
			&:hover {
				background-color: rgba(0, 0, 0, .4);
				.embeddeds, h1, h2, p { opacity: .1; }
				&::before { opacity: 1; }
			}
			&:active {
				transform: scale(4);
				opacity: .05;
			}
		}
	}
}
</style>
