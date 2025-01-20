<template>
  <div class="problem-detail">
    <!-- 關閉按鈕 -->
    <button class="close-btn" @click="$emit('close')">&times;</button>

    <!-- 題目標題 -->
    <h2>2_Add Two Numbers (medium)</h2>
    <a href="https://leetcode.com/problems/add-two-numbers/description/" target="_blank">
      leetcode_2
    </a>
    <p>
      <strong>問題:</strong>
      兩個鏈結串列 (Linked List) 的節點數值和
    </p>
    <div v-if="showMore">
      <p>
        給定兩個非空的鏈結串列，分別代表兩個非負整數。這些數字以 逆序 (Reverse Order) 的方式儲存，每個節點包含一個數位 (Single Digit)。我們的任務是將這兩個數字相加，並以相同的鏈結串列形式返回它們的總和。
        可以假設：
        這兩個數字 不包含前置零 (除了數字 0 本身)。
        輸入的鏈結串列中，節點的數值範圍為 0 到 9。
      </p>
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
  Time complexity: O(n)
  Space complexity: O(n)
*/
class ListNode {
    public val: number;
    public next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }

    public static create(values: number[]): ListNode | null {
        let dummy = new ListNode(0); // 虛擬頭節點
        let current = dummy;
        for (let val of values) {
            current.next = new ListNode(val);
            current = current.next;
        }
        return dummy.next; // 返回真正的頭節點
    }

    public static print(head: ListNode | null): void {
        let current = head;
        let result: number[] = [];
        while (current !== null) {
            result.push(current.val);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }

    public static addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        let dummy = new ListNode(0); // 虛擬頭節點
        let current = dummy;
        let carry = 0; // 進位數值

        while (l1 !== null || l2 !== null || carry > 0) {
            let sum = carry;

            if (l1 !== null) {
                sum += l1.val; 
                l1 = l1.next;
            }

            if (l2 !== null) {
                sum += l2.val;
                l2 = l2.next;
            }

            carry = Math.floor(sum / 10);
            current.next = new ListNode(sum % 10);
            current = current.next;
        }

        return dummy.next;
    }
}

const l1 = ListNode.create([2, 3, 4]); // ListNode.print(l1); // 2 -> 3 -> 4 (432)
const l2 = ListNode.create([5, 6, 4]); // ListNode.print(l2); // 5 -> 6 -> 4 (465)

const result = ListNode.addTwoNumber(l1, l2);
ListNode.print(result); // 7 -> 9 -> 8 (897)
`;

const testCodeString = `
const l1 = ListNode.create([2, 3, 4]); // ListNode.print(l1); // 2 -> 3 -> 4 (432)
const l2 = ListNode.create([5, 6, 4]); // ListNode.print(l2); // 5 -> 6 -> 4 (465)
const result = ListNode.addTwoNumber(l1, l2);
ListNode.print(result); // Output: 7 -> 9 -> 8 (897)`;
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
  color: #e67e22;
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

  .test-block {
    font-size: 12px;
  }
}
</style>
