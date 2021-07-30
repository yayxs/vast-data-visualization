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
        xAxisData: ['0-7H', '7-9H', '9-12H', '12-17H', '17-19H', '19-24H'],
        seriesData: [120, 200, 150, 80, 70, 110],
      },
    };
  },
};
</script>
