<template>
	<div id="capa">
		<div class="bg" :style="{ backgroundImage: 'url(' + imgurl(capa.fundo) + ')', backgroundColor: capa.filtro }">
		</div>
		<main>
			<h1>{{ capa.titulo }}</h1>
			<h2 v-if="capa.subtitulo">{{ capa.subtitulo }}</h2>
		</main>
		<footer>
			<p v-if="capa.autoria" class="autoria">{{ capa.autoria }}</p>
			<p v-if="capa.data">{{ capa.data }}</p>
		</footer>
	</div>
</template>

<script>
import obj from '@/api/oucab'

export default {
	name: 'Capa',
	data () {
		return {
			capa: obj.capa
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
#capa {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100vw;
	height: 100vh;
	color: #FFF;
	div.bg {
		position: absolute;
		top: 0;
		left: 0;
		max-width: 100vw;
		max-height: 100vh;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-blend-mode: multiply;
		background-position: center center;
		background-size: cover;
	}
	main {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		height: 100%;
		z-index: 1;
		* {
			margin-bottom: 20px;
			&:last-of-type { margin-bottom: 0; }
		}
		h1 {
			font-size: 8vmin;
			padding: 0 40px;
			text-shadow: 0 0 8px rgba(0, 0, 0, .4);
		}
		h2 {
			font-size: 4vmin;
			padding: 0 40px;
			font-weight: normal;
			opacity: .8;
		}
	}
	footer {
		background-color: rgba(0, 0, 0, .4);
		text-align: center;
		padding: 20px;
		z-index: 1;
		p {
			font-size: 14px;
			line-height: 18px;
			margin: 0 0 4px 0;
			&:last-of-type { margin-bottom: 0; }
			opacity: .8;
			&.autoria {
				font-weight: bold;
				opacity: 1;
			}
		}
	}
}
</style>
