<template>
  <div class="cartlist-item">
    <div class="check">
      <check-button></check-button>
    </div>
    <div class="item-img">
      <img :src="product.img" alt />
    </div>
    <div class="item-text">
      <div class="title">{{product.title}}</div>
      <div class="desc">商品描述：{{product.desc}}</div>
      <div class="number">
        <div class="number-price">￥{{product.realPrice}}</div>
        <div class="number-count">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"
export default {
  name: "carListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    CheckButton
  }
};
</script>

<style scoped>
.cartlist-item {
  display: flex;
  padding: 5px;
  padding: 10px 10px 10px;
  border-bottom: 1px solid #ccc;
  align-items: center;
}
.check{
  margin-right:5px ;
}

.item-img img {
  width: 80px;
  height: 105px;
  display: block;
  border-radius: 5px;

}
.item-text {
  font-size: 17px;
  overflow: hidden;
  color: #333;
  padding-left: 15px;
}
.item-text .title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  padding-bottom: 15px;
}
.item-text .desc {
  font-size: 14px;
  color: #666;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  padding-bottom: 30px;
  
}
.item-text .number{
  display: flex;
  justify-content: space-between;
}
.item-text .number .number-price{
  color: orangered;
}
.item-text .number .number-count{
  color: #999;
}
</style>