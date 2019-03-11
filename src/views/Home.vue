<template lang="pug">
	#Home
		header
			button(ref='toggleViewModeBt' @click='changeViewMode($event)' title='Ver em lista' style='background: url(img/icons/toggleViewIcon.svg)')
			h1 Apresentações
			p Habilite o modo de tela cheia do seu navegador (<kbd>F11</kbd>, para Windows, ou <kbd title="Control">⌃</kbd> + <kbd title="Command">⌘</kbd> + <kbd>F</kbd>, para macOS) e selecione (com o mouse ou <kbd title="Seta esquerda">&larr;</kbd><kbd title="Seta direita">&rarr;</kbd>) uma das apresentações abaixo para começar.
		main#wrap(ref='main')
			.card(v-for='slideshow in slideshows' :title='slideshow.meta.title')
				router-link(:to='slideshow.path' @click.native="click" class='routerlink' :data-index='slideshows.indexOf(slideshow) + 1')
					.embeddeds
						component(
							:is="slideshow.component", embedded='true',
							:keyboardNavigation='false',
							:mouseNavigation='false')
					.main
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
			slideshows: [],
			kbdNavIndex: 0,
			eventHistory: [],
			toggleViewMode: 0
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
		changeViewMode (event) {
			this.$refs.main.classList.toggle('list')
			this.toggleViewMode++
			let bt = this.$refs.toggleViewModeBt
			if (this.toggleViewMode % 2 === 0) {
				bt.style.backgroundPosition = '0'
				bt.title = 'Ver em lista'
			} else {
				bt.style.backgroundPosition = '100%'
				bt.title = 'Ver em grade'
			}
		},
		navEvents () {
			document.addEventListener('keyup', event => {
				let cards = document.querySelectorAll('.routerlink')
				if (event.code === 'ArrowRight') {
					if (this.kbdNavIndex > cards.length) {
						this.kbdNavIndex = cards.length + 1
					} else {
						this.kbdNavIndex++
						this.eventHistory.push(event.code)
						Array.from(cards).map(index => {
							if (parseInt(index.dataset.index) === this.kbdNavIndex) {
								index.focus()
								index.parentNode.classList.add('kbdNav')
							} else {
								index.blur()
								index.parentNode.classList.remove('kbdNav')
							}
						})
					}
				} else if (event.code === 'ArrowLeft') {
					if (this.kbdNavIndex <= 0) {
						this.kbdNavIndex = 0
					} else {
						this.kbdNavIndex--
						this.eventHistory.push(event.code)
						Array.from(cards).map(index => {
							if (parseInt(index.dataset.index) === this.kbdNavIndex) {
								index.focus()
								index.parentNode.classList.add('kbdNav')
							} else {
								index.blur()
								index.parentNode.classList.remove('kbdNav')
							}
						})
					}
				} else if (document.activeElement !== document.body && event.code === 'Escape') {
					document.activeElement.parentNode.classList.remove('kbdNav')
					if (this.eventHistory[this.eventHistory.length - 1] === 'ArrowRight') {
						if (this.kbdNavIndex <= 0) {
							this.kbdNavIndex = 0
						} else {
							this.kbdNavIndex++
						}
					} else if (this.eventHistory[this.eventHistory.length - 1] === 'ArrowLeft') {
						if (this.kbdNavIndex > cards.length) {
							this.kbdNavIndex = cards.length + 1
						} else {
							this.kbdNavIndex--
						}
					}
				} else {
					return false
				}
				document.addEventListener('click', event => {
					if (event.target !== this.$refs.main) {
						Array.from(cards).map(index => {
							index.parentNode.classList.remove('kbdNav')
						})
					} else {
						return false
					}
				})
			})
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
	},
	mounted () {
		this.navEvents()
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
		button {
			width: 40px;
			height: 40px;
			border: 0;
			background-position: 0 0;
			transition-duration: .4s;
			transition-timing-function: linear;
			cursor: pointer;
			opacity: .4;
			&:hover { opacity: 1; }
		}
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
			a, a:link, a:visited, a:active, h1, h2, p {
				text-decoration: none;
				margin: 0;
				line-height: 120%;
			}
			.embeddeds {
				position: relative;
				width: 100%;
				height: 240px;
				overflow: hidden;
			}
			.main {
				h1 {
					font-size: 24px;
					margin: 20px 0 5px 0;
					color: #FFF;
					font-weight: normal;
				}
				h2 {
					font-size: 16px;
					margin: 0 0 20px 0;
					color: rgba(255, 255, 255, .5);
					font-weight: normal;
				}
			}
			p {
				font-size: 12px;
				margin: 5px 0 0 0;
				color: rgba(255, 255, 255, .5);
				span {
					text-transform: uppercase;
					margin-right: 2px;
					color: rgba(255, 255, 255, .3);
				}
			}
			&::before {
				display: inline-block;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(calc(-50% + 8px), -50%);
				content: '';
				box-sizing: border-box;
				border-style: solid;
				border-width: 35px 0 35px 60px;
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
			&.kbdNav {
				background-color: rgba(0, 0, 0, .4);
			}
		}
	}
	main#wrap.list {
		display: table;
		width: 100%;
		margin-top: 20px;
		.card {
			padding: 20px;
			margin-top: 0;
			margin-bottom: 0;
			a {
				display: flex;
				flex-direction: row;
				align-items: center;
				.embeddeds {
					display: inline-block;
					width: 80px;
					height: 55px;
					margin-right: 20px;
				}
				.main {
					width: 40%;
					min-width: 400px;
					h1 {
						font-size: 20px;
						font-weight: bold;
						margin: 0;
					}
					h2 { margin: 0; }
					h1, h2 {
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
				p {
					margin: 0 0 0 20px;
					span {
						display: block;
						text-transform: none;
					}
				}
			}
			&:hover {
				background-color: rgba(0, 0, 0, .4);
				.embeddeds, h1, h2, p { opacity: unset; }
				&::before { opacity: 0; }
			}
			&:nth-child(2n) {
			}
		}
	}
}
</style>
