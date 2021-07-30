<template>
  <div
    :id="domId"
    :class="className"
    :style="{ height: height, width: width }"
  ></div>
</template>

<script>
import resizeMixin from '@/mixins/resizeMixin';
export default {
  name: 'BaseChartComp',
  mixins: [resizeMixin],
  props: {
    className: {
      type: String,
      default: 'chart',
    },
    domId: {
      type: String,
      default: 'chart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    options: {
      handler() {
        if (this.chart) {
          this.chart.setOption(this.options, true);
        }
      },
      deep: true,
    },
  },
  mounted() {
    // this.init(); // 初始化操作
    this.initChart();
  },
  methods: {
    initChart() {
      this.chart = this.$ec.init(this.$el);
      this.chart.setOption(this.options, true);
    },
  },
};
</script>
