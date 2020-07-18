<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div  class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index - 1].icon" alt />
        <span>{{goods.services[index - 1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
    }
  }
};
</script>

<style scoped>
.base-info{
  margin: 15px 10px;
}

.info-title {
  color: #222;
  font-size: 16px;
}
.info-price{
  margin: 15px 0;
  position: relative;
}
.info-price .n-price{
  font-size: 24px;
  color: var(--color-hight-text);
}
.info-price .o-price{
  font-size: 14px;
  color: gray;
  text-decoration:line-through;
  margin:  0 6px;
}
.info-price .discount{
  font-size: 12px;
  background: var(--color-hight-text);
  color: #fff;
  padding: 3px ;
  border-radius: 30%;
  position: absolute;
  top: -3px;
}

.info-other{
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: 25px;
  padding-bottom: 10px;
  color: #999;
  border-bottom: 1px solid #eee;
}

.service{
  display: flex;
  margin: 20px 0;
  font-size: 13px;
  justify-content: space-around;
  color: #222;

  border-bottom: 5px solid #f2f5f8;
  padding-bottom: 30px;
}

.service .info-service-item img{
  position: relative;
  top: 2px;
  width: 14px;
  height: 14px;
}



</style>