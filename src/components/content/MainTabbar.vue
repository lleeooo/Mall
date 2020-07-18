<template>
  <div>
    <tabbar>
      <tabbar-item path="/home" activeColor="#ff7300">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/home-active.svg" />
        <div slot="item-text">首页</div>
      </tabbar-item>

      <tabbar-item path="/category" activeColor="#ff7300">
        <img slot="item-icon" src="~assets/img/tabbar/categories.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/categories-active.svg" />
        <div slot="item-text">分类</div>
      </tabbar-item>

      <tabbar-item path="/shopcart" activeColor="#ff7300">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart-active.svg" />
        <div slot="item-text">购物车</div>
      </tabbar-item>

      <tabbar-item path="/profile" activeColor="#ff7300">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" />
        <img slot="item-icon-active" src="~assets/img/tabbar/profile-active.svg" />
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "components/common/tabbar/Tabbar";
import tabbarItem from "components/common/tabbar/TabbarItem";

export default {
  name: 'MainTabbar',
  components:{
    tabbar,
    tabbarItem
  }
}
</script>

<style  scoped>

</style>