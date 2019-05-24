<template>
  <div class="searchPicContainer">
    <div class="headerWrap" ref="headerWrap">
      <div class="headerContent">
        <div class="homeIconWrap">
          <i class="iconfont icon-0401zhuye"></i>
        </div>
        <div class="linkWrap">
          <a class="active" href="javascript:">发现</a>
          <a href="javascript:">甄选家</a>
        </div>
        <div class="skipIconWrap">
          <i class="iconfont icon-search"></i>
          <i class="iconfont icon-yidiandiantubiao01"></i>
        </div>
      </div>
      <div class="headerNavWrap">
        <ul v-if="tabList.length > 0">
          <li
            :class="{active: tabIndex === index}"
            v-for="(tab, index) in tabList"
            @click="changeIndex(index)"
          >
            <router-link :to="routes[index]">{{tab.tabName}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <keep-alive>
      <router-view
        :style="{
        'height': `${contentHeight}px`,
        'margin-top': `${headerHeight}px`,
      }"
      />
    </keep-alive>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Bscroll from 'better-scroll'
  export default {
    data () {
      return {
        headerHeight: 0,
        tabIndex: 0,
        routes: [
          '/searchpic/recommend',
          '/searchpic/goodthings',
          '/searchpic/buyback',
          '/searchpic/look',
          '/searchpic/developer',
          '/searchpic/intelligent',
          '/searchpic/news',
          '/searchpic/shome',
        ]
      }
    },
    computed: {
      ...mapState(['tabList', 'footerHeight']),
      contentHeight () {
        return document.documentElement.clientHeight - this.headerHeight - this.footerHeight
      }
    },
    mounted () {
      this.$store.dispatch('getTabList')
      this._getHeaderHeight()
    },
    methods: {
      changeIndex (index) {
        this.tabIndex = index
      },
      _initNavScroll () {
        new Bscroll('.headerNavWrap', {
          click: true,
          scrollX: true
        })
      },
      _getHeaderHeight () {
        this.headerHeight = this.$refs.headerWrap.offsetHeight
      }
    },
    watch: {
      tabList () {
        this.$nextTick(() => {
          this._initNavScroll()
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .searchPicContainer
    width 100%
    height 100%
    overflow hidden
    .headerWrap
      position fixed
      top 0
      width 100%
      height 171px
      z-index 20
      .headerContent
        padding 0 28px 0 24px
        box-sizing border-box
        width 100%
        height 100px
        position relative
        background-color #fff
        .homeIconWrap
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
            font-size 26px
            line-height 100px
            padding 0 16px
            &.active
              font-size 42px
              color #b4282d
              font-weight bold
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
      .headerNavWrap
        width 100%
        height 71px
        background-color #fff
        position relative
        display flex
        box-sizing border-box
        border-bottom 2px solid #ccc
        border-top 2px solid #ccc
        ul
          display flex
          li
            box-sizing border-box
            font-size 26px
            line-height 68px
            height 68px
            margin 0 20px
            padding 0 8px
            border-bottom 0
            color #7F7F7F
            text-align center
            position relative
            &.active
              &:after
                content ''
                width 100%
                height 4px
                background-color #B4282D
                position absolute
                bottom 0
                left 0
            &.active
              >a
                color #B4282D
            a
              white-space nowrap
  strong
    zoom 1
</style>
