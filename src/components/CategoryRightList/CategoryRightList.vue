<template>
  <div class="categoryRightWrap" :style="{'height': `${categoryWrapHeight}px`}">
    <ul v-if="categoryL1List.length > 0">
      <li>
        <img :src="categoryL1List[categoryIndex].wapBannerUrl" alt="">
      </li>
      <li class="normal" v-for="(item, index) in categoryL1List[categoryIndex].subCateList">
        <img :src="item.wapBannerUrl" alt="">
        <div>{{item.name}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import BScorll from 'better-scroll'

  export default {
    props: {
      categoryIndex: Number,
      categoryL1List: Array,
      categoryWrapHeight: Number
    },
    methods: {
      _initRightWrapScroll () {
        new BScorll('.categoryRightWrap', {
          click: true
        })
      }
    },
    watch: {
      categoryL1List () {
        this.$nextTick(() => {
          this._initRightWrapScroll()
        })
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .categoryRightWrap
    box-sizing border-box
    ul
      display flex
      flex-wrap wrap
      padding 30px 30px 21px
      li
        width 144px
        height 216px
        margin-right 34px
        &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13)
          margin 0
        &:first-child
          width 528px
          height 192px
          margin 0 0 32px
          img
            width 528px
            height 192px
        &.normal
          text-align center
          img
            width 144px
            height 144px
            color #333
</style>
