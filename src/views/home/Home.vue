<template>
  <div id="home">
    <nav-bar class="navbar">
      <div slot="center">购物</div>
    </nav-bar>

    <tab-control
      :titles="['流行' , '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="this.isTabFixed"
    />

    <b-scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentPosition"
      :pullUpLoad="true"
      @loadMore="imgItemLoad"
    >
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control :titles="['流行' , '新款', '精选']" @tabClick="tabClick" ref="tabControl2" />
      <goods-list :goods="showGoods" />
    </b-scroll>

    <back-totop @click.native="backClick" v-show="isShow" />
  </div>
</template>

<script>
import BScroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/Navbar";

import HomeSwiper from "./childCompos/HomeSwiper";
import RecommendView from "./childCompos/RecommendView";
import FeatureView from "./childCompos/FeatureView";

import TabControl from "components/content/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTotop from "components/content/backTotop/BackTotop";
import { debounce } from "@/common/utils.js";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      curType: "pop",
      isShow: false,
      tabDistance: 0,
      isTabFixed: null,
      saveY: 0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.curType].list;
    }
  },
  components: {
    BScroll,
    NavBar,

    HomeSwiper,
    RecommendView,
    FeatureView,

    TabControl,
    GoodsList,
    BackTotop
  },
  created() {
    // 1.请求banner recommend数据
    this.getHomeMultidata(),
      //2.请求商品数据
      this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },

  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    //图片加载时 利用总线进行监听图片加载 并且进行better-scroll的高度刷新
    this.$bus.$on("homeimgItemLoad", () => {
      refresh();
    });
  },

  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 100);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
  },

  methods: {
    /**
     * 关于数据请求的方法
     */
    //防抖函数
    // debounce(func, delay) {
    //   let timer = null;
    //   return function() {
    //     if (timer) clearTimeout(timer);
    //     timer = setTimeout(() => {
    //       func();
    //     }, delay);
    //   };
    // },

    tabClick(index) {
      switch (index) {
        case 0:
          this.curType = "pop";
          break;
        case 1:
          this.curType = "new";
          break;
        case 2:
          this.curType = "sell";
      }
      this.$refs.tabControl1.curIndex = index;
      this.$refs.tabControl2.curIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentPosition(position) {
      //返回顶部
      this.isShow = -position.y > 1000;

      //固定tabControl
      this.isTabFixed = -position.y > this.tabDistance;
    },
    imgItemLoad() {
      this.getHomeGoods(this.curType);
    },
    swiperImgLoad() {
      this.tabDistance = this.$refs.tabControl2.$el.offsetTop;
    },

    /**
     * 关于网络请求的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        //标识一次上拉加载动作结束
        this.$refs.scroll.finishPullUp();
      });
    }
  }
};
</script>

<style  scoped>
#home {
  position: relative;
  /* padding-top: 44px; */
  height: 100vh;
}
.navbar {
  background: lightcoral;
  color: #fff;
  /* position: fixed; */
  /*left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.content {
  /* position: absolute;
  height: calc(100% - 49px);
  overflow: hidden; */

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

.tab-control {
  position: relative;
  margin-top: -1px;
}
</style>