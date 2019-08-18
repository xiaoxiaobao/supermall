<template>
	<div id="hy-swiper">
		<!-- 轮播图 -->
		<div class="swiper">
		<ul class='swiper-ul' :style='translate' @touchmove='touchmove'>
				<li class="swiper-li" @touchend='touchend' @touchstart='touchstart' v-for='(item,index) in imgArray' :key='index'>
					<img :src="item">
				</li>
			</ul>
		</div>

		<!-- 指示插槽 -->
		<slot name='indicator'></slot>

		<!-- 指示园 -->
		<!-- 外面的div是设置插件框的样式 -->
		<div class='indicator'>
			<slot name='indicator'>
				<!-- 这是是写插件的内容 -->
				<div @click='clickChange(index)' v-for='(sd,index) in indicatorItem' :key='index' class="small-indicator" :class="{action:index === mark}" ></div>
			</slot>
		</div>
	</div>
</template>

<script>

export default {
  name: 'swiper',
  components:{
    
  },
  data() {
  	return {
  		indicatorItem: 3,
  		mark: 0,// 标识
  		imgArray: [
  			'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2560681851,782932257&fm=26&gp=0.jpg',
  			'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2117735521,2105406593&fm=26&gp=0.jpg',
  			'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2841085688,808193867&fm=26&gp=0.jpg',
  			'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2560681851,782932257&fm=26&gp=0.jpg',
  			  		],
  		translate: 0,
  		moblieWidth: document.body.clientWidth,
  		moveDistance: '',
  		startDistance: 0,
  		currentDistance: 0,
  		touchEnd: 0
  	}
  },
  // 生命周期函数
  created() {
  	this.play();
  },
  methods: {

  	// 当前位置
  	currentDis(mark) {
  		const currentDistance = -mark * this.moblieWidth
  		this.currentDistance = currentDistance
  		this.translate = 'transform: translateX(' + currentDistance + 'px)'
  	},


  	// 自动轮播函数
  	autoPlay() {
  		this.mark++
  		if (this.mark === 3) {
  			this.mark = 0
  		}
  		this.currentDis(this.mark)
  	},
  	// 定时切换图片方法
  	play() {
  		// 定时器（setInterval和setTimeout区分）
  		// 参数一： 要执行的函数，参数二要执行的时间
  		this.PicTime = setInterval(this.autoPlay,3000)
  	},
  	// 鼠标点击指示点
  	clickChange(index) {
  		this.mark = index
  		this.currentDis(this.mark)
  	},

  	// 开始触摸
  	touchstart(e) {
  		clearInterval(this.PicTime)
  		this.startDistance = e.changedTouches[0].clientX
  	},

  	// 结束触摸
  	touchend() {
  		// 结束再开启自动轮播定时器
  		// const mark = this.mark
  		this.play();
  		// 现在的轮播图的位置
  		if (Math.abs(this.moveDistance) >= this.moblieWidth * 0.25) {
  			// 如果向右移
  			if (this.moveDistance < 0) {
  				this.mark++
  			}else if (this.moveDistance >0) {
  				this.mark--
  			}

  			if (this.mark > 2) {
  				// 滑到最右边时
  				this.mark = 0
  			}else if (this.mark < 0) {
  				// 滑到最左边时
  				this.mark = 2
  			}
  			// 滑到最右的标识归零
  			this.touchEnd = 0
  			this.currentDistance = -this.mark * this.moblieWidth
  		}
  		this.translate = 'transform: translateX(' + this.currentDistance + 'px)'
  	},

  	// 移动触摸
  	touchmove(e) {
  		// 移动距离
  		const moveDistance =  e.changedTouches[0].clientX - this.startDistance
  		this.translate = 'transform: translateX(' + (this.currentDistance + moveDistance) + 'px)'
  		this.moveDistance = moveDistance

  		// 当滑到最右边时
  		if (this.mark === 2 && this.moveDistance <= 0) {
  			this.touchEnd++
  			if (this.touchEnd === 1) {
  				this.currentDis(-1)
  				this.translate = 'transform: translateX(' + (this.currentDistance + moveDistance) + 'px)'
  			}
  		}
  	}
  }
}
</script>


<style>
	#hy-swiper {
		position: relative;
		width: 100%;
		height: 180px;
		overflow: hidden;
    margin-top: 44px;
	}
	.swiper {
		position: relative;
		width: 100%;
		height: 100%;
		background: #f40;
	}
	.indicator {
		position: absolute;
		left: 50%;
		width: 61px;
		height: 20px;
		bottom: 5px;
		transform: translateX(-50%);
	}
	.small-indicator{
		float: left;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: rgba(0,0,0,.2);
		margin-right: 8px;
		z-index: 1;
	}
	.small-indicator.action {
		background-color: green;
	}
	.small-indicator:last-child {
		margin: 0;
	}
	.swiper-ul {
		position: absolute;
		width: 100%;
		height: 100%;
		overflew: hidden;
	}
	.swiper-li {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: yellow;
		transition: all 0.4s;
	}
	.swiper-li:nth-child(1) {
		left: -100%;
	}
	
	.swiper-li:nth-child(3) {
		left: 100%;
	}
	.swiper-li:nth-child(4) {
		left: 200%;
	}
	.swiper-li img {
		width: 100%;
		height: 100%;
	}
	
</style>
