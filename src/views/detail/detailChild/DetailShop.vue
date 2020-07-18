<template>
  <div class="shop" v-if="Object.keys(shop).length !== 1">
    <div class="shop-title">
      <img :src="shop.log" alt />
      <span class="shop-name">{{shop.name}}</span>
    </div>
    <div class="shop-data">
      <div class="shop-sales-goods">
        <div class="shop-sales">
          <div class="shop-sales-number">{{shop.sells}}</div>
          <div class="shop-sales-text">总销量</div>
        </div>
        <div class="shop-goods">
          <div class="shop-goods-number">{{shop.goodsCount}}</div>
          <div class="shop-goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-score">
        <table>
          <tr v-for="(item , index) in shop.score" :key="index">
            <td class="shop-score-text">{{item.name}}</td>
            <td :class="{isBetter: item.isBetter}" class="shop-score-number">{{item.score}}</td>
            <td >
              <span :class="{isBetter: item.isBetter}" class="shop-score-hight">{{item.isBetter ? '高' : '低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shop: {
      type: Object,
      define() {
        return {};
      }
    }
  }
};
</script>


<style scoped>
.shop{
  padding: 15px  10px 25px;


}
.shop-title{
  line-height: 45px;  

}
.shop-title img{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid #eee;
}
.shop-title .shop-name{
  margin-left: 15px;
  position: relative;
  top: -15px;
}
.shop-data{
  display: flex;
  justify-content: space-between;
}

.shop-data .shop-sales-goods{
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-right: 1px solid #eee;
}
.shop-data .shop-sales-goods .shop-sales .shop-sales-number{
  margin-bottom: 8px;
  font-size: 18px;
  color: #333;
}
.shop-data .shop-sales-goods .shop-sales .shop-sales-text{
  font-size: 12px;
  color: #333;
  text-align: center;
}
.shop-data .shop-goods .shop-goods-number{
  margin-bottom: 8px;
  font-size: 18px;
  color: #333;
  text-align: center;
}
.shop-data .shop-goods .shop-goods-text{
  font-size: 12px;
  color: #333;
  text-align: center;
}
.shop-data .shop-score{
  width: 50%;
  display: flex;
  justify-content: center;
}
.shop-data .shop-score  table{
  width: 120px;
}
.shop-data .shop-score td {
  padding: 5px 0;
  font-size: 13px;
  color: #333;  

}
.shop-data .shop-score .shop-score-number,.shop-score-hight{
  color: #5ea732;
}
.shop-data .shop-score .shop-score-hight{
  background: #5ea732;
  color: #fff;
}
.shop-data .shop-score .shop-score-number.isBetter{
  color: #f13e3a;
}
.shop-data .shop-score .shop-score-hight.isBetter{
  background-color: #f13e3a;
}


</style>