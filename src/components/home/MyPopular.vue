<template>
  <div class="contain">
    <p>最受好评电影</p>
    <div class="wrap">
      <ul>
        <li v-for="item in popular" :key="item._id">
          <div class="img-contain">
            <img :src="item.imgUrl" alt="" />
            <span v-if="item.score">观众评分 {{ item.score }}</span>
            <span v-if="item.wishNum">{{ item.wishNum }}人想看</span>
          </div>
          <p>{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

export default {
  props: {
    popular: Array
  },
  data() {
    return {};
  },

  watch: {
    // popular改变 即数据从父组件传到子组件时
    async popular() {
      await this.$nextTick();
      new BetterScroll(".wrap", {
        scrollX: true,
        scrollY: false,
        click: true
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/var.scss";

.contain {
  padding: 12px 0 12px 15px;
  margin-bottom: 10px;
  background: #fff;
  > p {
    height: 17px;
    font-size: 14px;
    margin-bottom: 12px;
  }
  .wrap {
    height: 168px;
    overflow: hidden;

    ul {
      height: 100%;
      display: inline-flex;
      li {
        .img-contain {
          width: 85px;
          height: 115px;
          margin: 0 10px 8px 0;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          span {
            position: absolute;
            bottom: 0px;
            left: 0px;
            right: 0px;
            font-size: 12px;
            font-weight: bold;
            display: flex;
            width: 100%;
            height: 35px;
            justify-content: center;
            align-items: flex-end;
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 0)
            );
            color: #faaf00;
          }
        }
        p {
          width: 85px;
          font-size: 13px;
          margin-bottom: 3px;
          font-weight: bold;
          font-size: #222;
          @include text-overflow;
        }
      }
    }
  }
}
</style>
