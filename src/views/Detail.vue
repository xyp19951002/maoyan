<template>
  <div>
    <detail-top :detailData="detailData" />
    <button @click="change">按钮</button>
  </div>
</template>

<script>
import { postDetail } from "../utils/api";
import DetailTop from "com/detail/DetailTop";
export default {
  // props: ["movieId"],
  data() {
    return {
      // id: this.movieId,
      id: "",
      detailData: {}
    };
  },

  created() {
    this.id = this.$route.params.movieId;
  },

  components: {
    DetailTop
  },

  // 数据请求
  mounted() {
    // this.postDetailData();
  },

  async beforeRouteEnter(to, from, next) {
    const res = await postDetail({ id: to.params.movieId });
    next(vm => {
      vm.detailData = res.result;
    });
  },

  methods: {
    async postDetailData() {
      // 请求数据
      const res = await postDetail({ id: this.id });
      this.detailData = res.result;
    },

    // // 页面不改变，如果想组件复用，还需要使用beforeRouteUpdate
    change() {
      this.$router.push("/detail/1203282");
    }
  },

  beforeRouteUpdate(to, from, next) {
    this.id = to.params.movieId;
    this.postDetailData();
    next();
  }
};
</script>
<style lang="scss" scoped></style>
