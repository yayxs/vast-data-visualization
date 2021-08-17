<template>
  <BaseChartComp
    :options="options"
    id="leftCenter"
    height="400px"
    width="500px"
  />
</template>

<script>
import BaseChartComp from '../BaseChartComp.vue';
export default {
  name: 'LeftCenterChart',
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
      handler() {
        this.options = {
          //  省界入口绿色 互通出口紫色 互通入口黄色 省界出口红色
          color: ['#22b5d6', '#835ef2', '#f7cc26', '#a54655'],
          legend: {
            // 图例
            type: 'plain', // 普通图例
            show: true,
            left: 60, // 横向偏移量
            top: 35, // 纵向偏移量
            itemStyle: {
              borderType: 'solid',
            },
            icon: 'circle',
            itemHeight: 6, //修改icon图形大小
          },
          tooltip: {},
          dataset: {
            dimensions: ['num', '省界入口', '互通出口', '互通入口', '省界出口'],
            source: [
              {
                num: '1',
                省界入口: 43.3,
                互通出口: 85.8,
                互通入口: 93.7,
                省界出口: 20,
              },
              {
                num: '2',
                省界入口: 83.1,
                互通出口: 73.4,
                互通入口: 55.1,
                省界出口: 20,
              },
              {
                num: '3',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '4',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '5',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '6',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '7',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '8',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '9',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '10',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '11',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '12',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '13',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '14',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '15',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '16',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '17',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '18',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '19',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '20',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '21',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '22',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
              {
                num: '23',
                省界入口: 86.4,
                互通出口: 65.2,
                互通入口: 82.5,
                省界出口: 20,
              },
            ],
          },
          xAxis: {
            type: 'category',
            show: true,
            position: 'bottom',
            // nameTextStyle: {
            //   color: 'pink',
            // },
            axisTick: {
              show: false,
            },
            axisLabel: {
              // 轴线
              show: true,
              interval: '0', // 可以设置成 0 强制显示所有标签
              // eslint-disable-next-line no-undef
              // color: '#fff',
              fontSize: 10,
            },
            axisLine: {
              symbol: ['none', 'arrow'],
              symbolSize: [6, 8],
              symbolOffset: [0, 8],
            },
          },

          yAxis: {
            show: true,
            type: 'value',
            minorTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dotted',
              },
            },
            axisLine: {
              show: true,
              symbol: ['none', 'arrow'],
              symbolSize: [6, 8],
              symbolOffset: [0, 8],
              lineStyle: {
                // color: '#fdfdfd',
              },
            },
          },
          // 声明几个柱状系列，每个都将被映射
          // 默认到 dataset.source 的一列。
          series: [
            {
              type: 'bar',
              itemStyle: {
                borderRadius: 20,
              },
            },
            {
              type: 'bar',
              itemStyle: {
                borderRadius: 20,
              },
            },
            {
              type: 'bar',
              itemStyle: {
                borderRadius: 20,
              },
            },
            {
              type: 'bar',
              itemStyle: {
                borderRadius: 20,
              },
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
