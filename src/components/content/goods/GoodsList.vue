<template>
  	<div class="goodsList">
  		<!-- <goods-list-item /> -->
  		<goods-list-item v-for='(item,index) in goods' :key='index' :good-item='item' />
  	</div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  components: {
  	GoodsListItem
  },
  props: {
  	goods: {
  		type: Array,
  		default() {
  			return []
  		}
  	}
  },
}
</script>

<style scoped>
  .goodsList {
    display: inline-block;
  }
</style>
