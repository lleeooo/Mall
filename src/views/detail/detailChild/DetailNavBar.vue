<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left">
        <div class="back" @click="backClick">
          <img src="~assets/img/back/back.svg" alt />
        </div>
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item , index) in title"
          :key="index"
          class="title-item"
          @click="titleClick(index)"
          :class="{active: index === curIndex}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/Navbar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      title: ["商品", "评论", "参数" ,"推荐"],
      curIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.curIndex = index;
      this.$emit('navItemClick' , index)
      
    },
    backClick(){
      this.$router.back()
    }
  }
};
</script>


<style scoped>
.nav-bar{
  border-bottom: 1px solid #eee;

}
.title {
  display: flex;
}
.title .title-item {
  flex: 1;
  font-size: 14px;
}
.active {
  color: var(--color-hight-text);
}

/* .back{
  width: 100%;
  height: 100%;
} */

.back img {
  /* width: 100%; */
  position: absolute;
  top: 12px;
  left: 23px;
}
</style>