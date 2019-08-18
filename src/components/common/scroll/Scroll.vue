<template>
  <!-- ref如果绑定在组件中的，那么通过this.$refname获取的是一个组件对象 -->
  <!-- ref 如果绑定在普通的元素中，那么通过this.$refname获取到的是一个元素对象 -->
  <div class="wrapper" ref='wrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {

  name: 'scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  // 组件挂在完引用
  mounted() {
    // 默认情况下BScroll是不可以实时的监听滚动位置的
    // probe侦测
    // 0,1 都是不侦测实时位置
    // 2： 在手指滚动的过程中侦测，手指离开后的惯性滚动过程中不侦测
    // 3： 只要是滚动，都侦测
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    }),

    // 2. 监听滚动的位置
    this.scroll.on('scroll',(position) => {
      // consoel.log(position)

      // 将数据组件弄出去
      this.$emit('scroll',position)
    })

    // 3. 监听上拉事件
    this.scroll.on('pullingUp',() => {
      // console.log('上拉加载更多')
      this.$emit('pullingUp')
    })

  },
  methods: {
    scrollTo(x,y,time=300) {
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    }

  }
}
</script>

<style scoped>
</style>
