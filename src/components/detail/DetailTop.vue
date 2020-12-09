<template>
  <div class="detail" :style="{ background: detailData.backgroundColor }">
    <detail-intro :detailData="detailData" />
  </div>
</template>

<script>
import DetailIntro from "com/detail/DetailIntro";
export default {
  props: {
    detailData: Object
  },
  data() {
    return {};
  },

  components: {
    DetailIntro
  },

  computed: {},

  mounted() {}
};
</script>
<style lang="scss" scoped>
.detail {
  padding: 21px 16px;
}
</style>
