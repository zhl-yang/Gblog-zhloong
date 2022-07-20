<template>
  <div id="app" v-cloak>
    <loading></loading>
    <layout-header></layout-header>
    <layout-body></layout-body>
    <layout-footer></layout-footer>
<!--    <Music></Music>-->
  </div>
</template>
<script>
import layoutHeader from '@/components/layout/layout-header'
import layoutBody from '@/components/layout/layout-body'
import layoutFooter from '@/components/layout/layout-footer'
import Loading from '@/components/loading'
// import Music from '@/components/music163'

export default {
  name: "app",
  components: {
    layoutHeader,
    layoutBody,
    layoutFooter,
    Loading,
    // Music
  }
}
</script>
<style lang="less">
#app {
  font-size: 17px;
  color: #6f6f6f;
}
</style>
