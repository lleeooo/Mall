<template>
  <div class="select clear-fix" v-if="Object.keys(showCategory).length !==0">
    <div class="select-item " v-for="(item , index) in showCategory" :key="index">
      <a :href="item.link">
        <img v-lazy="item.image" alt="" @load="selectImgLoad">
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategorySelect",
  props: {
    showCategory: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    selectImgLoad(){
      // this.$emit("selectImgLoad")
      this.$emit('selectImgLoad')
    }
  }

}
</script>

<style scoped>
.select{
  display: flex;
  flex-wrap: wrap;
}

.select-item{
  width: 80px;
  margin:10px 4px;
  text-align: center;
  font-size: 13px;
  color: #333;

}
.select-item a img{
  width: 80%;
}
.select-item a .title{
  margin-top: 10px;
}
</style>