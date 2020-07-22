<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">商城</div>
    </nav-bar>
    <profile-signin />
    <profile-balance />
    <profile-info :infoList="infoList"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar";
import ProfileSignin from "./profileChild/ProfileSignin";
import ProfileBalance from "./profileChild/ProfileBalance";
import ProfileInfo from "./profileChild/ProfileInfo";


export default {
  name: "Profile",
  components: {
    NavBar,
    ProfileSignin,
    ProfileBalance,
    ProfileInfo
  },
  data() {
    return {
      infoList: [
        { img: "https://i.loli.net/2020/07/22/b6TJm41QtYVWSFq.png", value: "我的消息" },
        { img: "https://i.loli.net/2020/07/22/DA86OyepotqHNKJ.png", value: "积分商城" },
        { img: "https://i.loli.net/2020/07/22/8Lq5P6g4N93DMRo.png", value: "会员卡" },
        { img: "https://i.loli.net/2020/07/22/kExvlSVZYBWnhgj.png", value: "我的购物车" },
        { img: "https://i.loli.net/2020/07/22/iVE2zJLqnZ89olk.png", value: "下载购物app" }
      ]
    };
  }
};
</script>

<style  scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  border-bottom: 1px solid rgba(250, 250, 250, 0.4);
}
</style>