<template>
  <div class="personalHeader">
    <div class="personalIconWrap" @click="$router.replace('/home')">
      <i class="iconfont icon-0401zhuye"></i>
    </div>
    <div class="linkWrap">
      <a class="active" href="javascript:">网易严选</a>
    </div>
    <div class="skipIconWrap">
      <i class="iconfont icon-search"></i>
      <i class="iconfont icon-yidiandiantubiao01"></i>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personalHeader
    padding 0 28px 0 24px
    box-sizing border-box
    width 100%
    height 88px
    position relative
    background-color #fafafa
    &:after
      content ''
      background-color #d9d9d9
      width 100%
      height 1.5px
      position absolute
      bottom 0
      left 0
    .personalIconWrap
      float left
      height 100%
      i
        line-height 100px
        font-size 46px
        display block
        color inherit
    .linkWrap
      position absolute
      left 50%
      top 0
      transform translate(-50%)
      width 320px
      height 100%
      display flex
      justify-content center
      a
        font-size 44px
        font-weight bold
        line-height 100px
        padding 0 16px
        font-family '华文楷体'
        color #000
    .skipIconWrap
      float right
      height 100%
      width 141px
      i
        line-height 100px
        font-size 46px
        display block
        color inherit
        &.icon-search
          float left
        &.icon-yidiandiantubiao01
          float right
</style>
