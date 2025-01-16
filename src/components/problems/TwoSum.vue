<template>
  <div class="problem-detail">
    <!-- 關閉按鈕 -->
    <button class="close-btn" @click="$emit('close')">&times;</button>

    <!-- 題目標題 -->
    <h2>1__Two Sum (easy)</h2>
    <a href="https://leetcode.com/problems/two-sum/description/" target="_blank">
      leetcode_1
    </a>

    <!-- 題目敘述 -->
    <p>
      <strong>問題:</strong>
      給定一個整數陣列 nums 和一個目標值 target，
      請找出並返回兩個數字，使它們的和等於目標值。
    </p>

    <!-- 我的解答 -->
    <h3>-- 我的解答 --</h3>
    <pre class="code-block">
      <code class="language-javascript">{{ codeString }}</code>
    </pre>

    <!-- 測試用例 -->
    <h3>-- 測試用例 --</h3>
    <pre class="test-block">
      <code class="language-javascript">{{ testCodeString }}</code>
    </pre>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Prism from 'prismjs';

onMounted(() => {
  Prism.highlightAll(); // 啟用語法高亮
});

const codeString = ref(`
/*
  Method 1: Brute Force
  Time complexity o(n(n-1)/2) == o(n^2)
  Space complexity o(1)
*/
const twoSumBruteForce = (nums: number[], target: number): number[] => {
 for (let i = 0; i < nums.length; i++) {
   for (let j = i + 1; j < nums.length; j++) {
    let sum = nums[i] + nums[j];
    if (target === sum) return [i, j];
   }
 }
};

/*
  Method 2: HashMap
  Time complexity o(n)
  Space complexity o(n)
*/
const twoSumHashMap = (nums: number[], target: number): number[] => {
  const recordMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement: number = target - nums[i];
    if (recordMap.has(complement)) {
      return [recordMap.get(complement), i];
    }
    recordMap.set(nums[i], i);
    // console.log({recordMap})
  }
}

/*
  Method 3: Functional Programming (Reduce)
  Time complexity o(n)
  Space complexity o(n)
*/
const twoSumReduce = (nums: number[], target: number): number[] => {
  // array.reduce((accumulator, currentValue(key), currentIndex?(value), array?) => { ... }, initialValue);
  const result = nums.reduce(
    (acc: { map: Map<number, number>, found: boolean, indices: number[] }, num: number, index: number) => {
      if (acc.found) return acc; // 若找到則停止
      const complement: number = target - num;

      if (acc.map.has(complement)) {
        return {
          ...acc,
          found: true,
          indices: [acc.map.get(complement)!, index], // 使用 ! 表示非空斷言 一定不是 null 或 undefined
        };
      }
      return {
        ...acc,
        map: acc.map.set(num, index),
      };
    },
    { map: new Map<number, number>(), found: false, indices: [] }
  );
  return result.indices;
};
`);

const testCodeString = ref(`
console.log(twoSumBruteForce([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSumHashMap([3, 2, 4], 6)); // [1, 2]
console.log(twoSumReduce([3, 3], 6)); // [0, 1]`);
</script>

<style scoped>
.problem-detail {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(65, 64, 64);
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  width: 70%;
  max-width: 90%;
  color: #f1f1f1;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow-y: auto;
  max-height: 90vh;
}

h2 {
  font-size: 20px;
  margin-bottom: 0px;
  color: green;
}

p {
  font-size: 14px;
  line-height: 1.6;
  margin: 10px;
}

h3 {
  font-size: 16px;
  margin-top: 10px;
  color: #ff9900;
}

a {
  color: #ff9900;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

a:hover {
  color: #ffcc00;
  text-shadow: 0 0 8px #ffcc00;
}

a:active {
  color: #ffaa00;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 28px;
  outline: none;
  cursor: pointer;
  color: #ff5555;
  transition: transform 0.2s ease, color 0.2s ease;
}

.close-btn:hover {
  color: #ff0000;
  transform: scale(1.1);
}

.code-block {
  border-radius: 10px;
  white-space: pre-wrap;
  font-family: 'Courier New', monospace;
  /* font-family: 'Fira Code', 'Courier New', monospace; */
  max-height: 500px; /* 限制程式碼區塊高度 */
  color: #f8f8f2;
  font-size: 14px;
  overflow-x: auto; /* 水平滾軸 */
  overflow-y: auto; /* 垂直滾軸 */
  border: 1px solid #444;
  text-align: left; /* 確保程式碼區塊靠左對齊 */
}

/* 美化 code-block 滾動條 */
.code-block::-webkit-scrollbar {
  width: 6px; /* 控制滾動條寬度 */
  height: 6px; /* 控制水平滾動條寬度 */
}

.code-block::-webkit-scrollbar-track {
  background: #1e1e2f; /* 滾動條背景色 */
  border-radius: 10px;
}

.code-block::-webkit-scrollbar-thumb {
  background: #ff9900; /* 滾動條滑塊顏色 */
  border-radius: 10px;
}

.code-block::-webkit-scrollbar-thumb:hover {
  background: #ffcc00; /* 滑鼠懸停時變亮 */
}

.test-block {
  border-radius: 10px;
  white-space: pre-wrap;
  font-family: 'Courier New', monospace;
  /* font-family: 'Fira Code', 'Courier New', monospace; */
  max-height: 100px; /* 限制程式碼區塊高度 */
  color: #f8f8f2;
  font-size: 14px;
  overflow-x: auto; /* 水平滾軸 */
  overflow-y: auto; /* 垂直滾軸 */
  border: 1px solid #444;
  text-align: left; /* 確保程式碼區塊靠左對齊 */
}

/* 美化化滾動條樣式 */
.test-block::-webkit-scrollbar {
  width: 10px;
}

.test-block::-webkit-scrollbar-track {
  background: #1e1e2f;
  border-radius: 10px;
}

.test-block::-webkit-scrollbar-thumb {
  background: #1a6cb9;
  border-radius: 10px;
  border: 2px solid #1e1e2f;
}

.test-block::-webkit-scrollbar-thumb:hover {
  background: #11d3e0;
}

pre {
  margin: 0;
  text-align: left; /* 確保 pre 區塊內的文字靠左對齊 */
}

button {
  outline: none;
}

.problem-detail button:focus {
  outline: 2px solid #ff9900;
}

@media (max-width: 600px) {
  .problem-detail {
    width: 95%;
    padding: 16px;
  }

  h2 {
    font-size: 18px;
  }

  .close-btn {
    font-size: 24px;
  }

  .code-block {
    font-size: 12px;
    max-height: 300px; /* 限制程式碼區塊高度 */
  }
}
</style>
