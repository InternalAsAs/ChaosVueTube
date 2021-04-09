<template>
<div>
  <Loading v-if="show"/>
  <Header :path="this.$route.query.path"/>
  <HikakinMain/>
</div>
</template>

<script>
import Header from '../components/Header'
import Loading from '../components/Loading'

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
    HikakinMain: () => import('../components/Body/HikakinMain')
  }
}
</script>

<style scoped>
#main-pic {
    display: flex;
    flex-wrap: wrap;
}
</style>
