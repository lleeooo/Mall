<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>

    <scroll class="content" ref="scroll">
      <div class="category-main">
        <category-tabmenu :categorys="categorys" @selectIndex="selectIndex" class="tabmenu"  />
        <category-select :showCategory="showSubcategory" class="select" @selectImgLoad=" selectImgLoading"/>
      </div>
    </scroll>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar";
import scroll from "components/common/scroll/Scroll";

import CategoryTabmenu from "./categoryChild/CategoryTabmenu";
import CategorySelect from "./categoryChild/CategorySelect";

//网络请求
import { getCategory, getSubcategory } from "network/category";

export default {
  name: "Category",
  data() {
    return {
      categorys: [],
      categoryData: {},
      curIndex: 0
    };
  },
  components: {
    NavBar,
    CategoryTabmenu,
    CategorySelect,
    scroll
  },
  created() {
    this._categorys();
  },
  methods: {
    //请求页面导航栏数据
    _categorys() {
      getCategory().then(res => {
        //1.初始化数据
        this.categorys = res.data.category.list;

        //2.初始化每个类别的子数据
        for (let i = 0; i < this.categorys.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: []
            }
          };
        }
        //3.请求第一个选项的数据
        this._getSubcategories(0);
      });
    },

    //请求分类的数据
    _getSubcategories(index) {
      this.curIndex = index;
      const maitKey = this.categorys[index].maitKey;
      getSubcategory(maitKey).then(res => {
        this.categoryData[index].subcategories = res.data;

        // console.log(this.categoryData)
        this.categoryData = { ...this.categoryData };
        // console.log(this.categoryData)
      });
    },

    //接收点击的对应角标 并且让它去获取对应选项的数据
    selectIndex(index) {
      this._getSubcategories(index);
    },
    selectImgLoading(){
      this.$refs.scroll.refresh()
    }

  },

  computed: {
    showSubcategory() {
      if (this.curIndex === -1) return {};
      //做判断 判断里面有值 再返回出去 不然会报错
      if (Object.keys(this.categoryData).length !== 0) {
        return this.categoryData[this.curIndex].subcategories.list;
      }
    }
  }
};
</script>

<style  scoped>
.category{
  height: 100vh;
  position: relative;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content{
  height: calc(100% - 93px);
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tabmenu {
  width: 100px;
  height: 100%;
}
.select {
  width: calc(100% - 100px);
}
.category-main {
  display: flex;
}
</style>