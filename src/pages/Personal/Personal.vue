<template>
  <div class="personalContainer">
    <PersonalHeader/>
    <div class="personalContent">
      <img class="title" src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"></img>
      <button class="phoneLogin" @click="$router.push('/phonelogin')">
        <i class="iconfont icon-phone"></i>
        <span>手机号码登录</span>
      </button>
      <button class="emailLogin"  @click="$router.push('/emaillogin')">
        <i class="iconfont icon-Email"></i>
        <span>邮箱账号登录</span>
      </button>
      <div class="registerWrap">
        <span>手机号快捷注册</span>
        <i class="iconfont icon-right"></i>
      </div>
    </div>
    <div class="personalFooter">
      <div class="wxWrap">
        <i class="iconfont icon-552cd5c76f532"></i>
        <span>微信</span>
      </div>
      <div class="qqWrap">
        <i class="iconfont icon-qq"></i>
        <span>QQ</span>
      </div>
      <div class="wbWrap">
        <i class="iconfont icon-552cd5bdeaada"></i>
        <span>微博</span>
      </div>
    </div>
  </div>
</template>

<script>
  import PersonalHeader from '../../components/PersonalHeader/PersonalHeader'
  export default {
    components: {
      PersonalHeader
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personalContainer
    width 100%
    height 100%
    position relative
    .personalContent
      width 100%
      box-sizing border-box
      padding 0 40px
      position absolute
      top 88px
      display flex
      flex-direction column
      justify-content center
      align-items center
      .title
        height 90px
        margin 160px 0
      .phoneLogin
        width 100%
        height 90px
        margin-bottom 32px
        background-color #b4282d
        border 1px solid #b4282d
        color #fff
        display flex
        justify-content center
        align-items center
        i
          display flex
          width 40px
          height 40px
          margin-right 16px
          color #fff
          justify-content center
          margin-top 4px
          &:before
            width 40px
            height 40px
            display block
            transform scaleY(0.85)
            font-size 40px
            line-height 40px
      .emailLogin
        width 100%
        height 90px
        margin-bottom 32px
        border 1px solid #b4282d
        color #b4282d
        background-color transparent
        display flex
        justify-content center
        align-items center
        i
          display flex
          width 40px
          height 40px
          margin-right 16px
          color #b4282d
          justify-content center
          margin-top 4px
          &:before
            width 40px
            height 40px
            display block
            transform scale(.8)
            font-size 40px
            line-height 40px
      .registerWrap
        display flex
        justify-content center
        align-items center
        span
          font-size 28px
        i
          display block
          width 28px
          height 28px
          margin 0 16px 0 4px
          color #333
          &:before
            display block
            font-size 28px
            line-height 28px
    .personalFooter
      width 100%
      position absolute
      bottom 1.06667rem
      left 0
      display flex
      justify-content center
      div
        padding 0 40px
        border-right 1px solid #979797
        display flex
        &:last-child
          border 0
        &.qqWrap
          i
            font-size 32px
        i
          display block
          width 40px
          height 40px
          line-height 40px
          font-size 40px
          color #7F7F7F
          &:before
            display block
        span
          display block
          font-size 28px
          line-height 40px
          color #7F7F7F
          font-family '华文细黑'
  strong
    zoom 1
</style>
