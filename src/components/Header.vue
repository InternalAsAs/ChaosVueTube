<template>
  <div>
    <header v-for="m of tuber" :key="m.id">
        <a :href=m.movie_url target="_blank">
            <img id="header-logo" alt="ヘッダーロゴ" :src=m.pic_url>
        </a>
        <h1>
            <a id="title-char" href="./">カオスティック</a>
            <a href="https://www.youtube.com/" target="_blank">
                <img id="tube-logo" src="../assets/yt_logo_rgb_dark.png">
            </a>
        </h1>
        <p id="sub-title">{{ m.name }}！サムネは投稿日順で、再生数が多いほど大きく表示されます。</p>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    path: String
  },
  data: () => ({
    results: [],
    tuber: [],
    tuberUrl: 'https://api.steinhq.com/v1/storages/606d4683f62b6004b3eb6824/YouTuber/?open=TRUE'
  }),
  mounted () {
    this.axios.get(this.tuberUrl + '?search={"path":' + '"' + this.path + '"' + '}').then(response => {
      response.data.forEach(item => {
        item.id = Number(item.id)
        this.tuber.push(item)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    text-align: center;
}
#header-logo {
    float: left;
    width: 80px;
}
#tube-logo {
    width: 100px;
    height: auto;
}
#sub-title {
    color: white;
    font-size: smaller;
}
#title-char{
    color: white;
    text-decoration: none;
}
</style>
