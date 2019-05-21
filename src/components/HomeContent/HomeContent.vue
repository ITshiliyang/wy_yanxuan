<template>
  <div class="homeContent" :style="{'height': `${homeContainerHeight}px`}">
    <div class="homeWrap" ref="homeWrap">
      <div class="homeSwiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <img class="swiper-slide" :src="item" alt="" v-for="(item, index) in swiperList" :key="index">
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <ul class="homePolicyDescList">
        <li v-for="(item, index) in policyDescList">
          <i class="iconfont" :class="iconType[index]"></i>
          <span>{{item.desc}}</span>
        </li>
      </ul>
      <ul class="homeKingKongList" v-if="kingKongList.length > 0">
        <li v-for="(item, index) in kingKongList">
          <img :src="item.picUrl" alt="">
          <p>{{item.text}}</p>
        </li>
      </ul>
      <div class="homeItem">
        <HomeItemHeader :title="itemTitle[0]"/>
        <ul class="hotList">
          <li v-for="(item, index) in lightShopping">
            <p>{{item.categoryName}}</p>
            <div>
              <img :src="item.picUrl" alt="">
            </div>
          </li>
        </ul>
      </div>
      <div class="homeItem">
        <HomeItemHeader :title="itemTitle[1]" :moreFlag="true"/>
        <a href="javascript:" class="PIFirst" v-if="PIFirst">
          <img :src="PIFirst.listPicUrl" alt="">
          <div class="PIFirstDetail">
            <p>
              <span>520特惠</span>
            </p>
            <p>{{PIFirst.name}}</p>
            <p>{{PIFirst.simpleDesc}}</p>
            <p>￥{{PIFirst.retailPrice}}</p>
          </div>
        </a>
        <ul class="PINormal">
          <li v-for="(item, index) in PINormal">
            <a href="">
              <img :src="item.primaryPicUrl" alt="">
              <div class="content">
                <span>{{item.name}}</span>
                <span>￥{{item.retailPrice}}</span>
              </div>
              <span class="text">
              {{item.itemTagList[0].name}}
            </span>
            </a>
          </li>

        </ul>
      </div>
      <div class="homeItem">
        <HomeItemHeader :title="itemTitle[2]" :moreFlag="true"></HomeItemHeader>
        <ul class="timeLimitList">
          <li v-for="(item, index) in flashSaleList">
            <a href="javascript:">
              <div class="imgWrap">
                <img :src="item.picUrl" alt="">
              </div>
              <p class="text">
                <span>￥{{item.activityPrice}}</span>
                <span>￥{{item.originPrice}}</span>
              </p>
            </a>
          </li>
        </ul>
      </div>
      <div class="homeItem">
        <HomeItemHeader :title="itemTitle[3]" :moreFlag="true"></HomeItemHeader>
        <ul class="newItemList">
          <li v-for="(item, index) in newGoodList">
            <a href="javascript:">
              <div class="imgWrap">
                <img :src="item.scenePicUrl" alt="">
              </div>
              <p class="text">
                <span>{{item.name.substring(0,10)}}...</span>
                <span>￥{{item.retailPrice}}</span>
              </p>
              <span class="special" v-if="item.itemTagList.length>0">{{item.itemTagList[0].name}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="homeFourFold">
        <a href="javascript:"v-for="(item, index) in fourFoldList" :key="index" v-if="fourFoldList.length > 0">
          <p>{{item.name}}</p>
          <p>{{item.detail}}</p>
          <div class="imgWrap">
            <img :src="item.imageLeft" alt="">
            <img :src="item.imageRight" alt="">
          </div>
        </a>
      </div>
      <div
        class="homeRecommendList"
        v-for="(shop, index) in homeCategoryModule"
        :key="index"
        v-if="homeCategoryModule.length > 0"
        ref="recommendList"
      >
        <a href="javascript:">
          <img :src="shop.titlePicUrl" alt="">
        </a>
        <div class="listContainer" :class="`listContainer${index}`">
          <ul ref="goodList">
            <li v-for="(item, index) in shop.itemList" :key="index">
              <a href="javascript:">
                <img :src="item.listPicUrl" alt="">
                <div class="textWrap">
                  <span>{{item.name}}</span>
                </div>
                <div class="priceWrap">
                  <div class="newPrice">
                    <span>¥</span>
                    <span>{{item.retailPrice}}</span>
                  </div>
                  <div class="oldPrice">
                    <span>¥</span>
                    <span v-if="item.counterPrice !== 0">{{item.counterPrice}}</span>
                  </div>
                </div>
                <div class="detail">
                <span v-for="(i, index) in item.itemTagList" v-if="item.itemTagList.length > 0" :key="index">
                  {{i.name}}
                </span>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:">
                <span>查看更多</span>
                <i class="iconfont icon-right"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="homeFooter">
        <div class="footerTop">
          <div class="download">下载APP</div>
          <div class="pc">电脑版</div>
        </div>
        <div class="footerBottom">
          <p>网易公司版权所有 © 1997-2019</p>
          <p>食品经营许可证：JY13301080111719</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.min.css'

  import HomeItemHeader from '../../components/HomeItemHeader/HomeItemHeader'
  export default {
    data () {
      return {
        iconType: ['icon-wangyi', 'icon-shield', 'icon-money'],
        itemTitle: ['类目热销榜', '人气推荐', '限时购', '新品首发'],
        classType: ['homeRecommendList1', 'homeRecommendList2', 'homeRecommendList3'],
        homeWrapHeight: 0
      }
    },
    props: {
      kingKongList: Array
    },
    computed: {
      ...mapState([
        'policyDescList',
        'lightShopping',
        'popularItemList',
        'flashSaleList',
        'newItemList',
        'swiperList',
        'fourFoldList',
        'homeCategoryModule',
        'homeHeaderHeight',
        'footerHeight'
      ]),
      homeContainerHeight () {
        return document.documentElement.clientHeight - this.homeHeaderHeight - this.footerHeight
      },
      PIFirst () {
        if (this.popularItemList) {
          return this.popularItemList.find(item => item.itemTagList.length === 0)
        }
      },
      PINormal () {
        if (this.popularItemList) {
          return this.popularItemList.filter(item => item.itemTagList.length > 0)
        }
      },
      newGoodList () {
        if (this.newItemList) {
          return this.newItemList.splice(0,6)
        }
      }
    },
    components: {
      HomeItemHeader,
    },
    methods: {
      _initRecommendListScroll (index) {
        new BScroll(`.listContainer${index}`, {
          click: true,
          scrollX: true
        })
      },
      _initHomeContainerScroll () {
        new BScroll('.homeContent', {
          click: true,
          scrollY: true
        })
      }
    },
    mounted () {
      this.$store.dispatch('getPolicyDesclist')
      this.$store.dispatch('getLightShopping')
      this.$store.dispatch('getPopularItemList')
      this.$store.dispatch('getFlashSaleList')
      this.$store.dispatch('getNewItemList')
      this.$store.dispatch('getFourFoldList')
      this.$store.dispatch('getHomeCategoryModule')

      new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      })

      this.homeWrapHeight = this.$refs.homeWrap.offsetHeight
    },
    watch: {
      homeCategoryModule () {
        this.homeCategoryModule.forEach((item, index) => {
          this.$nextTick(() => {
            this._initRecommendListScroll(index)
          })
        })
      },
      homeWrapHeight () {
        setTimeout(() => {
          this.$nextTick(() => {
            this._initHomeContainerScroll()
          })
        }, 500)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .homeContent
    width 100%
    height 100%
    margin 150px 0 98px
  .homeWrap

    .homeSwiper
      width 100%
      height 370px
      overflow hidden
      .swiper-container
        height 100%
        width 100%
        .swiper-wrapper
          display flex


    .homePolicyDescList
      box-sizing border-box
      width 100%
      height 72px
      padding 0 30px
      display flex
      background-color #fff
      li
        flex 1
        display flex
        align-items center
        i
          margin-right 8px
          font-size 32px
          color #b4282d
        span
          font-size 24px
          color #b4282d
    .homeKingKongList
      width 100%
      height 372px
      box-sizing border-box
      padding-bottom 32px
      display flex
      flex-wrap wrap
      background-color #fff
      margin-bottom 20px
      li
        width 20%
        height 156px
        display flex
        justify-content center
        align-items center
        flex-direction column
        img
          width 110px
          height 110px
        p
          margin-top 10px
          font-size 24px
    .homeItem
      background-color #fff
      margin-bottom 20px
      .hotList
        zoom 1
        padding 0 20px 20px 30px
        &::after
          content ''
          display table
          clear both
        li
          float left
          width 165px
          height 180px
          margin 0 10px 10px 0
          background-color #EBEFF6
          position relative
          &:nth-child(1), &:nth-child(2)
            float left
            width 340px
            height 200px
            margin 0 10px 10px 0
            position relative
            background-color #F9F3E4
            p
              float left
              margin-top 66px
              padding-left 24px
              position relative
              font-size 26px
              &::after
                content ''
                width 48px
                height 4px
                background-color #333
                position absolute
                bottom -14px
                left 24px
            img
              position absolute
              right 0
              width 200px
              height 200px
          &:nth-child(2)
            background-color #EBEFF6
          p
            margin-top 10px
            text-align center
            line-height 36px
          div
            display flex
            justify-content center
            img
              width 120px
              height 120px
      .PIFirst
        display flex
        margin 0 30px 20px
        height 280px
        width auto
        align-items center
        background-color #FEF0DF
        img
          width 280px
          height 280px
          margin-right 30px
        .PIFirstDetail
          width 350px
          height 160px
          p
            span
              background-color #fff
              font-size 24px
              font-family "宋体"
              border-radius 2px
              border 2px solid #B4282D
              color #B4282D
              padding 0 8px
            &:nth-child(1)
              margin-bottom 9px
            &:nth-child(2)
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              font-size 28px
              line-height 41px
              color #000
            &:nth-child(3)
              line-height 36px
            &:nth-child(4)
              color #B4282D
              font-size 30px
              line-height 41px
      .PINormal
        height 354px
        padding 0 30px 30px 10px
        display flex
        li
          margin-left 20px
          padding-bottom 13px
          flex 1
          background-color #f5f5f5
          a
            display block
            img
              width 216px
              height 216px
            .content
              width 100%
              height 72px
              margin-bottom 4px
              span
                font-size 24px
                line-height 36px
                &:nth-child(2)
                  color #B4282D
            .text
              display inline-block
              padding 0 13px
              color #B4282D
              border-radius 2px
              border 2px solid #B4282D
      .timeLimitList
        padding 0 10px 0 30px
        overflow hidden
        li
          float left
          width 216px
          height 269px
          padding-bottom 30px
          margin-right 20px
          a
            .imgWrap
              width 216px
              height 216px
              margin-bottom 12px
              background-color #F5F5F5
              img
                width 100%
                height 100%
            .text
              span
                line-height 41px
                font-size 28px
                color #b4282d
                &:nth-child(2)
                  font-size 24px
                  color #7F7F7F
                  text-decoration line-through
      .newItemList
        padding 0 10px 0 30px
        overflow hidden
        li
          float left
          width 216px
          height 354px
          padding-bottom 30px
          margin-right 20px
          a
            .imgWrap
              width 216px
              height 216px
              margin-bottom 12px
              background-color #F5F5F5
              img
                width 100%
                height 100%
            .text
              height 72px
              margin-bottom 4px
              span
                line-height 36px
                font-size 24px
                color #000

                &:nth-child(2)
                  font-size 24px
                  color #b4282d
            .special
              display inline-block
              padding 0 13px
              color #B4282D
              border-radius 12px
              border 2px solid #B4282D
    .homeFourFold
      box-sizing border-box
      width 100%
      background-color #fff
      padding 10px 30px 30px 26px
      margin-bottom 20px
      &::after
        content ''
        display table
        clear both
      a
        float left
        width 323px
        height 244px
        padding 20px 0 0 20px
        margin 4px 0 0 4px
        background-color #F5F5F5
        p
          &:nth-child(1)
            padding-left 10px
            font-size 30px
            line-height 48px
            color #000
          &:nth-child(2)
            padding-left 10px
          font-size 24px
          line-height 36px
          color #7f7f7f
        img
          width 150px
          height 150px
    .homeRecommendList
      margin-bottom 20px
      background-color #fff
      a
        margin-bottom 20px
        height 370px
        display block
        img
          display block
          width 100%
          height 100%
      .listContainer
        box-sizing border-box
        width 100%
        padding-bottom 30px
        display flex
        ul
          display flex
          padding 0 30px
          li
            width 200px
            height 357px
            margin-right 20px
            &:last-child
              a
                width 200px
                height 200px
                background-color #f4f4f4
                display flex
                justify-content center
                align-items center
                span
                  font-size 32px
                  color #000
            a
              display block
              margin 0 20px 0 0
              img
                width 200px
                height 200px
                background-color #f4f4f4
              .textWrap
                width 200px
                height 72px
                overflow hidden
                span
                  font-size 24px
                  line-height 36px
                  color #000
              .priceWrap
                width 200px
                height 36px
                margin-bottom 4px
                div
                  float left
                  line-height 36px
                  &::after
                    content ''
                    display table
                    clear both
                  span
                    float left
                .newPrice
                  font-size 26px
                  color #b4282d
                  margin-right 8px
                .oldPrice
                  span
                    font-size 24px
                    text-decoration line-through
              .detail
                margin-bottom 4px
                height 33px
                width 100%
                transform scale(0.9)
                margin-left -10px
                span
                  font-family '幼圆'
                  padding 0 12px
                  border-radius 20px
                  line-height 33px
                  font-size 10px
                  border 2px solid #CE2424
                  color #CE2424
                  transform scale(.8)
                  white-space nowrap
    .homeFooter
      width 100%
      height 244px
      box-sizing border-box
      padding 54px 20px 28px
      background-color #414141
      .footerTop
        height 62px
        margin-bottom 36px
        display flex
        justify-content center
        align-items center
        div
          text-align center
          width 170px
          height 60px
          box-sizing border-box
          border 1px solid #999
          color #fff
          margin-right 50px
          font-size 24px
          line-height 60px
          &.pc
            margin 0
      .footerBottom
        height 62px
        text-align center
        p
          font-size 24px
          color #999
          line-height 27px
          &:first-child
            margin-bottom 10px
</style>
