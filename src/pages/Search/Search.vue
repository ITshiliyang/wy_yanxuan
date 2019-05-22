<template>
  <div class="searchContainer">
    <div class="searchHeader">
      <form class="inputWrap">
        <div class="iconWrap">
          <i class="iconfont icon-search"></i>
        </div>
        <input type="text" placeholder="瑞士制造 玫瑰腕表上新疯抢">
      </form>
      <span @click="$router.back()">取消</span>
    </div>
    <div class="hotSearch">
      <p class="title">热门搜索</p>
      <ul class="hotSearchList">
        <li
          v-for="(item, index) in hotSarchList"
          :class="{hot: item.length > 6}"
        >
          <a href="javascript:">{{item}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hotSarchList: [
          '9.9元爆品超值购',
          '拖鞋',
          '按摩电器',
          '风扇',
          '粽子礼盒 限时8折',
          '耳机',
          '爆款 行李箱',
          '袜子',
          '夏凉床品',
          '杯子',
          '电动牙刷69元起',
          '女鞋'
        ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .searchContainer
    width 100%
    background-color #fff
    .searchHeader
      width 100%
      height 98px
      padding 0 30px
      box-sizing border-box
      display flex
      justify-content center
      align-items center
      .inputWrap
        padding 0 20px
        background-color #f4f4f4
        height 56px
        display flex
        width 100%
        margin 0
        border-radius 6px
        div
          background-color #f4f4f4
          text-align center
          i
            font-size 32px
            line-height 56px
            margin-right 16px
            color #999
        input
          background-color #f4f4f4
          outline none
          font-size 28px
          color #999
      span
        margin-left 30px
        font-size 28px
        white-space nowrap
    .hotSearch
      width 100%
      box-sizing border-box
      padding 0 30px 30px
      margin-bottom 20px
      .title
        width 100%
        height 80px
        line-height 80px
        font-size 28px
        color #999
      .hotSearchList
        zoom 1
        &:after
          content ''
          display table
          clear both
        li
          float left
          padding 0 15px
          margin 0 32px 32px 0
          border 2px solid #999
          border-radius 6px
          color #333
          &.hot
            border-color #b4282d
            color #b4282d
            a
              color #b4282d
          a
            line-height 45px
            color #333

  b
    zoom 1
</style>
