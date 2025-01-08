<template>
  <div class="problem-detail">
    <!-- 關閉按鈕 -->
    <button class="close-btn" @click="$emit('close')">&times;</button>

    <!-- 題目標題 -->
    <h2>Two Sum</h2>

    <!-- 題目敘述 -->
    <p>
      <strong>問題:</strong>
      給定一個整數陣列 nums 和一個目標值 target，
      請找出並返回兩個數字，使它們的和等於目標值。
    </p>

    <!-- 我的解答 -->
    <h3>我的解答</h3>
    <pre class="code-block">{{ codeString }}</pre>

    <!-- 測試用例 -->
    <h3>測試用例</h3>
    <pre class="code-block">{{ testCodeString }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 題目資訊 (可以依需求增加 id/difficulty 等欄位)
const codeString = ref(`function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`);

const testCodeString = ref(`console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]`);
</script>

<style scoped>
.problem-detail {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #222121;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
  color: #ffffff;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
}

.code-block {
  background: #070606;
  padding: 10px;
  border-radius: 5px;
  white-space: pre-wrap;
  font-family: 'Courier New', monospace;
  color: #fff;
}
</style>
