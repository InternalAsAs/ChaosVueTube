<template>
<div>
  <Loading v-if="show"/>
  <Header :path="this.$route.query.path"/>
  <HikakinMain/>
</div>
</template>

<script>
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
    }, 2000)
  },
  components: {
    Loading,
    Header: () => import('../components/Header'),
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
