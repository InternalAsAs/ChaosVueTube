
<template>
<div>
  <Loading v-if="show"/>
  <Header :path="this.$route.query.path"/>
  <susurutvmain/>
</div>
</template>

<script>
import Header from '../components/Header'
import Loading from '../components/Loading'

export default {
  name: 'susurutv',
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
    susurutvmain: () => import('../components/Body/susurutvmain.vue')
  }
}
</script>

<style scoped>
#main-pic {
  display: flex;
  flex-wrap: wrap;
}
</style>
