<template>
<div>
  <Loading v-if="show"/>
  <Header :path="this.$route.query.path"/>
  <RiroHitoriMain/>
</div>
</template>

<script>
import Header from '../components/Header'
import Loading from '../components/Loading'

export default {
  name: 'RiroHitori',
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
    RiroHitoriMain: () => import('../components/Body/rirohitorimain')
  }
}
</script>

<style scoped>
#main-pic {
    display: flex;
    flex-wrap: wrap;
}
</style>
