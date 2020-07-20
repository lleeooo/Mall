<template>
  <div class="cart-list">
    <cart-listitem v-for="(item , index) in cartList" :key="index" :product="item"/>
  </div>
</template>

<script>
import CartListitem from './CartListItem'


import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    CartListitem
  },
  computed: {
    ...mapGetters(["cartList"])
  }
};
</script>


<style scoped>

</style>