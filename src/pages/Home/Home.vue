<template>
  <div class="homeContainer">
    <HomeHeader :kingKongList="kingKongList"/>
    <HomeContent :kingKongList="kingKongList"/>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  import HomeHeader from '../../components/Home-header'
  import HomeContent from '../../components/HomeContent/HomeContent'
  import BScroll from 'better-scroll'

  export default {
    components: {
      HomeHeader,
      HomeContent
    },
    computed: {
      ...mapState(['kingKongList']),
      ...mapGetters(['homeContainerHeight'])
    },
    mounted () {
      this.$nextTick(() => {
        this.$store.dispatch('getKingKongList')
      })
    },
    methods: {
      _initHomeContainerScroll () {
        new BScroll(`.homeContent`, {
          click: true,
          scrollY: true
        })
      }
    },
    watch: {
      homeContainerHeight () {
        this.$nextTick(() => {
          this._initHomeContainerScroll()
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .homeContainer
    overflow hidden
    width 100%
    height 100%
</style>
