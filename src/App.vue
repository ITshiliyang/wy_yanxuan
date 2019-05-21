<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer v-if="!$route.meta.noFooter"></Footer>
  </div>
</template>

<script>
  import Footer from './components/Footer/Footer'
  export default {
    components: {
      Footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    background-color #eee
    width 100%
    height 100%
</style>
