<template>
  <div class="categoryContainer">
    <div class="categoryHeader" ref="categoryHeader">
      <div class="inputWrap" @click="$router.push('/search')">
        <i class="iconfont icon-search"></i>
        <span>搜索商品, 共22607款好物</span>
      </div>
    </div>
    <div class="categoryContent">
      <div class="categoryLeftWrap" :style="{'height': `${categoryWrapHeight}px`}">
        <ul>
          <li
            v-for="(item, index) in categoryL1List"
            :class="{active: index === categoryIndex}"
            @click="changeListIndex(index)"
          >
            <a href="javascript:">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <CategoryRightWrap
        :categoryIndex="categoryIndex"
        :categoryL1List="categoryL1List"
        :categoryWrapHeight="categoryWrapHeight"
      />
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScorll from 'better-scroll'

  import CategoryRightWrap from '../../components/CategoryRightList/CategoryRightList'

  export default {
    data () {
      return {
        categoryIndex: 0,
        categoryHeaderHeight: 0,
      }
    },
    computed: {
      ...mapState(['categoryL1List','footerHeight']),
      categoryWrapHeight () {
        return document.documentElement.clientHeight - this.footerHeight - this.categoryHeaderHeight
      }
    },
    components: {
      CategoryRightWrap
    },
    mounted () {
      this.$store.dispatch('getCategoryList')
      this.categoryHeaderHeight = this.$refs.categoryHeader.offsetHeight
    },
    methods: {
      changeListIndex (index) {
        this.categoryIndex = index
      },
      _initLeftWrapScroll () {
        new BScorll('.categoryLeftWrap', {
          click: true
        })
      },
    },
    watch: {
      categoryL1List () {
        this.$nextTick(() => {
          this._initLeftWrapScroll()
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .categoryContainer
    width 100%
    height 100%
    background-color #fff
    .categoryHeader
      background-color #fff
      position relative
      z-index 30
      width 100%
      height 88px
      padding 0 30px
      box-sizing border-box
      display flex
      align-items center
      border-bottom 1px solid #ededed
      .inputWrap
        width 100%
        height 56px
        background-color #ededed
        display flex
        justify-content center
        align-items center
        i
          margin-right 10px
        span
          font-size 26px
          color #666
    .categoryContent
      width 100%
      display flex
      overflow hidden
      .categoryLeftWrap
        width 162px
        ul
          background-color #fff
          padding 40px 0 98px
          flex-direction column
          li
            height 50px
            width 162px
            margin-top 40px
            text-align center
            line-height 50px
            &.active
              a
                position relative
                color #ab2b2b
              &:after
                position absolute
                left 0
                content ''
                width 4px
                height 50px
                background-color #ab2b2b
            &:first-child
              margin 0
            a
              font-size 28px
              color #000
</style>
