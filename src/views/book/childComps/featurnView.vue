<template>
 	<div class="feaBox">
 		<a href="https://act.mogujie.com/zzlx67">
 			<img src="~assets/img/home/recommend_bg.jpg" alt="">
 		</a>
 	</div>
</template>

<script>
	export default {
		name: 'FeaturnView',
		props: { //第一定义要传递的参数名
			
		},
		data() {
			return {

			}
		}

	}
</script>

<style scoped>
	.feaBox{
		display: flex;
		border-bottom: 10px solid #f6f6f6;
	}
	.feaBox a,.feaBox img {
		width: 100%;
		height: 100%;
	}
</style>
