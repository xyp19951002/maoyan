<template>
  <div class="contain">
    <address>杭州</address>
    <ul>
      <router-link
        tag="li"
        v-for="(item, index) in tabList"
        :key="index"
        :to="item.url"
        active-class="active"
      >
        {{ item.title }}
      </router-link>
    </ul>
    <span class="iconfont icon-fangdajing"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        {
          title: "热映",
          url: "hot"
        },
        {
          title: "影院",
          url: "cinema"
        },
        {
          title: "待映",
          url: "wait"
        },
        {
          title: "经典电影",
          url: "classical"
        },
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/var.scss";

.contain {
  background: #fff;
  height: 44px;
  padding: 15px 15px 0 15px;
  font-size: 15px;
  color: #777;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $border-color;
  ul {
    display: flex;
    justify-content: flex-start;
    li {
      width: 40px;
      margin: 0 5px;
      color: #777;
      font-size: 15px;
      font-weight: bolder;
      position: relative;
      &:last-of-type {
        width: 68px;
      }
    }
    .active {
      font-weight: bolder;
      font-size: 17px;
      color: #333;
      &::after {
        content: "";
        width: 20px;
        height: 3px;
        background: $theme-color;
        position: absolute;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  .icon-fangdajing {
    color: $theme-color;
  }
}
</style>
