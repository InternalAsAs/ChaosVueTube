<template>
    <div style="text-align: center;">
      <Header>
        <h1>
            <a id="title-char" href="/">カオスティック</a>
            <a href="https://www.youtube.com/" target="_blank">
                <img src="../assets/yt_logo_rgb_dark.png" width="100px" height="auto">
            </a>
        </h1>
      </Header>
        <p style="color: white; font-size: smaller;">Welcome to chaostic YouTube！<br>チャンネル内平均再生回数と動画再生回数を相関させてサムネモザイク画を生成しています！</p>
        <input id="search" type="text" placeholder="search" v-model="keyword">
            <div class="container" style="display: flex; flex-wrap: wrap; justify-content: center;">
              <div v-for="m of filteredResults" :key="m.id" class="card-seed">
                  <div class="card-wrapper" v-if="m.open == 'TRUE'" style="margin: 10px;">
                    <router-link :to="m.path + '?path=' + m.path" class="link">
                      <div class="card-front">
                          <div class="card-links">
                            <span class="fa fa-instagram"></span>
                            <span class="fa fa-link"></span>
                          </div>
                          <div class="card-user">
                            <img class="card" v-bind:src="m.pic_url" :alt="m.name"/>
                            <span>{{ m.name }}</span>
                            <div class="user-info">
                              <span><b>{{ m.regist_count }}万人</b>チャンネル<br>登録者数</span>
                              <span><b>{{ m.subscribers }}本</b>動画投稿数</span>
                              <span><b>{{ m.average}}万</b>平均再生回数</span>
                            </div>
                          </div>
                      </div>
                    </router-link>
                </div>
              </div>
          </div>
        <p v-show="show" class="Loading">Loading...</p>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'HelloWorld',
  data: () => ({
    keyword: '',
    show: Vue.prototype.$show,
    results: Vue.prototype.$results,
    apiUrl: 'https://api.steinhq.com/v1/storages/606d4683f62b6004b3eb6824/YouTuber'
  }),
  computed: {
    filteredResults: function () {
      var apiResults = []
      for (var i in this.results) {
        var apiResult = this.results[i]
        if (apiResult.name.indexOf(this.keyword) !== -1 ||
            apiResult.path.indexOf(this.keyword.toLowerCase()) !== -1) {
          apiResults.push(apiResult)
        }
      }
      return apiResults
    }
  },
  watch: {
    filteredResults: {
      deep: true,
      handler: function (newVal) {
        this.show = Vue.prototype.$show
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header h1 {
  margin-bottom: 0px;
}
#search {
  position: relative;
  width: 60%;
  line-height: 26px;
  font-size: 15px;
  height: 26px;
  background:url("../assets/icon_search.svg") no-repeat 5px center;
  background-color: #444;
  background-size: 20px 20px;
  border: none;
  border-bottom:2px solid #666;
  transition: all 0.5s;
  letter-spacing: 0.05em;
  outline: none;
  cursor: pointer;
  color: #fff;
  padding: 0px 0px 0px 35px;
}
.card{
  width:100%;
  height:100%;
  display:block;
}
*::selection {
  background: transparent;
}
*::-moz-selection {
  background: transparent;
}

/* Pen Style  */

.container{
  padding:15px;
  perspective:700px;
  -webkit-perspective:700px;
}

.card-wrapper{
  position:relative;
  width:250px;
  height:250px;
  margin:0px auto 25px;
  transform-style:preserve-3d;
  transition:transform 0.3s cubic-bezier(0,1.06,.75,1.31);
}

.card-front,
.card-back{
  position:absolute;
  width:100%;
  height:100%;
  border-radius:0.55em;
}

.card-front{
  background: #FF8008;
  background: -webkit-linear-gradient(to right, #FFC837, #FF8008);
  background: linear-gradient(to right, #FFC837, #FF8008);
}

.card-front span{
  transition:700ms ease-in;
}

.card-back{
  background:#fff;
  box-shadow: 0 10px 50px rgba(0,0,0,0.5);
  transform:translateZ(0);
  z-index:-1;
}

.card-links{
  padding:15px;
  transition: all 700ms ease-in;
}

.card-links span{
  color:#fff;
  font-size:22px;
}

.card-links span:last-child{
  float:right;
}

.card-user{
  transform-style:preserve-3d;
  transition: all 700ms cubic-bezier(0,1.06,.75,1.31);
}

.card-user img{
  width:75px;
  height:75px;
  border-radius:50%;
  margin: 0 auto;
  border:2px solid #fff;
  transition: all 700ms ease-in;
}

.card-user span{
  font-size:16px;
  text-align:center;
  display:block;
  margin-top:10px;
  color:black;
}

.card-user span>i{
  font-family: 'Pacifico', cursive;
  display:block;
  font-size:8px;
}

/* In card-user div  */
.user-info{
  display:flex;
  flex-wrap:nowrap;
  padding:10px 5px;
}

.user-info span{
  flex:1;
  font-size:12px;
}

.user-info span>b{
  display:block;
}

.Loading{
  font-size: xx-large;
  color: #fff;
}

.link{
  width: 100%;
  height: 100%;
  display: inline-block;
}

#title-char{
    color: white;
    text-decoration: none;
}
</style>
