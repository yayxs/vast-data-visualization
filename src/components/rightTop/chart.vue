<template>
  <BaseChartComp
    :options="options"
    id="rightTop"
    height="2.75rem"
    width="2.75rem"
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
        this.options = {
          // 紫色 红色 蓝色 绿色
          // color: ['#825df1', '#d44648', '#4b9dfa', '#21bad6'],
          color: ['#4b9dfa', '#21bad6', '#825df1', '#d44648', '#e1b720'],
          tooltip: {
            trigger: 'item',
          },
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
                // borderRadius: 10,
                // borderRadius: ['20%', '50%'],
                borderWidth: 5,
                borderColor: '#060711',
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

<style lang="scss" scoped>
#rightTop {
  background-image: url('../../assets/rigitTop.png');
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
}
</style>
