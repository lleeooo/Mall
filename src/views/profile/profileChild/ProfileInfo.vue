<template>
  <div class="profile-info">
    <div v-for="(item , index) in infoList" :key="index" class="info-item">
      <div class="info-img">
        <img :src="item.img" alt />
      </div>
      <div class="info-value">{{item.value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileInfo",
  props: {
    infoList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.info-item {
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #eee;
  align-items: center;
  font-size: 14px;
  color: #333;
}
.info-item .info-img {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
.info-item .info-img img {
  width: 100%;
}

.info-item:nth-of-type(3){
  border-bottom: 7px solid #eee ;
}
</style>