<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item , index) in titles" :key="index" :class="{active: index === curIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles: {
      type: Array,
      define(){
        return []
      }
    }
  },
  data(){
    return {
      curIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.curIndex = index,
      this.$emit('tabClick' , index)
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  margin-top: 2px;
  z-index: 9;
}

.tab-control-item{
  flex: 1;
  background: rgb(248, 250, 250);
  border: #fff;
}

.tab-control-item.active span{
  color: #ff8198;
  border-bottom: 2px solid #ff8198;
  padding-bottom: 2px;
}


</style>