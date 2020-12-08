<template>
  <footer>
    <ul>
      <router-link
        tag="li"
        v-for="item in footList"
        :key="item.title"
        :to="item.url"
        active-class="active"
      >
        <span class="iconfont" :class="item.icon"></span>
        <p>{{ item.title }}</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footList: [
        {
          title: "电影/影院",
          icon: "icon-dianyingjiaopian",
          url: "/movie"
        },
        {
          title: "视频",
          icon: "icon-shipin",
          url: "/video"
        },
        {
          title: "小视频",
          icon: "icon-shipin",
          url: "minivideo"
        },
        {
          title: "演出",
          icon: "icon-yanchu",
          url: "/show"
        },
        {
          title: "我的",
          icon: "icon-wode",
          url: "/mine"
        }
      ],
      itemIndex: 0
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/var.scss";
footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  height: 48px;
  z-index: 1000;
  ul {
    height: 100%;
    @include center;
    border-top: 1px solid $border-color;
    li {
      width: 75px;
      height: 100%;
      @include center;
      flex-direction: column;
      span {
        font-size: 20px;
      }
      p {
        font-size: 12px;
        margin: 5px 0 0 0;
      }
    }
    .active {
      color: $theme-color;
    }
  }
}
</style>
