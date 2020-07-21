<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    show(mess, time=1500) {
      this.isShow = true;
      this.message = mess;
      setTimeout(() => {
        this.isShow = false;
        this.messsage = "";
      }, time);
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background-color: rgba(0, 0, 0, 0.7);
  padding: 15px 25px;
  font-size: 17px;
  color: #fff;

  border-radius: 6px;

  z-index: 999;
}
</style>