<template>
 	<div class="MainTab">
 		<div @click='smallTabClick(index)' class="smallTab" v-for='(item,index) in titles' :key='index' :class='{active: index === currentIndex}'>
 			<span>{{item}}</span>
 		</div>
 		
 	</div>
</template>

<script>
	export default {
		name: 'TabControl',
		props: { //第一定义要传递的参数名
			titles: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			smallTabClick(index) {
				this.currentIndex = index
				this.$emit('tabClick',index)
			}
		}

	}
</script>

<style>
	.MainTab {
		display: flex;
		width: 100%;
		height: 40px;
		margin-bottom: 10px;
		background-color: #fff;
	}
	.smallTab {
		display: flex;
		flex: 1;
		text-align: center;
		justify-content: center; /*控制所有item在main axis(主轴)上的对齐方式*/
		align-items: center;/*控制所有item在cross axis(交叉轴)的对齐方式*/
	}
	.smallTab span {
		padding: 5px;
	}
	.active {
		color: var(--color-high-text);

	}
	 .active span {
	 	border-bottom: 3px solid red;
	 }
</style>
