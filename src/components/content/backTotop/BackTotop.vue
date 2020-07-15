<template>
  <div class="backTotop">
    <img src="~assets/img/home/backTotop1.png" />
  </div>
</template>

<script>
export default {
  name: "BackTotop"
};
</script>

<style scoped>
.backTotop{
  position: fixed;
  right: -110px;
  bottom: 70px;
}
.backTotop img{
  width: 20%;
  height: 20%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
}

</style>