<template>
<div>
  <Loading v-if="show"/>
  <Header :path="this.$route.query.path"/>
  <HikakinMain v-if="!show"/>
</div>
</template>

<script>
import Header from '../components/Header'
import Loading from '../components/Loading'
import HikakinMain from '../components/HikakinMain'

export default {
  name: 'HikakinTV',
  data: () => ({
    path: String,
    show: true
  }),
  mounted () {
    setTimeout(() => {
      this.show = false
    }, 1000)
  },
  components: {
    Header,
    Loading,
    HikakinMain
    // Defer
  }
  // mixins: [
  //  Defer()
  // ]
}
</script>

<style scoped>
#main-pic {
    display: flex;
    flex-wrap: wrap;
}
</style>
