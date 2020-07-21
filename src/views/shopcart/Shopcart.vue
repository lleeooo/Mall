<template>
  <div id="shopcart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>

    <cart-bottom-bar class="bottom-bar"></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar";
import scroll from "components/common/scroll/Scroll";

import CartList from "./cartChild/CartList";
import CartBottomBar from './cartChild/CartBottomBar'

import { mapGetters } from "vuex";

export default {
  name: "Shopcart",
  components: {
    NavBar,
    scroll,
    CartList,
    CartBottomBar
  },
  computed: {
    //将路由中的getters方法 拿过来当computed方式使用
    //第一种写法  不能自定义方法名字
    // ...mapGetters(['cartLength'])
    //第二种写法 能自定定义拿过来的getters的方法的名字
    ...mapGetters({
      cartLength: "cartLength"
    })
  },

  activated(){
    this.$refs.scroll.refresh()
  }


};
</script>

<style  scoped>
#shopcart {
  position: relative;
  height: 100vh;
}

.navbar {
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9;
  
}

.content {
  position: fixed;
  top: 44px;
  bottom: 90px;
  left: 0;
  right: 0;
  height: calc(100%-90px);
  overflow: hidden;
}
.bottom-bar{
  position: fixed;
  bottom: 50px;
  width: 100%;
  /* z-index: 9; */
}
</style>