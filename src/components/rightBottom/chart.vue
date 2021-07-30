<template>
  <BaseChartComp
    :options="options"
    id="leftTop"
    height="3.2rem"
    width="4.75rem"
  />
</template>

<script>
import BaseChartComp from '../BaseChartComp.vue';
export default {
  name: 'RightBottomChart',
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
        this.options = {
          xAxis: {
            show: true,
            type: 'category',
            data: newData.xAxisData, // ['0-7H', '7-9H', '9-12H', '12-17H', '17-19H', '19-24H']
            axisLine: {
              show: true,
            },
            axisTick: {
              // 刻度
              show: false,
            },
            axisLabel: {
              // 标签
              show: true,
              interval: '0', // 可以设置成 0 强制显示所有标签
              // eslint-disable-next-line no-undef
              // color: 'fff',
              fontSize: 12,
            },
          },
          yAxis: {
            name: '车流/辆',
            type: 'value', // 数值轴，适用于连续数据
            show: true, // 是否展示y轴
            position: 'left',
            nameTextStyle: {
              color: '#fff',
              fontSize: '.225rem',
              align: 'left',
              // backgroundColor: 'pink',
              // borderDashOffset: 10,
            },
            nameGap: 10, // 坐标轴名称与轴线之间的距离
            axisLine: {
              show: true,
              symbol: ['none', 'arrow'], // 末端显示箭头
              symbolSize: [6, 8],
            },
            axisTick: {
              // 刻度
              show: false,
            },
            minorTick: {
              show: false,
            },
            axisLabel: {
              show: false, // 不展示标签
            },
            splitLine: {
              show: false, // 分割线
            },
          },
          series: [
            {
              type: 'bar',
              legendHoverLink: true, // 是否启用图例 hover 时的联动高亮。
              data: newData.seriesData, // [120, 200, 150, 80, 70, 110]
              /**
               * [
               *  [0, 23]
               *  [1, 44]
               *  [2, 55]
               *  [3, 19]
               * ]
               */
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
                // borderColor: '#000',
                borderRadius: 20,
              },
              label: {
                // show: true,
              },
              itemStyle: {
                color: '#0582b8',
                borderRadius: 20,
              },
              barWidth: '25%',
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

<style lang="scss" scoped>
.fid {
  width: 4.75rem /* 380/80 */;
  height: 1.825rem /* 146/80 */;
  // font-size:  /* 18/80 */ ;
}
</style>
