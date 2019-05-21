<template>
  <div class="homeHeader" ref="homeHeader">
    <div class="homeHeaderTop">
      <h1 class="logo">网易严选</h1>
      <input type="text" @click.stop="toSearch">
      <div class="placeholder" @click.stop="toSearch">
        <i class="iconfont icon-search"></i>
        <p>搜索商品,共22852款好物</p>
      </div>
      <span></span>
      <button class="loginBtn" @click.stop="login">登录</button>
    </div>
    <div class="homeScrollNav">
      <div v-show="isShow" class="navWrap" ref="navWrap">
        <ul class="navList">
          <li @click="changeNavIndex(index)" :class="{navListActive: index === navListIndex}" v-for="(item, index) in kingKongList" :key="index">{{item.text}}</li>
        </ul>
      </div>
      <div class="iconWrap" @click="isShow = !isShow">
        <i class="iconfont icon-down" ref="icon" :class="{active: !isShow}"></i>
      </div>
      <div class="upNavList" v-if="!isShow">
        <div class="upNavListHeader">
          全部频道
        </div>
        <ul class="listContent">
          <li @click="changeUpNavIndex(index)" :class="{upNavActive: index === upNavIndex}" v-for="(item, index) in kingKongList">
            {{item.text}}
          </li>
        </ul>
      </div>
      <div class="mask" v-if="!isShow"></div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {GETHOMEHEADERHEIGHT} from '../../store/mutations-type'

  export default {
    data () {
      return {
        isShow: true,
        navListIndex: 0,
        upNavIndex: 0,
      }
    },
    props: {
      kingKongList: Array
    },
    mounted () {
      this.$nextTick(() => {
        this._initNavScroll()
      })
      this.getHomeHeaderHeight()
    },
    methods: {
      getHomeHeaderHeight () {
        const height = this.$refs.homeHeader.offsetHeight
        this.$store.commit(GETHOMEHEADERHEIGHT, height)
      },
      login () {
        console.log('登录')
      },
      toSearch () {
        console.log('搜索')
      },
      _initNavScroll () {
        if (this.$refs.navWrap) {
          new BScroll('.navWrap', {
            click: true,
            scrollX: true
          })
        }
      },
      changeNavIndex (index) {
        this.navListIndex = index
      },
      changeUpNavIndex (index) {
        this.upNavIndex = index
      },

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .homeHeader
    background-color #fff
    position fixed
    top 0
    z-index 10
    width 100%
    .homeHeaderTop
      position relative
      box-sizing border-box
      width 750px
      height 88px
      padding 16px 30px
      display flex
      align-items center
      .logo
        font-family "楷体"
        font-size 40px
        margin-right 20px
        float left
      input
        width 60%
        height 56px
        border-radius 5px
        background-color #ededed
        color #333
      .placeholder
        position absolute
        display flex
        left 240px
        i
          font-size 26px
          color #666
          margin-right 10px
        p
          font-size 28px
          color #666
      .loginBtn
        font-size 24px
        width 74px
        height 40px
        border 1px solid #b4282d
        color #b4282d
        background-color #fff
        margin-left 16px
    .homeScrollNav
      position relative
      width 100%
      height 60px
      .navWrap
        float left
        width 100%
        height 100%
        .navList
          height 100%
          float left
          padding 0 190px 0 30px
          display flex
          li
            box-sizing border-box
            height 100%
            float left
            padding 0 16px
            font-size 26px
            line-height 60px
            margin-left 20px
            white-space nowrap
            &.navListActive
              border-bottom 2px solid #b4282d
              color #b4282d
            &:nth-child(1)
              margin-left 0
      .iconWrap
        position absolute
        right 0
        width 100px
        height 60px
        display flex
        justify-content center
        align-items center
        padding-left 60px
        z-index 100
        background-color #fff
        i
          font-size 30px
          transition .5s
          &.active
            transform rotate(180deg)
      .upNavList
        background-color #fff
        width 100%
        .upNavListHeader
          width 100%
          height 60px
          padding-left 30px
          box-sizing border-box
          font-size 28px
          line-height 60px
        .listContent
          padding-top 24px
          display flex
          flex-wrap wrap
          li
            font-size 24px
            width 150px
            height 56px
            border 1px solid #CCC
            margin 0 0 40px 30px
            text-align center
            line-height 56px
            color #000
            &.upNavActive
              border 1px solid #b4282d
              color #b4282d
      .mask
        position fixed
        z-index 20
        width 100%
        height 100%
        background-color rgba(0,0,0,0.4)
</style>
