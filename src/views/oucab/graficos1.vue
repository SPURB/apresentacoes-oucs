<template>
	<div id="s03">
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
	</div>
</template>

<script>
import obj from '@/api/oucab'

export default {
	name: 'Graficos1',
	data () {
		return {
			grafico1: obj.grafico1,
			grafico2: obj.grafico2
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
		}
	}
}
</script>

<style lang='scss' scoped>
#s03 {
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
				font-size: 16px;
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
			padding: 0 20px 0 40px;
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
					bottom: -24px;
					font-size: 16px;
					color: #777;
					line-height: 16px;
					max-width: 100%;
				}
			}
			& caption.legenda {
				position: absolute;
				bottom: -24px;
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
				font-size: 16px;
				color: #777;
				padding: 4px 0 8px 0;
			}
			li:first-child { display: none; }
			& caption.legenda {
				text-align: left;
				height: 0;
				transform: translateY(-24px);
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
</style>
