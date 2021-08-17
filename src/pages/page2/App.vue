<template>
  <div id="app">
    <!-- <BigScreen> -->
    <!-- <LeftCenter /> -->
    <!-- </BigScreen> -->
    <LeftBottomPlus />
  </div>
</template>

<script>
// import BigScreen from '@/components/BigScreen';
// import LeftCenter from '@/components/leftCenter';
import LeftBottomPlus from '@/components/leftBottomPlus';
export default {
  name: 'App',
  components: {
    // BigScreen,
    // LeftCenter,
    LeftBottomPlus,
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
  background-color: #fdfdfd;
}
</style>
