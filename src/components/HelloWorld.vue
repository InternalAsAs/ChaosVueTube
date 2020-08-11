<template>
  <div class="hello">
    <h1 class="title">Hello YouTube</h1>
    <a v-for="n of 10000" :key="n" href="https://www.youtube.com/watch?v=PPnbEiXSYM8">
      <img class="logo" alt="YouTube logo" src="../assets/yt_logo_rgb_dark.png">
    </a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: white;
}
.hello {
  background-color: black;
}
.logo {
  widows: 24px;
  height: 10px;
}
</style>
