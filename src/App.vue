<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
export default {
  name: 'app',
  // 注意是否只有一个注册组件components
  components:{
    MainTabBar
  }
}
</script>

<style scoped>
  /*如果没有scoped的话 在本来组件设置的样式 在其他组件中也会起效果*/


  @import 'assets/css/base.css';
</style>
