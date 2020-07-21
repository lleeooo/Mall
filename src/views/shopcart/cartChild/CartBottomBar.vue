<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button :isCheck="isSelectAll" @click.native="checkClick" />
      <span>全选</span>
    </div>
    <div class="produce-price">
      <div>合计：￥{{totalPrice}}</div>
      <span @click="settlement">结算</span>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      let price = 0;
      this.$store.state.cartList
        .filter(item => {
          return item.checked;
        })
        .forEach(ele => {
          price += ele.realPrice * ele.count;
        });
      return price;
    },
    isSelectAll() {
      //进行判断 一旦购物车里的商品里面有没选中的就返回出来，返回出来了就代表有长度，有值的数取反会得到false 但是如果购物车里一开始就没东西 我们要返回出去false
      if (this.$store.state.cartList.length === 0) return false;
      return !this.$store.state.cartList.filter(item => !item.checked).length;
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        //为true表示现在是全部选择状态 需要点击一下 取消全部选择
        this.$store.state.cartList.forEach(ele => (ele.checked = false));
      } else {
        //如果不是true 表示有些没有选中 需要点击 全部选中
        this.$store.state.cartList.forEach(ele => ele.checked = true)
      }
    },
    settlement(){
      if(this.$store.state.cartList.length === 0 || !this.$store.state.cartList.filter(ele => ele.checked).length){
        this.$toast.show('请选择商品')
      }
    }
    
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  display: flex;
  align-items: center;
  padding-left: 20px;
  justify-content: space-between;
}
.check-content {
  display: flex;
  align-items: center;
}
.check-content span {
  padding-left: 10px;
  position: relative;
  font-weight: bold;
  font-size: 14px;
}

.produce-price {
  padding-right: 20px;
  font-size: 15px;
  display: flex;
  align-items: center;
}
.produce-price span {
  font-size: 16px;
  margin-left: 10px;

  background-color: #ff4200;
  color: #fff;
  padding: 5px 8px;
  border-radius: 5px;
}
</style>