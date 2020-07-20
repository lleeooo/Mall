<template>
  <div class="commonent" v-if="Object.keys(commentInfo).length !== 0">
    <div class="common-top">
      <span class="common-top-title">用户评价</span>
      <span class="more">更多
        <img src="~assets/img/common/next.png" alt="">
      </span>
    </div>
    <div class="common-main">
      <div class="common-main-user">
        <div class="userImg">
          <img :src="commentInfo.user.avatar" alt="">
        </div>
        <div class="userName">{{commentInfo.user.uname}}</div>
      </div>
      <div class="common-main-tittle">
        <span>{{commentInfo.content}}</span>
      </div>
      <div class="common-main-info">
        <span class="info-date">{{commentInfo.created | showDate}}</span>
        <span class="info-news">
          {{commentInfo.style}}
        </span>
        <div class="info-img">
          <img  v-for="(item , index) in commentInfo.images" :key="index" :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromatDate } from "@/common/utils.js";
export default {
  name: "DetailComment",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    //将时间戳转为时间
    showDate(value) {
      return fromatDate(value);
    }
  }
};
</script>
  
<style scoped>
.commonent{
  padding: 10px 15px;
  border-top: 5px solid #f2f5f8;
}

.common-top{
  border-bottom: 2px solid #f2f5f8;
  padding: 15px 0;
  font-size: 14px;
  color: #333;
  display: flex;
  justify-content: space-between;
}
.common-top .more img{
  width: 14px;
  position: relative;
  top: 1px;
}

.common-main {
  padding: 15px 0;
}
.common-main .common-main-user{
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  color: #333;
}
.common-main .common-main-user .userImg img{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 15px;
}

.common-main  .common-main-tittle{
  font-size: 14px;
  margin-bottom: 15px;
}

.common-main .common-main-info {
  font-size: 10px;
  color: #999;
}
.common-main .common-main-info .info-date{
  margin-right: 10px;
}
.common-main .common-main-info .info-img{
  margin-top: 10px;
}
.common-main .common-main-info img{
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>