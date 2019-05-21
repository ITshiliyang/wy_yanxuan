<template>
  <div class="searchContainer">
    <div class="searchHeader">
      <form class="inputWrap">
        <div class="iconWrap">
          <i class="iconfont icon-search"></i>
        </div>
        <input type="text" placeholder="11111">
      </form>
      <span @click="$router.back()">取消</span>
    </div>
  </div>
</template>

<script>
  export default {}
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
        div
          background-color #f4f4f4
          text-align center
          i
            font-size 32px
            line-height 56px
            margin-right 16px
        input
          background-color #f4f4f4
          outline none
      span
        margin-left 30px
        font-size 28px
        white-space nowrap
  b
    zoom 1
</style>
