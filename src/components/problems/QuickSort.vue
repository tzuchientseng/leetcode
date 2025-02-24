<template>
  <div class="problem-detail">
    <!-- 關閉按鈕 -->
    <button class="close-btn" @click="$emit('close')">&times;</button>

    <!-- 題目標題 -->
    <h2>Quick Sort</h2>
    <a href="https://en.wikipedia.org/wiki/Quicksort" target="_blank">
      wiki - Quick Sort
    </a>
    <p>
      <strong>問題:</strong>
      給定一個由數字組成的陣列，使用 Quick Sort 演算法將陣列中的元素排序為遞增順序。
    </p>
    <div v-if="showMore">
      <p>
        如果陣列的長度為零或一，則它已經是排序好的，無需進一步操作。否則，將陣列分割為兩個子陣列：
        一個包含所有小於基準點 (pivot) 的元素，另一個包含所有大於基準點的元素。對這兩個子陣列遞迴執行
        Quick Sort，最後將排序結果合併為完整的排序陣列。
      </p>
    </div>
    <button id="toggleShowMoreButton" @click="toggleShowMore">
      {{ showMore ? '(Hide)' : 'Click to Show More ↓' }}
    </button>

    <!-- 我的解答 -->
    <h3>-- 我的解答 --</h3>
    <pre class="code-block">
      <button class="copy-btn" @click="copyToClipboard">{{ buttonText }}</button>
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
const buttonText = ref('Copy')

const toggleShowMore = () => {
  showMore.value = !showMore.value;
};

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(codeString);
    buttonText.value = "Copied!";
    setTimeout(() => {
      buttonText.value = "Copy";
    }, 1500);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

const codeString = `
/*
  Quick Sort 原地(In-Place): moves smaller elements to left of a pivot(the last element of the array). recursively divide array in 2 partitions
  Time complexity: 
    - Best case: Ω(nlog(n))
    - Average case: Θ(nlog(n))
    - Worst case: O(n^2)
  Space complexity: O(log(n))
*/
class QuickSort {
    static quicksort(arr: number[], start: number, end: number): void {
        if (end <= start) return; // base case
        const pivot = QuickSort.partition(arr, start, end);
        QuickSort.quicksort(arr, start, pivot - 1);
        QuickSort.quicksort(arr, pivot + 1, end);
    }

    private static partition(arr: number[], start: number, end: number): number {
    /*
     💡Concept  
        1. j >= pivot -> do nothing
        2. j < pivot -> i++,  swap arr[i] and arr[j]
        3. End of loop, i++, swap arr[i] and arr[end] (pivot)
        4. return pivot's ending position
    */
        const pivot = arr[end];
        let i = start - 1;

        for (let j = start; j <= end - 1; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap arr[i] and arr[j]
            }
        }
        i++;
        [arr[i], arr[end]] = [arr[end], arr[i]];
        return i; // Return the pivot's final index
    }
}

/*
  Quick Sort 非原地(Out-of-Place)
  Time complexity: 
    - Best case: Ω(nlog(n))
    - Average case: Θ(nlog(n))
    - Worst case: O(n^2)
  Space complexity:
    - Best case: Ω(log(n))
    - Average case: Θ(log(n))
    - Worst case: O(log(n))
*/

function quickSort(arr: number[]): number[] {
    // 基本情況: 如果陣列長度小於等於1，直接返回
    if (arr.length <= 1) {
        return arr;
    }

    // 選擇基準值，這裡使用陣列的中間值作為基準值
    const pivot = arr[Math.floor(arr.length / 2)];

    // 定義三個陣列，分別存放小於基準值、等於基準值和大於基準值的元素
    const left: number[] = [];
    const right: number[] = [];
    const equal: number[] = [];

    // 遍歷陣列，將元素分類
    for (const num of arr) {
        if (num < pivot) {
            left.push(num);
        } else if (num > pivot) {
            right.push(num);
        } else {
            equal.push(num);
        }
    }

    // 遞迴排序左右兩部分，並合併結果
    return [...quickSort(left), ...equal, ...quickSort(right)];
}`;

const testCodeString = `
const array = [8, 2, 5, 3, 9, 4, 7, 6, 1];
QuickSort.quicksort(array, 0, array.length - 1);
console.log(array.join(" ")); // Output: 1 2 3 4 5 6 7 8 9

//
const unsortedArray = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(unsortedArray);
console.log("排序後的陣列:", sortedArray);`;
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
  color: #27ae60;
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
  width: 9px;
  height: 9px;
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

.copy-btn {
  position: relative;
  float: right;
  padding: 5px 10px;
  background-color: #29b6f6;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 12px;
  /* display: none; */
}

.copy-btn:hover{
  background-color: #1e88e5;
  animation: shake 500ms;
}

@keyframes shake {
    0% { rotate: 0deg; }
    30% { rotate: 17deg; }
    60% { rotate: -17deg; }
    100% { rotate: 0deg; }
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

  .test-block {
    font-size: 12px;
  }
}
</style>
