<template>
  <BaseChartComp
    :options="options"
    id="leftTop"
    height="2.65rem"
    width="4rem"
  />
</template>

<script>
import BaseChartComp from '../BaseChartComp.vue';
export default {
  name: 'LeftTopChart',
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
          // 紫色 红色 蓝色 绿色
          color: ['#825df1', '#d44648', '#4b9dfa', '#21bad6'],
          // tooltip: {
          //   trigger: 'item',
          // },
          selectedOffset: 10,
          // legend: {
          //   top: '5%',
          //   left: 'center',
          // },
          // top: 'middle',
          series: [
            {
              // name: '引导成功率',
              type: 'pie',
              legendHoverLink: false,
              // clockwise: true,
              // width: 20,

              radius: ['60%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: true,
                position: 'outside',
                // color: (params) => {
                //   let coList = ['#825df1', '#d44648', '#4b9dfa', '#21bad6'];
                //   return coList[params.dataIndex];
                // },
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '12',
                // padding: [0, -100, 20, -100],
                // backgroundColor: 'transparent',
                // formatter: (params) => {
                //   console.log(params);
                //   // return `123`;
                //   return `${params.percent}%`;
                // },
                // formatter: [' {value|{d}}% \n', '{b|}'].join('\n'), //用\n来换行
                formatter: '{value|{d}}% \n', //用\n来换行
                padding: [0, -50],
                rich: {
                  value: {
                    align: 'center',
                    verticalAlign: 'bottom',
                  },
                  // b: {
                  //   height: 5,
                  //   width: 5,
                  //   lineHeight: 5,
                  //   marginBottom: 20,
                  //   padding: [0, -5],
                  //   borderRadius: 5,
                  //   backgroundColor: 'pink', // 圆点颜色和饼图块状颜色一致
                  // },
                },
              },
              emphasis: {},
              labelLine: {
                show: true,
                length2: 50,
              },
              itemStyle: {
                // color: '#21bad6',
                // borderJoin: 'round',
                // borderColor: '#000',
                // borderRadius: 10,
                // borderRadius: ['20%', '50%'],
                // borderWidth: 5,
                // borderColor: '#060711',
              },
              data: newData.seriesData,
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
