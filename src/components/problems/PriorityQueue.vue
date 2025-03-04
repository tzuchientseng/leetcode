<template>
  <div class="problem-detail">
    <!-- 關閉按鈕 -->
    <button class="close-btn" @click="$emit('close')">&times;</button>

    <!-- 題目標題 -->
    <h2>Priority Queue</h2>
    <a href="https://en.wikipedia.org/wiki/Priority_queue" target="_blank">
      wiki - Prioriy Queue
    </a>
    <p>
      <strong>問題:</strong>
      特殊的隊列結構中，每個元素都有一個關聯的「優先級」，並且元素根據其優先級進行排序。
    </p>
    <div v-if="showMore">
      <p>
        ...
      我們可以用 最小堆（Min Heap） 或 最大堆（Max Heap） 來實現優先隊列。這裡我們使用 最小堆（Min Heap） 來確保優先級數值較小的元素優先出列。
      通常，優先級高的元素會被優先處理。
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
  Time complexity:
  Space complexity:
*/
class PriorityQueue<T> {
    private heap: { value: T; priority: number }[];

    constructor() {
        this.heap = [];
    }

    // 取得父節點索引
    private getParentIndex(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    // 取得左子節點索引
    private getLeftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    // 取得右子節點索引
    private getRightChildIndex(index: number): number {
        return 2 * index + 2;
    }

    // 交換兩個元素
    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // 插入新元素
    enqueue(value: T, priority: number): void {
        const newNode = { value, priority };
        this.heap.push(newNode);
        this.heapifyUp();
    }

    // 重新排列堆（上浮操作）
    private heapifyUp(): void {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex].priority <= this.heap[index].priority) {
                break;
            }
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    // 移除並返回優先級最高的元素（最小的）
    dequeue(): T | null {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop()!.value;

        const root = this.heap[0].value;
        this.heap[0] = this.heap.pop()!;
        this.heapifyDown();
        return root;
    }

    // 重新排列堆（下沉操作）
    private heapifyDown(): void {
        let index = 0;
        while (this.getLeftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            let rightChildIndex = this.getRightChildIndex(index);

            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex].priority < this.heap[smallerChildIndex].priority
            ) {
                smallerChildIndex = rightChildIndex;
            }

            if (this.heap[index].priority <= this.heap[smallerChildIndex].priority) {
                break;
            }

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    // 查看隊列頂部元素（不刪除）
    peek(): T | null {
        return this.heap.length > 0 ? this.heap[0].value : null;
    }

    // 確認是否為空
    isEmpty(): boolean {
        return this.heap.length === 0;
    }
}
`;

const testCodeString = `
const pq = new PriorityQueue<string>();

pq.enqueue("Task 1", 3);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 2);

console.log(pq.dequeue()); // "Task 2" (priority 1)
console.log(pq.dequeue()); // "Task 3" (priority 2)
console.log(pq.dequeue()); // "Task 1" (priority 3)
console.log(pq.isEmpty()); // true

-> 解釋
enqueue(value, priority): 插入一個元素，並確保它的位置符合最小堆的性質（小的優先）。
dequeue(): 取出 最小優先級 的元素（即優先級數值最小）。
heapifyUp(): 當新元素加入時，上浮以保持堆的結構。
heapifyDown(): 當 dequeue() 取出根節點後，將最後一個元素移至根部並向下調整。`;
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
