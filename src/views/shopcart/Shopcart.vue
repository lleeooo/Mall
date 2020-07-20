<template>
    <div class="shopcart">
      <nav-bar class="navbar">
        <div  slot="center">购物车({{cartLength}})</div>
      </nav-bar>
    </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar"

import {mapGetters} from 'vuex'

export default {
  name: "Shopcart",
  components: {
    NavBar
  },
  computed:{
    //将路由中的getters方法 拿过来当computed方式使用
    //第一种写法  不能自定义方法名字
    // ...mapGetters(['cartLength'])
    //第二种写法 能自定定义拿过来的getters的方法的名字
    ...mapGetters({
      cartLength: 'cartLength'
    })
  }
}
</script>

<style  scoped>
.navbar{
  background-color: var(--color-tint);
  color: #fff;
}

</style>