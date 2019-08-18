<template>
  <div @click='itemClick' class="tabbar-item">
    <!--  <img src="../../assets/img/book1.png" alt="">
    <div>首页</div> -->
    <slot v-if='!isActive' name='item-icon'></slot>
    <slot v-else name='item-icon-active'></slot>
    <div :style='activeStyle'>
      <slot name='item-text'></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tabberItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  }

}

</script>
<style>
.tabbar-item {
  flex: 1;
  height: 49px;
  text-align: center;
  font-size: 14px;
}

.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

.active {
  color: red;
}

</style>
