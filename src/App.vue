<template>
  <div id="app">
    <picture>
      <!-- 新增 a 標籤包裹圖片，設定 target="_blank" -->
      <a href="https://leetcode.com" target="_blank">
        <img alt="Vue logo" src="./assets/logo.png" class="logo-image" />
      </a>
    </picture>
    <MainPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainPage from './components/MainPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainPage,
  },
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

/* 設定背景為灰黑色 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #2b2b2b;
  min-height: 100vh;
}

/* 圖片樣式優化 */
.logo-image {
  max-width: 100px;
  height: auto;
  display: block;
  margin: 10px auto;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
}

/* 增加圖片的放大效果 */
.logo-image:hover {
  transform: scale(1.05);
}
</style>
