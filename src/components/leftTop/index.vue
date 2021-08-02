<template>
  <Chart :cdata="cdata" />
</template>
<script>
import Chart from './chart.vue';
export default {
  name: 'LeftTop',
  components: { Chart },
  data() {
    return {
      cdata: {
        seriesData: [
          //  color: ['#825df1', '#d44648', '#4b9dfa', '#21bad6'],
          { value: 1048, name: '标签拆卸', label: { color: '#825df1' } },
          { value: 735, name: '无入口信息', label: { color: '#d44648' } },
          { value: 580, name: '多卡/多签', label: { color: '#4b9dfa' } },
          { value: 484, name: '其他', label: { color: '#21bad6' } },
        ],
      },
    };
  },
};
</script>
