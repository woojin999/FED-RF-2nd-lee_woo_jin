<!-- 템플릿구역 -->
<template>
  <div id="app">
    <!-- <TopArea></TopArea> -->
    <TopArea/>
    <MainArea/>
    <FooterArea/>
  </div>
</template>

<!-- 스트립트 -->
<script>
import TopArea from './components/TopArea.vue';
import MainArea from './components/MainArea.vue';
import FooterArea from "./components/FooterArea.vue";

export default {
    name: 'App',
    components: { TopArea,MainArea,FooterArea }
}
</script>

<!-- 스타일구역 -->
<style>
/* 최상위 요소 */
#app {
  max-width: 500px;
  margin: 0 auto;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
