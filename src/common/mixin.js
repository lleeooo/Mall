import BackTotop from "components/content/backTotop/BackTotop";

export const backTopMinxin = {
  data(){
    return{
      isShow: false,
    }
  },
  components:{
    BackTotop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0 , 300);
    },
  }
}