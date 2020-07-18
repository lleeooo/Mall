<template>
  <Swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt @load="swiperImgLoad" />
      </a>
    </swiper-item>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: true
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    swiperImgLoad() {
      if (this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = false
      }
    }
  }
};
</script>


<style scoped>
</style>