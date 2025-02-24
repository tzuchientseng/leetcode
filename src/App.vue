<template>
  <div id="app">
    <picture>
      <a href="https://leetcode.com/problemset/" target="_blank">
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

/* 移除預設的 margin 和 padding，防止留白 */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
}

/* 設置 #app 的高度和填充 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #2b2b2b;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

/* 平板裝置的樣式優化 */
@media (max-width: 1024px) {
  .logo-image {
    max-width: 70px;
  }
}

/* 手機裝置的樣式優化 */
@media (max-width: 768px) {
  .logo-image {
    margin: 10px;
    padding: 0px;
    max-width: 40px;
  }
}
</style>
