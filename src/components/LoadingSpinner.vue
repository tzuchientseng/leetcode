<template>
  <div class="loading-container">
    <div class="spinner"></div>
    <p>Loading...</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LoadingSpinner',
};
</script>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 滿版高度，讓它佔滿畫面高度 */
  width: 100vw;  /* 滿版寬度，讓它佔滿畫面寬度 */
  position: fixed; /* 固定位置以確保在視窗中間 */
  top: 0;
  left: 0;
  z-index: 999; /* 確保 Loading 在最上層 */
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid gray;
  border-top: 5px solid #2B2B2B;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

p {
  margin-top: 15px;
  font-size: 1.5rem;
  color:#2B2B2B;
}

/* 加入動畫效果 */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
