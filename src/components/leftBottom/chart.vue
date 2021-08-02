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
  name: 'LeftBottomChart',
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
          color: ['#21bad6', '#3488db'],
          tooltip: {
            trigger: 'item',
          },
          // selectedOffset: '1',
          // legend: {
          //   top: '5%',
          //   left: 'center',
          // },
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
                show: false,
                position: 'center',
              },
              emphasis: {
                label: {
                  show: true,
                  // fontWeight: 'bold',
                  color: '#fff',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: '22',
                  backgroundColor: 'transparent',
                  formatter: (params) => {
                    // console.log(params);
                    // return `123`;
                    return `${params.percent}%`;
                  },
                },
              },
              // labelLine: {
              //   show: true,
              // },
              itemStyle: {
                // color: '#21bad6',
                // borderJoin: 'round',
                // borderColor: '#000',
                borderRadius: 10,
                // borderRadius: ['20%', '50%'],
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
