<template>
  <div
    id="domId"
    :class="className"
    :style="{ height: height, width: width }"
  ></div>
</template>

<script>
import resizeMixin from '@/mixins/resizeMixin';
export default {
  name: 'LineChartComp',
  mixins: [resizeMixin],
  props: {
    className: {
      type: String,
      default: 'line-chart',
    },
    domId: {
      type: String,
      default: 'line-chart',
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
    opts: {
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
    opts: {
      handler() {
        if (this.chart) {
          this.chart.setOption(this.opts, true);
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.init(); // 初始化操作
    this.chart.setOption(this.opts, true);
  },
  methods: {
    init() {},
  },
};
</script>
