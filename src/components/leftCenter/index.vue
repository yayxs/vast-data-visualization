<template>
  <div class="left-center">
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue';
export default {
  name: 'LeftCenter',
  components: {
    Chart,
  },
  data() {
    return {
      cdata: {
        seriesData: [
          { value: 20365, name: '引导成功数' },
          { value: 3920, name: '引导失败数' },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.left-center {
  border: 1px solid #ccc;
}
</style>
