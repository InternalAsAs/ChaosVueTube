<template>
<div>
  <Loading v-if="show"/>
  <Header :path="this.$route.query.path"/>
  <PewDiePieMain/>
</div>
</template>

<script>
import Loading from '../components/Loading'
import Header from '../components/Header'

export default {
  name: 'PewDiePie',
  data: () => ({
    path: String,
    show: true
  }),
  mounted () {
    setTimeout(() => {
      this.show = false
    }, 2000)
  },
  components: {
    Loading,
    Header,
    PewDiePieMain: () => import('../components/Body/PewDiePieMain')
  }
}
</script>

<style scoped>
#main-pic {
    display: flex;
    flex-wrap: wrap;
}
</style>
