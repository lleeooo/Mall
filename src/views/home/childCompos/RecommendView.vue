<template>
  <div class="recommend"> 
    <div v-for="(item , index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="recommendTitle">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>


<style scoped>
  .recommend{
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 14px;

    padding-bottom: 20px;

    border-bottom: 10px solid #eee;
  }
  .recommend img{
    width: 85%;
    margin: 5px 0 5px 0;
  }
  .recommend .recommend-item{
    flex: 1;
  }
  .recommend .recommendTitle{
    color: #ff8198;
  }

</style>