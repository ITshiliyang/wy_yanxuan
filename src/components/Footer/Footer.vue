<template>
  <div class="footerContainer" ref="footer">
    <router-link to="/home">
      <i class="iconfont icon-0401zhuye"></i>
      <p>首页</p>
    </router-link>
    <router-link to="/category">
      <i class="iconfont icon-category"></i>
      <p>分类</p>
    </router-link>
    <router-link to="/searchpic">
      <i class="iconfont icon-pic"></i>
      <p>识物</p>
    </router-link>
    <router-link to="/shopping">
      <i class="iconfont icon-yidiandiantubiao01"></i>
      <p>购物车</p>
    </router-link>
    <router-link to="/personal">
      <i class="iconfont icon-caidaniconwodehui"></i>
      <p>个人</p>
    </router-link>
  </div>
</template>

<script>
  import {GETFOOTERHEIGHT} from '../../store/mutations-type'
  export default {
    mounted () {
      this.getFooterHeight()
    },
    methods: {
      getFooterHeight () {
        const height = this.$refs.footer.offsetHeight
        this.$store.commit(GETFOOTERHEIGHT, height)
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footerContainer
    width 100%
    height 98px
    position fixed
    bottom 0
    left 0
    display flex
    background-color #fff
    a
      width 20%
      text-align center
      padding 14px
      &.router-link-active
        i
          color #b4282d
        p
          color #b4282d
      i
        color #666
        font-size 40px
      p
        color #666
        font-size 24px
        margin-top 7px
</style>
