<template>
  <div>
    <ul class="contain">
      <my-movie-item
        v-for="(item, index) in movielist"
        :key="index"
        :item="item"
      />
    </ul>
    <p v-if="isBottom">到底了</p>
  </div>
</template>

<script>
import MyMovieItem from "com/home/MyMovieItem";
export default {
  props: {
    movielist: Array,
    isBottom: Boolean
  },
  data() {
    return {};
  },

  components: {
    MyMovieItem
  },

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang="scss" scoped>
.contain {
  background: #fff;
}
</style>
