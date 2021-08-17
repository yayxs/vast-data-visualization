<template>
  <div class="big-screen-box" :style="style">
    <slot />
  </div>
</template>

<script>
import { debounce } from '@/utils';
export default {
  name: 'BigScreen',
  props: {
    width: {
      //设计稿宽高 默认1920*1080 16:9
      type: Number,
      default: 1920,
    },
    height: {
      type: Number,
      default: 1080,
    },
  },
  data() {
    return {
      style: {
        width: `${this.width}px`,
        height: `${this.height}px`,
        transform: 'scale(1) translate(-50%, -50%)',
      },
    };
  },
  mounted() {
    this.setScale();
    window.addEventListener('resize', debounce(this.setScale), 300);
  },
  beforeDestroy() {
    window.removeEventListener('resize', debounce(this.setScale), 300);
  },
  methods: {
    getScale() {
      const wRatio = window.innerWidth / this.width;
      const hRatio = window.innerHeight / this.height;
      const scale = wRatio < hRatio ? wRatio : hRatio;
      return scale;
    },
    setScale() {
      this.style.transform = `scale(${this.getScale()}) translate(-50%, -50%)`;
    },
  },
};
</script>

<style lang="scss" scoped>
.big-screen-box {
  transform-origin: 0 0;
  position: fixed;
  left: 50%;
  top: 50%;
  transition: 0.3s;
}
</style>
