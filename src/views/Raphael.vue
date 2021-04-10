<template>
<div>
  <Loading v-if="show"/>
  <Header :path="this.$route.query.path"/>
  <RaphaelMain/>
</div>
</template>

<script>
import Header from '../components/Header'
import Loading from '../components/Loading'

export default {
  name: 'Raphael',
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
    Header,
    Loading,
    RaphaelMain: () => import('../components/Body/RaphaelMain')
  }
}
</script>

<style scoped>
#main-pic {
    display: flex;
    flex-wrap: wrap;
}
</style>
