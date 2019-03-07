<template>
	<div id="s01">
		<ul class="linha">
			<li v-for="evento in eventos1" :class="evento.tipo">
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
	</div>
</template>

<script>
import obj from '@/api/oucab'

export default {
	name: 'Linha1',
	data () {
		return {
			eventos1: obj.linhadotempo1
		}
	},
	methods: {
		imgurl (nomeArquivo) {
			return './img/oucab/' + nomeArquivo
		}
	}
}
</script>

<style lang='scss' scoped>
#s01 {
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
		li.cinza-neg {
			.ano span {
				color: #777;
				background-color: #CCC;
			}
		}
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
</style>
