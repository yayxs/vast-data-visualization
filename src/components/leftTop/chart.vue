<template>
  <div>
    <BaseChartComp
      :options="options"
      id="leftTop"
      height="2.75rem"
      width="3.25rem"
    />
  </div>
</template>

<script>
import BaseChartComp from '../BaseChartComp.vue';
export default {
  name: 'Chart',
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
        this.options = {
          tooltip: {
            trigger: 'item',
            // formatter: '{a} <br/>{b} : {c} ({d}%)',
          },
          legend: {
            top: '5%',
            left: 'center',
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center',
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold',
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: 1048, name: '搜索引擎' },
                { value: 735, name: '直接访问' },
                { value: 580, name: '邮件营销' },
                { value: 484, name: '联盟广告' },
                { value: 300, name: '视频广告' },
              ],
            },
          ],
        };
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
