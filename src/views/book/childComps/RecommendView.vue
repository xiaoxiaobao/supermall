<template>
 	<div class="recBox">
 		<div class="smallBox" v-for='(item,index) in recommends' :key='index'>
 			<a :href="item.link">
 				<img :src="item.image" alt="">
 				<div>{{item.title}}</div>
 			</a>
 		</div>
 	</div>
</template>

<script>
	export default {
		name: 'RecommendView',
		props: { //第一定义要传递的参数名
			recommends: {
				type: Array, // 传递进来的类型
				default() {
					return []
				}
			}
		},
		data() {
			return {

			}
		}

	}
</script>

<style>
	.recBox{
		width: 100%;
		display: flex;
		font-size: 15px;
		border-bottom: 10px solid #f6f6f6;
		padding: 9px 0;
	}
	.smallBox{
		flex: 1;
		text-align: center;
	}
	.smallBox img {
		width: 65px;
		height: 65px;
		margin: 15px 3px 8px;
		
	}
</style>
