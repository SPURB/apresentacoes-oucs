<template>
	<div id="Oucab">
		<div class="eg-slideshow">
			<slide class="s1" enter="fadeInRight" leave="fadeOutLeft">
					<ul class="linha">
						<li v-for="evento in eventos" :class="evento.tipo">
							<div class="ano">
								<span>{{ evento.nome }}</span>
							</div>
							<ul class="noAno">
								<li v-for="eventoNoAno in evento.pontos" :class="{ destaque: eventoNoAno.destaque, outer: eventoNoAno.outer }">
									<div class="titulo" v-html="eventoNoAno.cont"></div>
									<div class="complemento">
										{{ eventoNoAno.comp }}
									</div>
								</li>
							</ul>
						</li>
					</ul>
			</slide>
			<slide class="s2" enter="fadeIn" leave="fadeOut">
				<section class="grafico" :class="{ comtitulo: grafico1.titulo }">
					<caption class="titulo" v-if="grafico1.titulo">
						<h1>{{ grafico1.titulo }}</h1>
						<h2 v-if="grafico1.subtitulo">{{ grafico1.subtitulo }}</h2>
					</caption>
					<ul class="xAxis">
						<li v-for="conjunto in grafico1.x">
							<div class="barra" :style="{ height: 'calc((100% / ' + grafico1.y[grafico1.y.length-1] + ') * ' + conjunto.taxa + ')' }">
								<span>{{ num(conjunto.taxa) }}</span>
							</div>
							<caption>
								{{ conjunto.categoria }}
							</caption>
						</li>
						<caption class="legenda">{{ grafico1.legendaX }}</caption>
					</ul>
					<ul class="yAxis">
						<li v-for="step in grafico1.y" :style="{ height: 'calc(100% / ' + (grafico1.y.length-1) + ')' }"><span>{{ num(step) }}</span></li>
						<caption class="legenda">{{ grafico1.legendaY }}</caption>
					</ul>
					<div class="sticker">
						Total
						<span>83</span>
						propostas
					</div>
				</section>
				<section class="grafico" :class="{ comtitulo: grafico2.titulo }">
					<caption class="titulo" v-if="grafico2.titulo">
						<h1>{{ grafico2.titulo }}</h1>
						<h2 v-if="grafico2.subtitulo">{{ grafico2.subtitulo }}</h2>
					</caption>
					<ul class="xAxis">
						<li v-for="conjunto in grafico2.x">
							<div class="barra" :style="{ height: 'calc((100% / ' + grafico2.y[grafico2.y.length-1] + ') * ' + conjunto.taxa + ')' }">
								<span>{{ num(conjunto.taxa) }}</span>
							</div>
							<caption>
								{{ conjunto.categoria }}
							</caption>
						</li>
						<caption class="legenda">{{ grafico2.legendaX }}</caption>
					</ul>
					<ul class="yAxis">
						<li v-for="step in grafico2.y" :style="{ height: 'calc(100% / ' + (grafico2.y.length-1) + ')' }"><span>{{ num(step) }}</span></li>
						<caption class="legenda">{{ grafico2.legendaY }}</caption>
					</ul>
				</section>
			</slide>
			<slide class="s3" enter="fadeIn" leave="fadeOut" :steps="mapa.conjunto1.pontos.length + 1">
				<main class="wrapper">
					<div class="base">
						<img src="~@/assets/oucab/0.jpg">
						<div class="ponto" :class="{ ativo: step == mapa.conjunto1.pontos.indexOf(ponto) + 2 }" v-for="ponto in mapa.conjunto1.pontos" :style="{ left: ponto.coordX + '%', top: ponto.coordY + '%' }">
							<span class="legenda" :class="tipoLegenda(ponto.legenda)" :style="{ backgroundColor: ponto.legenda }">{{ ponto.legenda }}</span>
						</div>
					</div>
					<aside>
						<section class="detalhes">
							<div v-if="step <= 1">
								<kbd>➔</kbd>
							</div>
							<template v-for="ponto in mapa.conjunto1.pontos">
								<ul :class="{ ativo: step == mapa.conjunto1.pontos.indexOf(ponto) + 2 }">
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
			</slide>
		</div>
	</div>
</template>

<script>
import obj from '@/api/oucab'
import eagle from 'eagle.js'
export default {
	name: 'Oucab',
	data () {
		return {
			eventos: obj.linhadotempo,
			grafico1: obj.grafico1,
			grafico2: obj.grafico2,
			mapa: obj.mapa1
		}
	},
	methods: {
		num (raw) {
			let str = raw.toString()
			let out
			if (str.length < 4) {
				out = str
			} else if (str.length >= 4 && str.length < 7) {
				if (raw % 1000 === 0) {
					out = str.substring(0, (str.length - 3)) + ' mil'
				} else {
					out = str.substring(0, (str.length - 3)) + '.' + str.substring((str.length - 3), str.length)
				}
			} else if (str.length >= 7) {
				if (raw % 100000 === 0) {
					if (raw % 1000000 === 0) {
						out = str.substring(0, (str.length - 6)) + ' mi'
					} else {
						out = str.substring(0, (str.length - 6)) + ',' + str.substring((str.length - 6), (str.length - 5)) + ' mi'
					}
				} else if (raw % 1000 === 0) {
					out = str.substring(0, (str.length - 6)) + '.' + str.substring((str.length - 6), (str.length - 3)) + 'mil'
				} else {
					out = str.substring(0, (str.length - 6)) + '.' + str.substring((str.length - 6), (str.length - 3)) + '.' + str.substring((str.length - 3), str.length)
				}
			}
			return out
		},
		tipoLegenda (str) {
			let classe
			if (str.substring(0,1) === '#') {
				classe = 'cor'
			} else if (str.substring(0,4) === 'lin_' ) {
				classe = 'linha'
			} else {
				classe = 'num'
			}
			return classe
		}
	},
	mixins: [ eagle.slideshow ]
}
</script>

<style lang='scss' scoped>
.eg-slideshow{
	background-color: #FFF;
	font-family: 'Roboto';
}
.eg-slide {
	background-position: center;
	background-size: cover;
}
.eg-slide-content {
	margin: 0;
}
.s1 {
	* { box-sizing: border-box; }
	ul.linha {
		list-style-type: none;
		padding: 0;
		margin-top: 0;
		height: 2px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		background-color: #777;
		transform: translateY(50vh);
		li {
			display: inline-flex;
			flex-direction: column-reverse;
			flex-wrap: nowrap;
			justify-content: flex-start;
			height: 50vh;
			max-width: 240px;
			margin: 0;
			transform: translateY(calc(-50vh + 30px));
			&:first-child { margin-left: 10vw; }
			&:last-child { margin-right: 10vw; }
			.ano span {
				display: inline-block;
				font-size: 18px;
				text-align: center;
				width: 60px;
				line-height: 60px;
				border-radius: 100%;
				box-shadow: 0 0 0 8px #FFF;
				transform: translateX(-8px);
			}
		}
		li:nth-child(2n) {
			margin-top: calc(50vh - 1px);
			flex-direction: column;
			justify-content: start;
			transform: translateY(calc(-50vh - 30px));
		}
		li ul.noAno {
			padding: 0;
			li {
				display: block;
				font-size: 14px;
				line-height: 140%;
				margin: 20px 0;
				padding: 0 8px 0 0;
				height: auto;
				transform: none;
				opacity: .4;
				div.complemento {
					padding-top: 4px;
					font-size: small;
					color: #777;
				}
				&.destaque { opacity: 1; }
				&.outer {
					div.titulo {
						color: initial;
						font-size: unset;
					}
				}
			}
		}
		li.cinza-pos {
			.ano span {
				color: #FFF;
				background-color: #777;
			}}
		li.cinza-neg {}
		li.laranja {
			.ano span {
				color: #FFF;
				background-color: #ff9900;
			}
			ul.noAno {
				div.titulo {
					color: #ff9900;
					font-size: 130%;
					line-height: 140%;
				}
			}
		}
	}
}
.s2 {
	position: relative;
	* { box-sizing: border-box; }
	section.grafico {
		position: relative;
		height: 50vh;
		width: auto;
		padding: 80px 80px 80px 80px;
		caption.titulo {
			position: absolute;
			width: calc(100% - 160px);
			top: 0;
			padding-top: 60px;
			h1 {
				font-size: 20px;
				margin: 0;
			}
			h2 {
				font-size: 14px;
				font-weight: normal;
				color: #777;
				margin: 0;
			}
		}
		ul {
			margin: 0;
			caption.legenda {
				font-size: 10px;
				font-weight: bold;
				text-transform: uppercase;
			}
		}
		ul.xAxis {
			position: absolute;
			top: 80px;
			bottom: 80px;
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			list-style-type: none;
			padding: 0 20px;
			width: calc(100% - 160px);
			max-height: 100%;
			li {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: center;
				padding: 0 4px;
				min-width: 20px;
				max-width: 80px;
				width: 100%;
				position: relative;
				div.barra {
					display: inline-flex;
					justify-content: center;
					width: 100%;
					background-color: rgba(255,153,0,.8);
					span {
						font-size: 16px;
						line-height: 16px;
						height: 16px;
						transform: translateY(-20px);
					}
				}
				caption {
					position: absolute;
					bottom: -20px;
					font-size: 12px;
					color: #777;
					line-height: 12px;
					max-width: 100%;
				}
			}
			& caption.legenda {
				position: absolute;
				bottom: -16px;
				right: 0;
			}
		}
		ul.yAxis {
			display: flex;
			flex-direction: column-reverse;
			justify-content: space-between;
			list-style-type: none;
			padding: 0;
			width: 100%;
			height: 100%;
			border-top: 1px solid #E0E0E0;
			li {
				display: flex;
				border-bottom: 1px solid #E0E0E0;
				font-size: 12px;
				color: #777;
				padding: 4px 0 8px 0;
			}
			li:first-child { display: none; }
			& caption.legenda {
				text-align: left;
				height: 0;
				transform: translateY(-16px);
			}
		}
		div.sticker {
			position: absolute;
			top: 200px;
			left: 120px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 8px 12px;
			font-size: 14px;
			background-color: #FFF;
			border-radius: 10px;
			transform: rotate(-5deg);
			box-shadow: 0 4px 4px rgba(0, 0, 0, .4);
			span {
				font-size: 28px;
				color: #ff9900;
				font-weight: bold;
			}
		}
		&.comtitulo {
			padding: 160px 80px 80px 80px;
			ul.xAxis { top: 160px; }
		}
	}
}
.s3 {
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
						transform: translate(-50%, -50%) scale(2);
						background: #777;
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
			section.detalhes {
				display: flex;
				align-items: center;
				flex-direction: row;
				height: 100%;
				padding: 48px;
				& > div {
					width: 100%;
					text-align: center;
					kbd {
						display: inline-flex;
						justify-content: center;
						align-items: center;
						width: 120px;
						height: 120px;
						border-radius: 10px;
						font-size: 80px;
						border: 10px solid #FFF;
						color: #FFF;
						animation: pisca ease-in-out infinite 2s;
						@keyframes pisca {
							0% { opacity: 1; }
							25% { opacity: 0; }
							100% { opacity: 1; }
						}
					}
				}
				ul {
					list-style-type: none;
					padding: 0;
					margin: 0;
					max-width: 0;
					width: 100%;
					overflow: hidden;
					opacity: 0;
					color: #FFF;
					caption {
						font-size: 0;
						font-weight: bold;
						width: 100%;
						margin: 0 0 40px 0;
						text-align: left;
					}
					li {
						margin-bottom: 12px;
						font-size: 0;
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
						max-width: 100%;
						opacity: 1;
						caption { font-size: 36px; }
						li {
							span.key { font-size: 16px; }
							span.value { font-size: 20px; }
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
