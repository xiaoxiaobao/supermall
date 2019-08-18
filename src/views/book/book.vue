<template>
  	<div id='home'>
      <!-- 导航 -->
  		<nav-bar class='home-nav'>
  			<div slot='center'>购物街</div>
  		</nav-bar>
      
      <!-- 滚动区域 -->
      <scroll 
        class='content' 
        ref='scroll' 
        :probe-type='3' 
        @scroll='contentScroll'
        :pull-up-load='true'
        @pullingUp='loadMore'>
          <!-- 轮播图 -->
          <swiper></swiper>
          <!-- 推荐 -->
          <recommend-view :recommends='recommends' />
          <!-- 时尚 -->
          <featurn-view />
          <!-- 控制栏 -->
          <tab-control :titles='["流行","新款","精选"]' class='tab-control' @tabClick='tabClick' />
          <!-- 商品展示 -->
          <goods-list :goods="showGoods" />

      </scroll>
      
      <!-- 跳顶 -->
      <back-top @click.native='backClick' v-show='isShowBackTop' />
      
  	</div>
</template>
<script>
// 导入网络请求函数
import {getBookMultidata,getHomeGoods} from 'network/book'


// -------这是当个页面的组件-------
// 导入轮播图
import {swiper,swiperItem} from 'components/common/swiper'
// 导入推荐栏
import RecommendView from './childComps/RecommendView.vue'
// 导入时尚组件
import FeaturnView from './childComps/featurnView.vue'



// -------这是公共组件----------
// 导入导航栏
import NavBar from 'components/common/navbar/NavBar'
// 导入筛选
import TabControl from 'components/content/TabControl/TabControl'
// 导入商品组件
import GoodsList from 'components/content/goods/GoodsList'
// 导入滚动组件
import Scroll from 'components/common/scroll/Scroll'
// 导入跳转到顶部组件
import BackTop from 'components/content/backTop/BackTop'




export default {
  name: 'book',
  // 挂在组件
  components: {
    swiper,
    swiperItem,
    RecommendView,
    FeaturnView,
    GoodsList,

    NavBar,
    TabControl,
    Scroll,
    BackTop
    
  },
  data() {
  	return {
  		banners: [],
  		recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: "pop",
      isShowBackTop: false
  	}
  },
  created() {
  	// 1.请求个数据
  	this.getBookMultidata()

    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  // 计算属性
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  // 具体逻辑写在methods
  methods: {
    /**
    *事件监听相关
    */ 
    tabClick(index) {
      switch(index) {
        case 0: 
        this.currentType = 'pop'
        break
        case 1: 
        this.currentType = 'new'
        break
        case 2: 
        this.currentType = 'sell'
        break
      }
    },

    // 跳转顶部事件
    backClick() {
      this.$refs.scroll.scrollTo(0,0)
    },

    contentScroll(position) {
      // console.log(position)
      this.isShowBackTop = (-position.y) > 1000
    },

    loadMore() {
      console.log('上拉加载更多')
      this.getHomeGoods(this.currentType)
    },


    /**
    *网络请求相关
    */ 
    getBookMultidata() {
        getBookMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1
       getHomeGoods(type,page).then(res => {
          // 将获取到的数组加到对应的类型中
          this.goods[type].list.push(...res.data.list)
          // 增加页数
          this.goods[type].page += 1

          // 调用scroll里提示已经加载完成上拉加载
          this.$refs.scroll.finishPullUp()
       })
    }
  }
}
</script>
<style scoped>
  #home {
    position: relative;
    height: 100vh;
  }
	.home-nav {
		background-color: var(--color-tint);
		color: #fff;
	}

  .tab-control {
    position: sticky;
    top: 44px;
  }

  /*.content {
    margin-top: 44px;
    height: calc(100% - 93px);
    overflow: hidden;
  }*/

  .content {
     position: absolute;
     top: 44px;
     bottom: 49px;
     overflow: hidden;
  }



</style>
