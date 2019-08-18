<template>
  	<div id="tab-bar">
  		<slot></slot>
  	</div>
</template>
<script>
export default {
  name: 'tabber'
}

</script>
<style scoped>
	#tab-bar{
		width: 100%;
		display: flex;
		background: #f6f6f6;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		box-show: 0px -2px 10px rgba(100,100,100,.8);
	}
</style>
