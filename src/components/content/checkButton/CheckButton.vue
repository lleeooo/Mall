<template>
  <div :class="{isCheck: isCheck}" class="check" >
    <img src="~assets/img/cart/tick.svg" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isCheck: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.check {
  border: 2px solid #ccc;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  padding: 2px;
}
.isCheck {
  background: orangered;
  border: 2px solid orangered;
}
.check img {
  width: 15px;
  height: 15px;
  position: relative;
  top: 1px;
  left: 1px;
}
</style>