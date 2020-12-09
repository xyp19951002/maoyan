<template>
  <div>这是MiniVideo页</div>
</template>

<script>
export default {
  // 组件内守卫
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm);
    });
  },
  beforeRouteLeave(to, from, next) {
    next();
  }
};
</script>
