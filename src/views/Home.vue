<template>
  <div>
    <router-view></router-view>
    <my-footer />
  </div>
</template>

<script>
import MyFooter from "com/home/MyFooter";

export default {
  components: {
    MyFooter
  }
};
</script>
<style lang="scss" scoped>
div {
  background: #f5f5f5;
}
</style>
