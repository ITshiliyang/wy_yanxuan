<template>
  <div class="ItemHeader">
    <p>{{title}}</p>
    <div v-show="moreFlag">
      <p>更多</p>
      <i class="iconfont icon-right"></i>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      moreFlag: Boolean
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ItemHeader
    width 100%
    height 100px
    padding 0 30px
    box-sizing border-box
    p
      font-size 32px
      line-height 100px
      float left
    div
      float right
      p
        font-size 26px
      i
        font-size 24px
        line-height 100px
</style>
