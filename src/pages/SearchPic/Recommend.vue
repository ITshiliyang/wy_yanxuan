<template>
  <div class="recommendContainer">
    <div class="recommendWrap">
      <ul v-for="(group, index) in manualList" v-if="manualList.length > 0">
        <li
          v-if="group.look && group.look !== null"
          class="look"
        >
          <div class="lookWrap">
            <div class="lookHeader">
              <img :src="group.look.avatar" alt="">
              <span>{{group.look.title}}</span>
            </div>
            <div class="lookDetail">{{group.look.content}}</div>
            <img class="lookImg" :src="group.look.lookPics[0].picUrl"></img>
            <div class="lookView">
              <i class="iconfont icon-eye"></i>
              <span>{{format(group.look.readCount)}}人看过</span>
            </div>
          </div>
        </li>
        <li
          v-for="(item, index) in group.topics"
          :class="{
            'column': item.style === 1,
            'row': item.style === 2,
            'slideshow': item.style !== 1 || 2
          }"
        >
          <div class="columnWrap" v-if="item.style === 1">
            <div class="column-header">
              <img :src="item.avatar" alt="">
              <span>{{item.nickname}}</span>
            </div>
            <div class="column-detail">{{item.title}}</div>
            <img class="columb-img" :src="item.picUrl"></img>
            <div class="column-view">
              <i class="iconfont icon-eye"></i>
              <span>{{format(item.readCount)}}人看过</span>
            </div>
          </div>
          <div class="rowWrap" v-else-if="item.style === 2">
            <div class="rowLeft">
              <div class="leftHeader">
                <img :src="item.avatar" alt="">
                <span>{{item.nickname}}</span>
              </div>
              <div class="detailUp">{{item.title}}</div>
              <div class="detailDown">{{item.subTitle}}</div>
              <div class="rowView">
                <i class="iconfont icon-eye"></i>
                <span>{{format(item.readCount)}}人看过</span>
              </div>
            </div>
            <div class="rowRight">
              <img :src="item.picUrl" alt="">
            </div>
          </div>
        </li>
        <!--<li class="slideshow"></li>-->
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        page: 0,
        lastGet: false,
      }
    },
    computed: {
      ...mapState(['manualList']),
    },
    methods: {
      _initRecommendScroll () {
        this.recommendScroll = new BScroll('.recommendContainer', {
          probeType: 2,
          pullUpLoad:  {
            threshold: 10
          },
          scrollbar: {
            fade: true,
          }
        })
        this.recommendScroll.on('pullingUp', () => {
          clearTimeout(this.timeId)
          this.timeId = setTimeout(async () => {
            this.page++
            const result = await this.$store.dispatch('getAgainManual',this.page)
            if (result.code === '200' && !this.lastGet) {
              this.recommendScroll.refresh()
              this.lastGet = result.lastGet
              this.recommendScroll.finishPullUp()

            }
          }, 50)
        })
      },
      format (number) {
        if (number > 100000) {
          return Math.floor(number / 10000) + 'w'
        } else if (number > 1000) {
          return Math.floor(number / 1000) + Math.floor(number%1000/100)/10 + 'k'
        } else {
          return number
        }
      }
    },
    mounted () {
      this.$store.dispatch('getManualList')
      this.$nextTick(() => {
        this._initRecommendScroll()
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommendContainer
    width 100%
    height 100%
    .recommendWrap
      background-color #eee
      ul
        .column
          box-sizing border-box
          width 100%
          height 677.75px
          background-color #fff
          margin 20px 0
          padding 36px 30px
          .columnWrap
            .column-header
              width 100%
              height 56px
              margin-bottom 16px
              display flex
              align-items center
              img
                width 54px
                height 54px
                border-radius 50%
                border 1px solid #d9d9d9
                margin-right 12px
              span
                font-size 26px
            .column-detail
              width 100%
              margin-bottom 16px
              font-size 36px
              line-height 54px
            .columb-img
              display block
              width 100%
              height 376px
              margin-bottom 16px
            .column-view
              width 100%
              height 33.75px
              display flex
              i
                font-size 36px
                line-height 36px
                color #999
                margin-right 8px
              span
                font-size 24px
                line-height 33.75px
                color #999
        .row
          box-sizing border-box
          width 100%
          height 336px
          background-color #fff
          margin 20px 0
          padding 32px 30px
          .rowWrap
            .rowLeft
              float left
              width 400px
              height 100%
              .leftHeader
                height 56px
                display flex
                align-items center
                img
                  width 54px
                  height 54px
                  border-radius 50%
                  border 1px solid #d9d9d9
                  margin-right 12px
                span
                  font-size 28px
              .detailUp
                padding-top 32px
                -webkit-line-clamp 2
                overflow hidden
                text-overflow ellipsis
                -webkit-box-orient vertical
                white-space normal
                display -webkit-box
                line-height 51px
                font-size 36px
              .detailDown
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
                padding-top 8px
              .rowView
                width 100%
                height 33.75px
                margin-top 18px
                display flex
                i
                  font-size 36px
                  line-height 36px
                  color #999
                  margin-right 8px
                span
                  font-size 24px
                  line-height 33.75px
                  color #999
            .rowRight
              float right
              width 272px
              height 272px
              border-radius 10px
              overflow hidden
              display flex
              justify-content center
              align-items center
              img
                height 272px
                display block
        .look
          box-sizing border-box
          width 100%
          background-color #fff
          margin 20px 0
          padding 26px 30px 20px
          .lookWrap
            .lookHeader
              width 100%
              height 56px
              margin-bottom 16px
              display flex
              align-items center
              img
                width 54px
                height 54px
                border-radius 50%
                border 1px solid #d9d9d9
                margin-right 12px
              span
                font-size 26px
            .lookDetail
              width 100%
              margin-bottom 20px
              font-size 32px
              line-height 46px
              overflow hidden
              text-overflow ellipsis
              -webkit-box-orient vertical
              white-space normal
              display -webkit-box
              -webkit-line-clamp 2
            .lookImg
              border-radius 6px
              display block
              width 100%
              margin-bottom 16px
            .lookView
              width 100%
              height 33.75px
              margin-top 18px
              display flex
              i
                font-size 36px
                line-height 36px
                color #999
                margin-right 8px
              span
                font-size 24px
                line-height 33.75px
                color #999
  strong
    zoom 1
</style>
