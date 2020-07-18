<template>
  <div class="params-info" v-if="Object.keys(goodsParams).length !== 0">
    <table class="info-size" v-for="(table , index) in goodsParams.sizes" :key="index">
      <tr v-for="(tr , indey) in table" :key="indey">
        <td v-for="(td , indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info , index) in goodsParams.infos" :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="info-param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="Object.keys(goodsParams.image).length !== 0">
      <img :src="goodsParams.image" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsParams",
  props: {
    goodsParams: {
      type: Object,
      define() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.params-info {
  margin-top: 15px;
  padding: 25px 15px;
  border-top: 5px solid #f2f5f8;
  font-size: 14px;
  background-color: #fff;
}
.params-info table{
  width: 100%;
  border-collapse: collapse;

}

.info-size tr {
  height: 42px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  
}

.info-param {
  border-collapse: collapse;
}
.info-param tr {
  height: 42px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.info-param .info-param-key {
  width: 25%;
}
.info-param .info-param-value {
  width: 75%;
  color: var(--color-hight-text);
}
</style>