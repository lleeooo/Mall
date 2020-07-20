<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="goods-info-title clearfix">
      <div class="title-start"></div>
      <div class="title-desc">{{detailInfo.desc}}</div>
      <div class="title-end"></div>
    </div>
    <div class="goods-info-effetc">{{detailInfo.detailImage[0].key}}</div>
    <div class="goods-info-imglist">
      <img v-for="(item , index) in detailInfo.detailImage[0].list" :src="item" alt :key="index" @load="goodsImagesLoad"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data(){
    return{
      counter:0
    }
  },
  methods: {
    goodsImagesLoad(){
      if( ++this.counter == this.detailInfo.detailImage[0].list.length){
        this.$emit('goodsImagesLoad')
      }
    }
  }
};
</script>

<style scoped>
.goods-info {
  padding-top: 20px;
  border-top: 5px solid #f2f5f8;
}

.goods-info-title {
  padding: 10px 15px;
  font-size: 13px;
}
.goods-info-title .title-start {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
  float: left;
}
.goods-info-title .title-start::before {
  content: "";
  width: 5px;
  height: 5px;
  background-color: black;
  position: absolute;
  bottom: 0;
}

.goods-info-title .title-desc {
  margin: 10px 0;
  line-height: 1.5;
}

.goods-info-title .title-end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
  float: right;
}
.goods-info-title .title-end::before {
  content: "";
  width: 5px;
  height: 5px;
  background-color: black;
  position: absolute;
  bottom: 0;
  right: 0;
}
.clear-fix::after {
  clear: both;
  content: "";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden; /*让clear-fix不可见 但是空间上存在*/
}

.goods-info-effetc {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}

.goods-info-imglist img{
  width: 100%;
}
</style>