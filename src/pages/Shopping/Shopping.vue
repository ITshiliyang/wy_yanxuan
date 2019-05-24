<template>
  <div class="shoppingContainer">
    <div class="shopHeader">
      <span>购物车</span>
      <a href="javascript:">领券</a>
    </div>
    <ul class="shopDetail">
      <li>
        <i class="iconfont icon-circle"></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i class="iconfont icon-circle"></i>
        <span>48小时快速退款</span>
      </li>
      <li>
        <i class="iconfont icon-circle"></i>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="shopContent">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
      <span>去添加点什么吧</span>
      <button @click.prevent="$router.replace('/personal')">登录</button>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .shoppingContainer
    width 100%
    height 100%
    background-color #f4f4f4
    position relative
    .shopHeader
      box-sizing border-box
      width 100%
      height 88px
      background-color #fff
      padding 0 30px
      display flex
      justify-content space-between
      span
        line-height 88px
        font-size 36px
      a
        line-height 88px
        font-size 30px
        margin-right 30px
        color #B4282D
    .shopDetail
      box-sizing border-box
      width 100%
      height 70px
      padding 0 30px
      display flex
      align-items center
      justify-content space-between
      li
        display flex
        align-items center
        justify-content center
        i
          width 24px
          height 24px
          display block
          transform scale(.5)
          font-size 24px
          color #666
          &:before
            display block
        span
          font-family '微软雅黑'
          color #666
    .shopContent
      width 100%
      position absolute
      top 158px
      bottom 98px
      left 0
      right 0
      height auto
      display flex
      flex-direction column
      justify-content center
      align-items center
      img
        width 248px
        height 248px
        margin-top 52px
      span
        margin -12px 0 50px
        font-size 28px
        color #999
      button
        width 480px
        height 92px
        background-color #b4282d
        color #fff
        border-radius 5px
        border 0
        font-size 28px
  strong
    zoom 1
</style>
