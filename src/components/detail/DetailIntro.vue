<template>
  <div>
    <div class="intro" v-if="detailData.nm">
      <div class="title">
        <span>猫眼电影 > {{ detailData.nm }}</span>
      </div>
      <div class="intro-detail">
        <div class="img-contain">
          <img :src="detailData.img | formatUrl" alt="" />
        </div>
        <div class="text-contain">
          <h2>{{ detailData.nm }}</h2>
          <p>{{ detailData.enm }}</p>
          <p>{{ detailData.cat }}</p>
          <p>{{ detailData.star | formatCat }}</p>
          <p>{{ detailData.pubDesc + " / " + detailData.dur + "分钟" }}</p>
          <div class="button-contain">
            <div class="button">
              <img
                src="https://s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/want-to-watch.png"
                alt=""
              />
              <span>想看</span>
            </div>
            <div class="button">
              <img
                src="https://s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star.png"
                alt=""
              />
              <span>看过</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-else>加载中。。。</div> -->
  </div>
</template>

<script>
export default {
  props: {
    detailData: Object
  },
  data() {
    return {};
  },
  filters: {
    formatUrl(val) {
      return val.split("/w.h").join("");
    },
    formatCat(val) {
      return val.split(",").join(" / ");
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
.intro {
  font-size: 12px;
  color: #ccc;
  .title {
    font-size: 14px;
    margin-bottom: 15px;
  }
  .intro-detail {
    display: flex;
    justify-content: space-between;
    .img-contain {
      img {
        width: 100px;
        height: 138px;
      }
    }
    .text-contain {
      width: 231px;
      h2 {
        color: #fff;
        font-size: 20px;
        height: 30px;
        line-height: 30px;
      }
      p {
        height: 18px;
        line-height: 18px;
      }
      .button-contain {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        .button {
          width: 110px;
          height: 30px;
          background: rgba(255, 255, 255, 0.35);
          border-radius: 3px;
          @include center;
          img {
            width: 14px;
            height: 14px;
            margin-right: 6px;
          }
          span {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
