<template>
  <li>
    <div class="img-contain">
      <img :src="item.img | formatUrl" alt="" />
    </div>
    <div class="right-contain">
      <div class="text-main">
        <h2>{{ item.nm }}</h2>
        <p class="score">
          观众评
          <span>{{ item.sc }}</span>
        </p>
        <div class="score">主演: {{ item.star }}</div>
        <div class="score">{{ item.showInfo }}</div>
      </div>
    </div>
    <div class="buy" v-if="item.showst === 3">购票</div>
    <div class="buy sale" v-if="item.showst === 4">预售</div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return {};
  },

  filters: {
    formatUrl(val) {
      return val.split("/w.h").join("");
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/var.scss";
li {
  height: 114px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 1px;
  .img-contain {
    img {
      width: 64px;
      height: 90px;
    }
  }
  .right-contain {
    padding: 12px 14px 12px;
    height: 100%;
    .text-main {
      width: 202px;
      h2 {
        font-size: 17px;
        font-weight: bold;
      }
      .score {
        margin-top: 6px;
        width: 100%;
        font-size: 13px;
        @include text-overflow;
        span {
          font-size: 15px;
          font-weight: bold;
          color: #faaf00;
        }
      }
    }
  }
  .buy {
    width: 47px;
    height: 27px;
    line-height: 27px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    background: $theme-color;
  }
  .sale {
    background: #3c9fe6;
  }
}
</style>
