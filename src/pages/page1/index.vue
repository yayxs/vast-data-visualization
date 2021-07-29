<template>
  <div id="index">
    <dv-full-screen-container class="full-screen">
      内容区域
    </dv-full-screen-container>
  </div>
</template>
<script>
import { formatTime } from '@/utils';
export default {
  name: 'Index',
  data() {
    return {
      loading: false,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekDay: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    };
  },
  mounted() {
    this.timeFn();
  },
  methods: {
    timeFn() {
      setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH: mm: ss');
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd');
        // this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
    cancleLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
