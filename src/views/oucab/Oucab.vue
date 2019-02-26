<template>
	<div id="Oucab">
		<div class="eg-slideshow">
			<slide class="s1">
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
			<slide class="s2">
				<section class="grafico">
					<ul class="xAxis">
						<li v-for="conjunto in grafico.x">
							<div class="barra" :style="{ height: 'calc((100% - 20px) / 15 *' + conjunto.propostas + ')' }">
								<span>{{ conjunto.propostas }}</span>
							</div>
							<caption>
								{{ conjunto.ano }}
							</caption>
						</li>
					</ul>
					<ul class="yAxis">
						<li v-for="step in grafico.y">{{ step.taxa }}</li>
					</ul>
				</section>
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
			grafico: obj.grafico
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
	section.grafico {
		position: relative;
		height: 100vh;
		// background-color: yellow;
		padding: 40px;
		box-sizing: border-box;
		ul {
			margin: 0;
		}
		ul.yAxis {
			list-style-type: none;
			padding: 0;
			width: 100%;
			display: flex;
			flex-direction: column-reverse;
			justify-content: space-between;
			height: 100%;
			li {
				display: block;
				border-bottom: 1px solid #BDBDBD;
				font-size: 14px;
				line-height: 20px;
			}
		}
		ul.xAxis {
			position: absolute;
			bottom: 16px;
			left: 80px;
			list-style-type: none;
			padding: 0;
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			width: calc(100% - 120px);
			height: calc(100vh - 80px + 4px);
			// background-color: rgba(120, 46, 30, .2);
			li {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				padding: 0 8px;
				div.barra {
					display: inline-block;
					width: 100%;
					min-width: 80px;
					background-color: red;
					position: relative;
					span {
						position: absolute;
						text-align: center;
						font-size: 14px;
						width: 100%;
						top: -20px;
					}
				}
				caption {
					margin-top: 8px;
					font-size: 14px;
				}
			}
		}
	}
}
.tres{ background-image: url('~@/assets/oucab/14.jpg') }
</style>
