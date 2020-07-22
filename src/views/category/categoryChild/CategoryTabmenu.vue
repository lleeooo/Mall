<template>
  <div class="tab-menu">
    <div class="tab-menu-item" v-for="(item , index) in categorys" :key="index" @click="itemClick(index)" :class="{active : curIndex === index}">
      {{item.title}}
    </div>

  </div>
</template>

<script>
export default {
  name: "CategoryTabmenu",
  props: {
    categorys: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      curIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.curIndex = index
      this.$emit('selectIndex' , index)
    }
  }
}
</script>


<style scoped>
.tab-menu{
  background: #eee;
  width: 100px;
  /* height: 100vh; */
}
.tab-menu-item{
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}

.active{
  color: var(--color-hight-text);
  font-weight: bold;
  background-color: #fff;
  border-left: 3px solid var(--color-tint);
}

</style>