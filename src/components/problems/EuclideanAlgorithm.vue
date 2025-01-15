<template>
  <div class="problem-detail">
    <!-- 關閉按鈕 -->
    <button class="close-btn" @click="$emit('close')">&times;</button>

    <!-- 題目標題 -->
    <h2>Euclidean Algorithm</h2>
    <a href="https://en.wikipedia.org/wiki/Euclidean_algorithm" target="_blank">
      https://en.wikipedia.org/wiki/Euclidean_algorithm
    </a>
    <p>
      <strong>問題:</strong>
      撰寫一個函式來計算兩個正整數最大公因數
    </p>
    <div v-if="showMore">
      <p>
        歐幾里得算法原理是反覆地用較大數除以較小數，直到餘數為 0，當餘數為 0 時，當前的除數就是這兩個數的最大公因數。
      </p>
      亦即: GCD(a, b) = GCD(b, a % b)。當除數等於零時，被除數為最大公因數。
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

const showMore = ref(false);

const toggleShowMore = () => {
  showMore.value = !showMore.value;
};

const codeString = `
/*
  Method 1
  Time complexity: O(log(min(a, b))) // 歐幾里得算法的*最差情況*出現在兩個數是連續的斐波那契數每次迭代的問題規模縮小到原來的 黃金比例約 1.618 倍 e.g: GCD(21, 13)
  Space complexity: O(1)
  (ａ< b): (GCD(18, 48))
      n = 1; 18 = 48 * 0 + 18 及 18 mod 48
      n = 2; 48 = 18 * 2 + 12 及 48 mod (18 mod 48) = 12
      n = 3; 18 = 12 * 1 + 6  及 18 mod 12 = 6
      n = 4; 12 = 6 * 2 + 0   及 12 mod 6 = 0
      n = 5;  6 = 0 * 0 + 0   及 GCD(18, 48) = 6
*/
const GCD = (dividend: number, divisor: number): number => {
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    while (divisor !== 0) {
        const remainder = dividend % divisor;
        dividend = divisor;
        divisor = remainder;
    }

    return dividend;
}

/*
  Method 2: Functional Programming => Recursion
  Time complexity: O(log(min(a, b))) 
  Space complexity: O(log(min(a, b))) 
*/
 const gcdRecursive = (dividend: number, divisor: number): number => divisor === 0 ? dividend : gcdRecursive(divisor, dividend % divisor);

/*
  Mutiple GCD: Functional Programming => reduce()
  Time complexity:
  Space complexity:
*/
const gcdRecursive = (dividend: number, divisor: number): number => divisor === 0 ? dividend : gcdRecursive(divisor, dividend % divisor);
const gcdReduce  = (numbers: number[]): number => numbers.reduce((acc, cur) => gcdRecursive(acc, cur), numbers[0]);

/* ------------------------------------------ 以上為常見做法 ------------------------------------------ */

/*
  Advance Method 1: Functional Programming => 柯里化 Currying
  Time complexity: O(log(min(a, b))) // 和前兩種方法一樣，歐幾里得算法的最差情況是連續的斐波那契數。
  Space complexity: O(log(min(a, b))) // 因為遞迴深度取決於最小的數值，與遞迴版本相同。
  Concept:
    - 使用柯里化(Currying)技術，將 GCD 函式轉換為接受一個參數後，返回另一個接受第二個參數的函式。
    - 每次呼叫 gcd(a)(b) 時，就會返回一個新的函式直到計算完成。
    - 更具彈性，允許部分應用(Partial Application)，可以先固定一個參數，之後再傳入另一個參數。
*/
const gcd = (a: number) => (b: number): number =>
    b === 0 ? a : gcd(b)(a % b);

// Test example
console.log(gcd(48)(18)); // Output: 6
// Partial application example
const gcdWith48 = gcd(48); 
console.log(gcdWith48(18)); // Output: 6
console.log(gcdWith48(24)); // Output: 24

/*
  Advance Method 2: Functional Programming with Tail Call Optimization (TCO)
  Time complexity: O(log(min(a, b))) 
  Space complexity: O(1) // With TCO, the stack usage remains constant.
*/
const gcd = (a: number) => (b: number): number => {
    // Inner function using tail-recursive optimization
    const gcdTailRec = (x: number, y: number): number =>
        y === 0 ? x : gcdTailRec(y, x % y);
    return gcdTailRec(a, b);
};

// Test examples
console.log(gcd(48)(18)); // Output: 6
console.log(gcd(56)(98)); // Output: 14
// Partial application example
const gcdWith56 = gcd(56);
console.log(gcdWith56(98)); // Output: 14
console.log(gcdWith56(28)); // Output: 28
`;

const testCodeString = `
console.log(GCD(18, 48)); // Output: 6
console.log(gcdRecursive(18, 48)); // Output: 6
console.log(gcdMultiple([48, 18, 30])); // Output: 6`;
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
