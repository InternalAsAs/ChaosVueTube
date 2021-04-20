<template>
<div>
  <Loading v-if="show"/>
  <Header :path="this.$route.query.path"/>
  <HikakinMain/>
</div>
</template>

<script>
import Loading from '../components/Loading'
import Header from '../components/Header'

export default {
  name: 'hikakintv',
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
    HikakinMain: () => import('../components/Body/hikakintvmain')
  }
}
</script>

<style scoped>
#main-pic {
    display: flex;
    flex-wrap: wrap;
}
</style>
