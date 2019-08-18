<template>
  <div class='oneGood'>
  	<img :src="goodItem.show.img" alt="">
  	<div class="goodDetail">
  		<p class="goodTitle">{{goodItem.title}}</p>
  		<span class="price">{{goodItem.price}}</span>
  		<span class="collect">{{goodItem.cfav}}</span>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
  	goodItem: {
  		type: Object,
  		default() {
  			return {}
  		}
  	}
  },
  components:{
    
  },
  created() {
  	
  }
}
</script>

<style>
	.oneGood {
		width: 50%;
		height: 250px;
		float: left;
		margin-top: 20px;
	}
	.oneGood img{
		width: 96%;
		height: 80%;
		margin: 2%;
		border-radius: 2%;
	}
	.goodDetail {
		padding: 0 5px;
		font-size: 13px;
	}
	.goodDetail p {
		width: 100%;
		height: 14%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.goodDetail span {
		margin-right: 5px;
	}
</style>