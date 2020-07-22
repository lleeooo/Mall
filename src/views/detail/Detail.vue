<template>
  <div id="Detail" >
    <detail-navBar class="detail-nav" @navItemClick="navItemClick" ref="detailNav" />
    <Scroll class="contont" ref="scroll" :probeType="3" @scroll="contentScroll">

      <detail-swiper :topImages="topImages"/>
      <detail-baseinfo :goods="goods"/>
      <detail-shop :shop="shop" />
      <detail-comment ref="comment" :commentInfo="commentInfo" />
      <detail-goodsInfo :detailInfo="detailInfo" @goodsImagesLoad="goodsImagesLoad" />
      <detail-goodsparams ref="params" :goodsParams="goodsParams" />
      <goods-list :goods="recommends" ref="recommends" />
    </Scroll>


    <DetailBottomBar @joinShopcart="joinShopcart"/>
    <BackTotop @click.native="backClick" v-show="isShow"/>

  </div>
</template> 

<script>
import Scroll from "components/common/scroll/Scroll";

import DetailNavBar from "./detailChild/DetailNavBar";
import DetailSwiper from "./detailChild/DetailSwiper";
import DetailBaseinfo from "./detailChild/DetailBaseInfo";
import DetailShop from "./detailChild/DetailShop";
import DetailGoodsInfo from "./detailChild/DetailGoodsInfo";
import DetailGoodsparams from "./detailChild/DetailGoodsParams";
import DetailComment from "./detailChild/DetailComment";
import GoodsList from "components/content/goods/GoodsList";
import DetailBottomBar from "./detailChild/DetailBottomBar"
import { debounce } from "@/common/utils.js";
import {backTopMinxin} from "@/common/mixin.js"



import {
  getDetail,
  Goods,
  Shop,
  GoodsParams,
  getRecommends
} from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParams: {},
      commentInfo: {},
      recommends: [],
      themeTopy: [],
      getThemeTopy: null,
      curIndex: 0
    };
  },
  mixins:[backTopMinxin],
  components: {
    Scroll,

    DetailNavBar,
    DetailSwiper,
    DetailBaseinfo,
    DetailShop,
    DetailGoodsInfo,
    DetailGoodsparams,
    DetailComment,
    GoodsList,
    DetailBottomBar,


  },
  methods: {
    goodsImagesLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopy();
    },

    //点击navbar 跳转到对应位置 要加上导航栏的高度
    navItemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopy[index] + 44, 100);
    },

    contentScroll(position) {
      //当在评论区域取1 参数取2 推荐取3
      let length = this.themeTopy.length;
      for (let index = 0; index < length; index++) {
        //为了不多次调用 先进行判断
        if (this.curIndex !== index) {
          if (
            (index < length - 1 && //商品、评论、参数的取角标：当index在0-2之间时 并且 区域是在评论 参数 他们的区域间时，把对应的index保存下来
              -position.y + 44 >= this.themeTopy[index] &&
              -position.y + 44 < this.themeTopy[index + 1]) ||
            //推荐的取角标： 当index是3时 并且 区域是在超过了参数的区域的时候 把角标保存下来
            (index === length - 1 && -position.y + 44 >= this.themeTopy[index])
          ) {
            this.curIndex = index;
            //把保存的角标传到navbar里进行对应的改变
            this.$refs.detailNav.curIndex = this.curIndex
          }
        }
      }
      this.isShow = -position.y > 1000;
    },


    //将商品添加进购物车
    joinShopcart(){
      //1.获取信息
      const product = {}
      product.img = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.realPrice =this.goods.realPrice
      product.iid = this.iid
      product.count = 0


      //2.将商品添加到购物车中
      this.$store.dispatch('addCart' , product).then(res => {
        this.$toast.show(res)
      })

    }
  },
  created() {
    //获取点击图片的iid
    this.iid = this.$route.params.iid;

    //将对应iid的数据拿出
    getDetail(this.iid).then(res => {
      //1.拿出轮播图的图片
      this.topImages = res.result.itemInfo.topImages;
      const data = res.result;

      //2.获取商品的数据
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      //3.获取店铺信息
      this.shop = new Shop(data.shopInfo);

      //4.获取商品展示信息
      this.detailInfo = data.detailInfo;

      //5.商品尺寸信息的获取
      this.goodsParams = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );

      //6.获取评论信息
      this.commentInfo = data.rate.list[0];
    });

    //获取热门推荐信息
    getRecommends().then(res => {
      this.recommends = res.data.list;
    });

    this.getThemeTopy = debounce(() => {
      this.themeTopy = [];
      this.themeTopy.push(0);
      this.themeTopy.push( this.$refs.comment.$el.offsetTop);
      this.themeTopy.push(this.$refs.params.$el.offsetTop);
      this.themeTopy.push(this.$refs.recommends.$el.offsetTop);
    }, 300);
  },

  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on("detailimgItemLoad", () => {
      refresh();
    });
  }
};
</script>

<style scoped>
#Detail {
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}

.contont {
  height: calc(100% - 44px);
  background-color: #fff;
  z-index: 9;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>