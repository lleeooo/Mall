<template>
  <div :class="{isCheck: isCheck}" class="check">
    <img src="~assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isCheck: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.check {
  border: 2px solid #ccc;
  border-radius: 50%;
  padding: 2px;
}
.isCheck {
  background: orangered;
}
.check img {
  width: 15px;
  height: 15px;
  position: relative;
  top: 1px;
}
</style>