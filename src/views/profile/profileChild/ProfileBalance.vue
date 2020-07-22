<template>
  <div class="balance">
    <div class="balance-item">
      <div class="balance-info">
        <span class="number">0.00</span>元
      </div>
      <div class="text">我的余额</div>
    </div>
    <div class="balance-item  balance-center">
      <div class="balance-info">
        <span class="number">0</span>个
      </div>
      <div class="text">我的优惠</div>
    </div>
    <div class="balance-item">
      <div class="balance-info">
        <span class="number">0</span>分
      </div>
      <div class="text">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileBalance"
};
</script>

<style scoped>
.balance{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  font-size: 14px;
  border-bottom: 7px solid #f2f2f2;
  margin-top: 10px ;
  padding-bottom: 10px;
}
.number{
  color: orangered;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
}
.text{
  font-size: 12px;
  text-align: center;
  padding-top: 5px;
}
.balance-item .balance-info{
  text-align: center;
}


</style>