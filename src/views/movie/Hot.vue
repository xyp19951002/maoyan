<template>
  <div class="main-contain">
    <section>
      <my-popular :popular="popular" />
      <my-movie-list :movielist="movielist" :isBottom="isBottom" />
    </section>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

import MyPopular from "com/home/MyPopular";
import MyMovieList from "com/home/MyMovieList";

import { getPopularMovieApi, getMovieList, postMovieList } from "@/utils/api";

export default {
  data() {
    return {
      popular: [],
      movielist: [],
      // 电影总条数
      count: 0,
      // 所有电影的id
      ids: [],
      // 从哪里开始上拉加载
      start: 0,
      // 每次获得的条数
      num: 5
    };
  },

  components: {
    MyPopular,
    MyMovieList
  },

  computed: {
    isBottom() {
      return this.start >= this.count;
    }
  },

  mounted() {
    this.popularMovie();
    this.MovieList();
  },

  methods: {
    async popularMovie() {
      const res = await getPopularMovieApi();
      this.popular = res.result;
    },
    async MovieList() {
      const res = await getMovieList();
      this.movielist = res.result;
      this.count = res.count;
      this.ids = res.ids;
      this.start = this.movielist.length;

      await this.$nextTick();
      const bs = new BetterScroll(".main-contain", {
        scrollX: false,
        scrollY: true,
        click: true,
        // 是否上拉加载
        pullUpLoad: true
      });

      // 滚动条拉到底触发（监听滚动到底事件）
      bs.on("pullingUp", async () => {
        const arr = this.ids.slice(this.start, this.start + this.num);
        const str = arr.join();
        const res = await postMovieList({
          ids: str
        });
        this.movielist = this.movielist.concat(res.result);
        this.start += this.num;
        await this.$nextTick();
        bs.refresh();
        if (this.start <= this.count) {
          bs.finishPullUp();
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.main-contain {
  position: absolute;
  top: 97px;
  left: 0;
  right: 0;
  bottom: 48px;
  overflow: hidden;
}
</style>
