<template>
<div>
  <Loading v-if="show"/>
  <Header :path="this.$route.query.path"/>
  <SUSURUTVMain/>
</div>
</template>

<script>
import Header from '../components/Header'
import Loading from '../components/Loading'

export default {
  name: 'SUSURU TV',
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
    SUSURUTVMain: () => import('../components/Body/SUSURU TVMain')
  }
}
</script>

<style scoped>
#main-pic {
    display: flex;
    flex-wrap: wrap;
}
</style>
