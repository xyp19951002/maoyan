<template>
  <div>
    <nav>
      <span class="iconfont icon-houtui" v-if="hasBack"></span>
      <span class="nav-left">猫眼电影</span>
      <span class="iconfont icon-mulu"></span>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    hasBack: Boolean
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/var.scss";

nav {
  height: 50px;
  background: $theme-color;
  position: relative;
  .icon-houtui {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
  }
  .nav-left {
    display: inline-block;
    width: 270px;
    height: 100%;
    line-height: 50px;
    margin-left: 52px;
    text-align: center;
    color: #fff;
    font-size: 18px;
  }
  .icon-mulu {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
  }
}
</style>
