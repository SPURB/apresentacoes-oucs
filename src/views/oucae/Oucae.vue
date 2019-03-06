<template lang='pug'>
#Oucae
	.eg-slideshow
		slide(enter='fadeIn' leave='zoomOut').capa
			div.wrap
				main
					h1 Operação Urbana Consorciada Água Espraiada
					h2 Registro de Balanço<br> Gestão 2017–2018
				footer
					p <b>SP Urbanismo - Diretoria de Gestão das Operações Urbanas</b>
					p Dezembro/2018
</template>

<script>
import eagle from 'eagle.js'
export default {
	name: 'Oucae',
	mixins: [ eagle.slideshow ]
}
</script>

<style lang='scss' scoped>
#Oucae {
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
	.capa {
		z-index: 0;
		background-color: #f90;
		background-image: url('~/img/oucae/0.jpg');
		background-position: center center;
		background-size: cover;
		background-blend-mode: multiply;
		div.wrap {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100vw;
			height: 100vh;
			background-color: transparent;
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
				z-index: -1;
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
	}
}
</style>
