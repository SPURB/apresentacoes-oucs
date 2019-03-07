<template>
	<div id="Oucab">
		<div class="eg-slideshow">
			<slide enter="fadeIn" leave="zoomOut">
				<Capa></Capa>
			</slide>
			<slide enter="fadeInRight" leave="fadeOutLeft">
				<Linha1></Linha1>
			</slide>
			<slide enter="fadeInRight" leave="fadeOutLeft">
				<Linha2></Linha2>
			</slide>
			<slide enter="slideInUp" leave="slideOutUp">
				<Graficos1></Graficos1>
			</slide>
			<slide leave="fadeOut" steps="5">
				<Mapa1></Mapa1>
			</slide>
		</div>
	</div>
</template>

<script>
import obj from '@/api/oucab'
import eagle from 'eagle.js'
import Capa from './capa.vue'
import Linha1 from './linha1.vue'
import Linha2 from './linha2.vue'
import Graficos1 from './graficos1.vue'
import Mapa1 from './mapa1.vue'

export default {
	name: 'Oucab',
	data () {
		return {
			mapa: obj.mapa1
		}
	},
	components: {
		Capa,
		Linha1,
		Linha2,
		Graficos1,
		Mapa1
	},
	mixins: [ eagle.slideshow ]
}
</script>

<style lang='scss' scoped>
.eg-slideshow{
	font-family: 'Roboto';
}
.eg-slide {
	background-position: center;
	background-size: cover;
}
.eg-slide-content {
	margin: 0;
}
</style>
