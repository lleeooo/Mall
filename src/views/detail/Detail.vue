<template>
  <div id="Detail">
    <detail-navBar class="detail-nav"></detail-navBar>

    <Scroll class="contont" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-baseinfo :goods="goods"></detail-baseinfo>
      <detail-shop :shop="shop" />
      <detail-goodsInfo :detailInfo="detailInfo" @goodsImagesLoad="goodsImagesLoad"/>
    </Scroll>
  </div>
</template> 

<script>
import Scroll from "components/common/scroll/Scroll";

import DetailNavBar from "./detailChild/DetailNavBar";
import DetailSwiper from "./detailChild/DetailSwiper";
import DetailBaseinfo from "./detailChild/DetailBaseInfo";
import DetailShop from "./detailChild/DetailShop";
import DetailGoodsInfo from './detailChild/DetailGoodsInfo'

import { getDetail, Goods, Shop } from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {}

    };
  },
  components: {
    Scroll,

    DetailNavBar,
    DetailSwiper,
    DetailBaseinfo,
    DetailShop,
    DetailGoodsInfo
  },
  methods: {
    goodsImagesLoad(){
      this.$refs.scroll.refresh()
    }
  },
  created() {
    //获取点击图片的iid
    this.iid = this.$route.params.iid;

    //将对应iid的数据拿出
    getDetail(this.iid).then(res => {
      //1.拿出轮播图的图片
      this.topImages = res.result.itemInfo.topImages;
      console.log(res);
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
      this.detailInfo = data.detailInfo
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
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>