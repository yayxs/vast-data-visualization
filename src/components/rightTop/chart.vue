<template>
  <BaseChartComp
    :options="options"
    id="rightTop"
    height="3.2rem"
    width="4.75rem"
  />
</template>

<script>
import BaseChartComp from '../BaseChartComp.vue';
export default {
  name: 'RightTopChart',
  components: {
    BaseChartComp,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      options: {},
    };
  },
  watch: {
    cdata: {
      handler(newData) {
        console.log(newData);
        this.options = {};
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.fid {
  width: 4.75rem /* 380/80 */;
  height: 1.825rem /* 146/80 */;
  // font-size:  /* 18/80 */ ;
}
</style>
