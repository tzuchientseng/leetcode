<template>
  <div class="problem-detail">
    <!-- 關閉按鈕 -->
    <button class="close-btn" @click="$emit('close')">&times;</button>

    <!-- 題目標題 -->
    <h2>Fibonacci Sequences</h2>
    <a href="https://en.wikipedia.org/wiki/Fibonacci_sequence" target="_blank">
      https://en.wikipedia.org/wiki/Fibonacci_sequence
    </a>

    <!-- 題目敘述 -->
    <p>
      <strong>問題:</strong>
      費氏數列是一個數列，其中每個數字都是前兩個數字的和。
    </p>
    <div v-if="showMore">
      <p>
        數列的起始值通常為 0 和 1，因此費氏數列的前幾個數字為：
        0, 1, 1, 2, 3, 5, 8, 13, 21, ...。
      </p>
      <p>撰寫一個函式，接收一個整數 n，並返回費氏數列中第 n 個數字。</p>
    </div>
    <button id="toggleShowMoreButton" @click="toggleShowMore">
      {{ showMore ? '(Hide)' : 'Click to Show More ↓' }}
    </button>

    <!-- 我的解答 -->
    <h3>-- 我的解答 --</h3>
    <pre class="code-block">
      <code class="language-javascript">{{ codeString }}</code>
    </pre>

    <!-- 測試用例 -->
    <h3>-- 測試用例 --</h3>
    <pre class="code-block">
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

const showMore = ref(false);

const toggleShowMore = () => {
  showMore.value = !showMore.value;
};

const codeString = `
/*
  Method 1: Functional Programming => Tail Recursion
  Time complexity: O(n)
  Space complexity: O(1) (理論上) 需要尾遞迴優化 (Tail Call Optimization, TCO)
  - 在 Scala、Haskell 支援 TCO，因此空間複雜度是 O(1)。
  - 在 JavaScript、Python、Java 中，因為不支援 TCO，實際空間複雜度是 O(n)。
  - C/C++ 需要啟用特定的編譯器選項才支援 TCO。

  -- Process --
  getFibonacciTailRec(4, 0, 1)
  -> getFibonacciTailRec(3, 1, 1)
  -> getFibonacciTailRec(2, 1, 2)
  -> getFibonacciTailRec(1, 2, 3)
  -> getFibonacciTailRec(0, 3, 5) // return 3
*/
// 
const getFibonacciTailRec = (num: number, a = 0, b = 1): number =>
  num === 0 ? a : getFibonacciTailRec(num - 1, b, a + b);

/*
  Method 1.2: Functional Programing => Array#reduce + recursion (過程像是 Method4: memoization bottom-up)
  Time complexity O(n) 
  Space complexity O(n)
*/
const getFibonacciFP = (num: number): number =>
  num <= 1
    ? num
    : Array.from({ length: num - 1 }).reduce(([prev, curr]) => [curr, prev + curr], [0, 1])[1];

/*
  Method 2: Recursive
  Time complexity O(2^n) 
  Space complexity O(n)
*/
const getFibonacciRecursive = (num: number): number => {
    if (num === 0 || num === 1) return num; // 不要寫成 if (num === 0 || 1) return num;
    return getFibonacciRecursive(num - 1) + getFibonacciRecursive(num - 2);
};

/*
  Method 3: Iterative 
  Time complexity O(n) 
  Space complexity O(1)
*/
const getFibonacciIterative = (num: number): number => {
  if (num <= 1) return num;

  let previous = 0, current = 1;
  let next = 0;

  for (let i = 2; i <= num; i++) {
    next = previous + current;
    previous = current;
    current = next;
  }

  return current;

/*
  Method 4: Memoization (Dynamic Programming: Bottom-Up)
  Time complexity O(n)
  Space complexity O(n)
*/
const getFibonacciBottomUp = (num: number): number => {
  if (num <= 1) return num;

  const dp: number[] = [0, 1];

  for (let i = 2; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[num];
};

/*
  Method 5: Memoization (Dynamic Programming: Top-Down)
  Time complexity O(n)
  Space complexity O(n)
*/
const getFibonacciTopDown = (num: number): number => {
  // const memo: number[] = Array.from({ length: num + 1 }, () => -1);
  const memo: number[] = Array(num + 1).fill(-1);

  const helper = (n: number): number => {
    if (n <= 1) return n;
    if (memo[n] !== -1) return memo[n];
    memo[n] = helper(n - 1) + helper(n - 2);
    return memo[n];
  };

  return helper(num);
};
`;

const testCodeString = `
console.log(getFibonacciTailRec(4)); // Output: 3
console.log(getFibonacciFP(4)); // Output: 3
console.log(getFibonacciRecursive(4)); // Output: 3
console.log(getFibonacciIterative(4)); // Output: 3
console.log(getFibonacciBottomUp(4)); // Output: 3
console.log(getFibonacciTopDown(4)); // Output: 3`;
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

/* Show More Button Style */
#toggleShowMoreButton {
  background: rgb(65, 64, 64);
  color: black;
  border: none;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

#toggleShowMoreButton:hover {
  background-color: #504f4c;
  transform: scale(1.05);
}

#toggleShowMoreButton:active {
  transform: scale(0.95);
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
