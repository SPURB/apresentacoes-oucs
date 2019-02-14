<template lang='pug'>
#Oucae
	.eg-slideshow
		slide(enter='fadeInLeft' leave='fadeOut')
			h1 1
		slide(enter='fadeInRight' leave='fadeOut')
			h1 2
		slide(enter='fadeInUp' leave='fadeOut')
			h1 3
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
		background-color:white
	}
}
</style>
