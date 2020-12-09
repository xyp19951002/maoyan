<template>
  <div>
    <section class="head-contain">
      <my-header :hasBack="false" />
      <my-nav-tab />
    </section>
    <section class="content">
      <keep-alive>
        <router-view v-if="$route.meta.requireAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.requireAlive"></router-view>
    </section>
  </div>
</template>

<script>
import MyHeader from "com/home/MyHeader";
import MyNavTab from "com/home/MyNavTab";

export default {
  components: {
    MyHeader,
    MyNavTab
  }
};
</script>
<style lang="scss" scoped>
.head-contain {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 96px;
  z-index: 100;
}
.content {
  margin-top: 96px;
}
</style>
