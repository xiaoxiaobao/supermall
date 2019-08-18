<template>
  	<tabber>
      <!-- 里面是tabber的插件 -->

  		<tabber-item path='/book' activeColor='blue'>
        <!-- 这里里面是tabber-item 的插件 -->
  			<img slot='item-icon' src="~assets/img/book1.png" alt="">
  			<img slot="item-icon-active" src="~assets/img/book2.png" alt="">
   			<div slot='item-text'>首页</div>
        <!-- 这里里面是tabber-item 的插件 -->
  		</tabber-item>

  		<tabber-item path='/find' activeColor='blue'>
        <!-- 这里里面是tabber-item 的插件 -->
  			<img slot='item-icon' src="~assets/img/find1.png" alt="">
  			<img slot="item-icon-active" src="~assets/img/find2.png" alt="">
   			<div slot='item-text'>发现</div>
        <!-- 这里里面是tabber-item 的插件 -->
  		</tabber-item>

  		<tabber-item path='/msg' activeColor='blue'>
        <!-- 这里里面是tabber-item 的插件 -->
  			<img slot='item-icon' src="~assets/img/msg1.png" alt="">
  			<img slot="item-icon-active" src="~assets/img/msg2.png" alt="">
   			<div slot='item-text'>信息</div>
        <!-- 这里里面是tabber-item 的插件 -->
  		</tabber-item>

  		<tabber-item path='/menu' activeColor='blue'>
        <!-- 这里里面是tabber-item 的插件 -->
  			<img slot='item-icon' src="~assets/img/menu1.png" alt="">
  			<img slot="item-icon-active" src="~assets/img/menu2.png" alt="">
   			<div slot='item-text'>菜单</div>
        <!-- 这里里面是tabber-item 的插件 -->
  		</tabber-item>

      <!-- 里面是tabber的插件 -->

  	</tabber>
</template>
<script>
import tabber from 'components/common/tabber/tabber.vue';
import tabberItem from 'components/common/tabber/tabberItem.vue';
export default {
  name: 'MainTabBar',
  components: {
  	tabber,
  	tabberItem
  }
}

</script>
<style>

</style>
