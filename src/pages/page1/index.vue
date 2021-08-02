<template>
  <div id="index">
    <dv-full-screen-container class="full-screen">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div class="host-body" v-else>
        <!-- <div class="df">
          <dv-decoration-10 style="width: 33.3%; height: 0.0625rem" />
          <div class="df">
            <dv-decoration-8
              :color="['#568aea', '#000000']"
              style="width: 2.5rem; height: 0.625rem"
            />
            <div class="title">
              <span class="title-text">vast-data-v</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width: 3.125rem; height: 0.1rem"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width: 2.5rem; height: 0.625rem"
            />
          </div>
          <dv-decoration-10
            style="width: 33.3%; height: 0.0625rem; transform: rotateY(180deg)"
          />
        </div> -->
        <div class="df main jc-sb">
          <!--  第一行-->
          <div class="first-col df fd-c">
            <div class="box-container">
              <LeftTop class="left" />
              <div class="right"></div>
            </div>
            <div class="box-container">
              <LeftBottom class="left" />
              <div class="right"></div>
            </div>
          </div>
          <!-- 第二行 -->
          <div class="sec-col"></div>
          <!-- 第三行 -->
          <div class="th-col df fd-c">
            <div class="box-container">
              <RightTop class="left" />
              <div class="right"></div>
            </div>
            <div class="box-container">
              <!-- <RightBottom /> -->
            </div>
            <div class="box-container center">
              <RightBottom />
            </div>
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>
<script>
import { formatTime } from '@/utils';
import LeftTop from '@/components/leftTop';
import LeftBottom from '@/components/leftBottom';
import RightBottom from '@/components/rightBottom';
import RightTop from '@/components/rightTop';
export default {
  name: 'Index',
  components: {
    LeftTop,
    LeftBottom,
    RightBottom,
    RightTop,
  },
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
