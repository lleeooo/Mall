<template>
  <div class="goods-list">
    <goods-listitem v-for="(item , index) in goods" :key="index" :goodsitem="item" />
  </div>
</template>

<script>
import GoodsListitem from "./GoodsListitem";

export default {
  name: "GoodsList",
  components: {
    GoodsListitem
  },
  props: {
    goods: {
      type: Array,
      define() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  

}
</style>