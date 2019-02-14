<template lang='pug'>
#Oucab
	.eg-slideshow
		slide(enter='fadeInDown' leave='fadeOut').um
			h1 1
		slide(enter='fadeInLeft' leave='fadeOut').dois
			h1 2
		slide(enter='fadeInRight' leave='fadeOut').tres
			h1 3
</template>

<script>
import eagle from 'eagle.js'
export default {
	name: 'Oucab',
	mixins: [ eagle.slideshow ]
}
</script>

<style lang='scss' scoped>
.eg-slideshow{
	background-color:white
}
.eg-slide {
	background-position: center;
	background-size: cover;
}
.um{ background-image: url('~@/assets/oucab/4.jpg') }
.dois{ background-image: url('~@/assets/oucab/5.png') }
.tres{ background-image: url('~@/assets/oucab/14.jpg') }
</style>
