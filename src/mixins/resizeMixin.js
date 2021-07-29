import { debounce } from '@/utils/index';
const resizeChartMethod = '$__resizeChartMethod';
export default {
  data() {
    return {
      chart: null,
    };
  },
  created() {
    window.addEventListener('resize', this[resizeChartMethod], false);
  },
  activated() {
    // 防止 keep-alive 之后图表变形
    if (this.chart) {
      this.chart.resize();
    }
  },
  beforeDestroy() {
    window.removeEventListener('reisze', this[resizeChartMethod]);
  },
  methods: {
    // 防抖函数来控制 resize 的频率
    [resizeChartMethod]: debounce(function () {
      if (this.chart) {
        this.chart.resize();
      }
    }, 300),
  },
};
