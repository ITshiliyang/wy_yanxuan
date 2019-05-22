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

  export default {
    components: {
      HomeHeader,
      HomeContent
    },
    computed: {
      ...mapState(['kingKongList']),
    },
    mounted () {
      this.$nextTick(() => {
        this.$store.dispatch('getKingKongList')
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .homeContainer
    overflow hidden
    width 100%
    height 100%
</style>
