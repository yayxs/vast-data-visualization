<template>
  <Chart :cdata="cdata" />
</template>
<script>
import Chart from './chart.vue';
export default {
  name: 'RightTop',
  components: { Chart },
  data() {
    return {
      cdata: {
        seriesData: [
          { value: 1048, name: '无卡' },
          { value: 735, name: '拆卸' },
          { value: 580, name: '软件拒绝' },
          { value: 484, name: 'PC通信异常' },
          { value: 300, name: 'DSRC异常' },
        ],
      },
    };
  },
};
</script>
