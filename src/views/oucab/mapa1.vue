<template>
	<div id="s04">
		<template>
			<main class="wrapper">
				<div class="base">
					<img :src="imgurl(mapa.conjunto1.base)">
					<div class="ponto" :class="{ ativo: step == mapa.conjunto1.pontos.indexOf(ponto) + 2 }" v-for="ponto in mapa.conjunto1.pontos" :style="{ left: ponto.coordX + '%', top: ponto.coordY + '%' }">
						<span class="legenda" :class="tipoLegenda(ponto.legenda)" :style="{ backgroundColor: ponto.legenda }">{{ ponto.legenda }}</span>
					</div>
				</div>
				<aside>
					<section class="titulo">
						<h2>Mapa</h2>
						<h1>{{ mapa.conjunto1.caption }}</h1>
					</section>
					<section class="detalhes">
						<div :class="{ ativo: step <= 1 }">
							<kbd>➔</kbd>
						</div>
						<template v-for="ponto in mapa.conjunto1.pontos">
							<ul :class="{ ativo: step == mapa.conjunto1.pontos.indexOf(ponto) + 2 }">
								<div class="imagens">
									<img v-for="imagem in ponto.imagens" :src="imgurl(imagem.nome)" :alt="imagem.alt">
								</div>
								<caption>{{ ponto.titulo }}</caption>
								<li v-for="par in ponto.info_pares">
									<span class="key">{{ Object.keys(par).toString() }}</span>
									<span class="value">{{ Object.values(par).toString() }}</span>
								</li>
							</ul>
						</template>
					</section>
					<section class="legenda">
						<ul v-for="conjunto in mapa">
							<caption>{{ conjunto.nome }}</caption>
							<li>
								<ul>
									<li v-for="ponto in conjunto.pontos">
										<span class="label" :class="tipoLegenda(ponto.legenda)" :style="{ backgroundColor: ponto.legenda }">{{ ponto.legenda }}</span>
										<span class="value">{{ ponto.titulo }}</span>
									</li>
								</ul>
							</li>
						</ul>
					</section>
				</aside>
			</main>
		</template>
	</div>
</template>

<script>
import obj from '@/api/oucab'

export default {
	name: 'Mapa1',
	data () {
		return {
			mapa: obj.mapa1,
			step: 0
		}
	},
	mounted () {
		document.addEventListener('keyup', event => {
			if (event.code === 'ArrowRight') {
				if (this.step >= this.mapa.conjunto1.pontos.length + 1) {
					return false
				} else {
					this.step++
				}
			} else if (event.code === 'ArrowLeft') {
				if (this.step <= 0) {
					return false
				} else {
					this.step--
				}
			}
		})
	},
	methods: {
		tipoLegenda (str) {
			let classe
			if (str.substring(0, 1) === '#') {
				classe = 'cor'
			} else if (str.substring(0, 4) === 'lin_') {
				classe = 'linha'
			} else {
				classe = 'num'
			}
			return classe
		},
		imgurl (nomeArquivo) {
			return './img/oucab/' + nomeArquivo
		}
	}
}
</script>

<style lang='scss' scoped>
#s04 {
	main.wrapper {
		* { transition: all ease-in-out .1s; }
		position: relative;
		display: flex;
		align-items: flex-start;
		width: 100vw;
		height: 100vh;
		div.base {
			position: relative;
			padding: 0;
			height: auto;
			width: auto;
			z-index: 0;
			box-shadow: 8px 0 8px rgba(0, 0, 0, .2);
			img {
				max-width: unset;
				height: 100vh;
			}
			div.ponto {
				position: absolute;
				z-index: 1;
				max-width: 0;
				max-height: 0;
				span.legenda {
					transform: translate(-50%, -50%) scale(1);
					display: inline-block;
					vertical-align: top;
					font-size: 14px;
					font-weight: bold;
					line-height: 20px;
					height: 20px;
					min-width: 12px;
					text-align: center;
					padding: 0 4px;
					background-color: rgba(255, 255, 255, .8);
					border-radius: 10px;
					border: 1px solid #777;
					cursor: none;
					&.cor {
						color: transparent;
						letter-spacing: -1000px;
						border-color: rgba(0, 0, 0, .2);
					}
				}
				&.ativo {
					span.legenda {
						transform: translate(-50%, -50%) scale(3);
						background: rgba(0, 0, 0, .5);
						border-color: transparent;
						color: #FFF;
						&.cor {
							color: transparent;
						}
					}
					ul.detalhes { opacity: 1; }
				}
			}
		}
		aside {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 100vh;
			width: 100%;
			background: linear-gradient(#333, #777);
			section.titulo {
				padding: 16px 20px;
				h2 {
					color: #777;
					font-size: 16px;
					font-weight: normal;
					text-align: left;
					padding: 0;
					margin: 0;
				}
				h1 {
					color: #FFF;
					font-size: 20px;
					font-weight: bold;
					text-align: left;
					padding: 0;
					margin: 0;
				}
			}
			section.detalhes {
				display: flex;
				flex-direction: row;
				align-items: flex-start;
				height: 100%;
				& > div {
					align-self: center;
					max-width: 0;
					width: 100%;
					text-align: center;
					height: 130px;
					overflow: hidden;
					kbd {
						display: inline-flex;
						justify-content: center;
						align-items: center;
						width: 120px;
						height: 110px;
						border-radius: 10px;
						font-size: 80px;
						color: #777;
						background-color: #E5E5E5;
						box-shadow: 0 20px 0 #777;
						animation: aperta step-start infinite 6s;
						@keyframes aperta {
							0% { box-shadow: 0 20px 0 #777; transform: translateY(0); color: #777; background-color: #E5E5E5; }
							3% { box-shadow: 0 0 0 #777; transform: translateY(20px); color: #333; background-color: #BDBDBD; }
							20% { box-shadow: 0 20px 0 #777; transform: translateY(0); color: #777; background-color: #E5E5E5; }
							22% { box-shadow: 0 0 0 #777; transform: translateY(20px); color: #333; background-color: #BDBDBD; }
						}
					}
					&.ativo { max-width: 10000px; }
				}
				ul {
					list-style-type: none;
					padding: 0;
					margin: 0;
					width: 0;
					overflow: hidden;
					opacity: 0;
					color: #FFF;
					div.imagens {
						display: flex;
						align-items: center;
						justify-content: space-evenly;
						overflow: hidden;
						max-width: 100%;
						background-color: rgba(0, 0, 0, .2);
						padding: 10px;
						img {
							height: 100%;
							max-height: 320px;
							margin-right: 10px;
							&:last-child { margin-right: 0; }
						}
					}
					caption {
						font-size: 0;
						font-weight: bold;
						max-width: calc(100% - 40px);
						width: 100%;
						margin: 10px 0 20px 0;
						text-align: left;
						padding: 0 20px;
					}
					li {
						font-size: 0;
						padding: 0 20px;
						margin-bottom: 4px;
						&:last-child { margin-bottom: 0; }
						span.key {
							display: inline-block;
							font-size: 0;
							line-height: 28px;
							color: rgba(255, 255, 255, .4);
							text-transform: uppercase;
							margin-right: 12px;
						}
						span.value {
							font-size: 0;
							line-height: 14px;
							white-space: nowrap;
						}
					}
					&.ativo {
						width: 100%;
						opacity: 1;
						caption { font-size: 26px; }
						li {
							span.key { font-size: 14px; }
							span.value { font-size: 18px; }
						}
					}
				}
			}
			section.legenda {
				font-size: 14px;
				line-height: 16px;
				background-color: #FFF;
				padding: 16px 20px;
				& > ul {
					list-style-type: none;
					padding: 0;
					margin: 0 0 20px 0;
					&:last-child { margin-bottom: 0; }
					caption {
						font-weight: bold;
						width: 100%;
						text-align: left;
						margin: 0 0 4px 0;
						line-height: initial;
					}
					li {
						ul {
							list-style-type: none;
							padding: 0;
							li {
								display: flex;
								flex-direction: row;
								align-items: center;
								margin-bottom: 8px;
								&:last-child { margin-bottom: 0; }
								span.label {
									display: inline-block;
									height: 14px;
									line-height: 14px;
									min-width: 6px;
									padding: 0 4px;
									text-align: center;
									font-size: 10px;
									border: 1px solid #777;
									border-radius: 7px;
									margin-right: 6px;
									&.cor {
										color: transparent;
										letter-spacing: -1000px;
										border-color: rgba(0, 0, 0, .2);
									}
								}
								span.value {
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
