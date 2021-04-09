<template>
<div>
  <Loading v-if="show"/>
  <Header :path="this.$route.query.path"/>
  <EvisJapMain/>
</div>
</template>

<script>
import Header from '../components/Header'
import Loading from '../components/Loading'

export default {
  name: 'EvisJap',
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
    EvisJapMain: () => import('../components/Body/EvisJapMain')
  }
}
</script>

<style scoped>
#main-pic {
    display: flex;
    flex-wrap: wrap;
}
</style>
