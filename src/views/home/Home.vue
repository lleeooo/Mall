<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="center">购物</div>
    </nav-bar>

    <home-swiper :banners="banners"/>
    <recommend-view :recommends = "recommends"></recommend-view>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar";
import HomeSwiper from "./childCompos/HomeSwiper";
import RecommendView from './childCompos/RecommendView'

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      dKeyword: [],
      keywords: []
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      this.dKeyword = res.data.dKeyword;
      this.keywords = res.data.keywords;
    });
  }
};
</script>

<style  scoped>
.navbar {
  background: lightcoral;
  color: #fff;
}
</style>