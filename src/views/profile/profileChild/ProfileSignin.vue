<template>
  <div class="sign-in">
    <div class="sign-in-left">
      <div class="sign-in-img">
        <img src="~assets/img/profile/signin.png" />
      </div>

      <div class="sign-in-info">
        <div>登录/注册</div>
        <div class="info-iphon">
          <img src="~assets/img/profile/iphone.png" alt />
          <span>暂无绑定手机</span>
        </div>
      </div>
    </div>

    <div class="sign-in-right">
      <div class="next">
        <img src="~assets/img/profile/next.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileSignin"
};
</script>

<style scoped>

.sign-in {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  font-weight: 500;
  padding: 20px 10px;
  color: #fff;
  background-color: var(--color-tint);
}

.sign-in-left {
  display: flex;
  align-items: center;
}
.sign-in-img {
  width: 60px;
  height: 60px;
}
.sign-in-img img {
  width: 100%;
}
.sign-in-info{
  padding-left: 10px;
 
}
.sign-in-info .info-iphon{
  display: flex;
  align-items: center;
  padding-top: 3px;
  margin-left: -4px;

 font-size: 14px;
  font-weight: normal;
}
.sign-in-info .info-iphon img {
  width: 10%;
}
.next {
  width: 20px;
  height: 20px;
}
.next img {
  width: 100%;
}
</style>