<template>
  <div class="goods-item" @click="itemClick">
    <img :src="getImage" @load="imgload" />
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="cfav">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListitem",
  props: {
    goodsitem: {
      type: Object,
      definde() {
        return {};
      }
    }
  },
  methods: {
    imgload() {
      if(this.$route.path.indexOf('/home') !== -1){
        this.$bus.$emit("homeimgItemLoad");
      }else if(this.$route.path.indexOf('/detail') !== -1){
        this.$bus.$emit("detailimgItemLoad")
      }
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsitem.iid);
    }
  },
  computed: {
    getImage() {
      return this.goodsitem.image || this.goodsitem.show.img;
    }
  }
};
</script>

<style scoped>
.goods-item {
  margin-bottom: 30px;

  width: 48%;
  position: relative;
  padding: 0 2px;
  padding-bottom: 50px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  bottom: 5px;
  text-align: center;
}

.goods-info p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 5px;
}
.goods-info .price {
  color: var(--color-hight-text);
  margin-right: 30px;
}

.goods-info .cfav {
  position: relative;
}
.goods-info .cfav::before {
  background: url("~assets/img/goodsCollect/collect.svg") 0 0/12px 12px;
  content: "";
  position: absolute;
  left: -17px;
  top: 0;
  width: 12px;
  height: 12px;
}
</style>