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
  Time complexity: O(n)
  Space complexity: O(n)
*/
class ListNode {
    /* ------------------------------------------ Structure ------------------------------------------ */
    public val: number;
    public next: ListNode | null;

    constructor(val: number, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }

    /* ------------------------------------------ Create ------------------------------------------ */
      /* 
      💡Concept
        1. new 一個 dummy head
        2. 賦值
        3. 回傳 dummy.next
      */
    public static create(values: number[]): ListNode | null {
        let dummy = new ListNode(0); // 虛擬頭節點
        let current = dummy;
        for (let val of values) {
            current.next = new ListNode(val);
            current = current.next;
        }

        /* FP 寫法
        values.forEach((val) => {
            current.next = new ListNode(val);
            current = current.next;
        });
        */

        return dummy.next; // 返回真正的頭節點
    }

    /* ------------------------------------------ Print ------------------------------------------ */
      /* 
      💡Concept
        1. head 傳入做淺拷貝 (保留頭)
        2. 用 array 存取
      */
    public static print(head: ListNode | null): void {
        let current = head;
        let result: number[] = [];
        while (current !== null) {
            result.push(current.val);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }

    /* FP 寫法
    public static printFunctional(head: ListNode | null): void {
        const toArray = (node: ListNode | null, acc: number[] = []): number[] =>
            node === null ? acc : toArray(node.next, [...acc, node.val]);

        const result = toArray(head);
        console.log(result.join(" -> "));
    }
    */

    /* ------------------------------------------ Leetcode_2 ------------------------------------------ */
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

    /* ------------------------------------------ Insertion (插入) ------------------------------------------ */
      /* 
      💡Concept
        1. 原鏈結開頭新增假節點 0
        2. 透過 count < index 將 current 推到對的位置
        3. 插入且接續 new ListNode(val, current.next);
      */
    public static insert(head: ListNode | null, index: number, val: number): ListNode | null {
        let dummy = new ListNode(0, head);
        let current = dummy;
        let count = 0;

        while (current !== null && count < index) {
            current = current.next!;
            count++;
        }

        if (current !== null) {
            let newNode = new ListNode(val, current.next);
            current.next = newNode;
        }

        return dummy.next;
    }

    /* ------------------------------------------ Deletion (刪除) ------------------------------------------ */
      /* 
      💡Concept
        1. 原鏈結開頭新增假節點 0
        2. 透過 count < index 將 current 推到對的位置
        3. 取代前一個節點 current.next = current.next.next;
      */
    public static delete(head: ListNode | null, index: number): ListNode | null {
        let dummy = new ListNode(0, head);
        let current = dummy;
        let count = 0;

        while (current.next !== null && count < index) {
            current = current.next;
            count++;
        }

        if (current.next !== null) {
            current.next = current.next.next;
        }

        return dummy.next;
    }

    /* ------------------------------------------ Update (更新) ------------------------------------------ */
      /* 
      💡Concept
        1. 淺拷貝
        2. 透過 count < index 將 current 推到對的位置
        3. 直接換成新數值
      */
    public static update(head: ListNode | null, index: number, newVal: number): ListNode | null {
        let current = head;
        let count = 0;

        while (current !== null && count < index) {
            current = current.next;
            count++;
        }

        if (current !== null) {
            current.val = newVal;
        }

        return head;
    }

    /* ------------------------------------------ Search (搜尋) ------------------------------------------ */
      /* 
      💡Concept
        1. 淺拷貝
        2. while + if 
      */
    public static search(head: ListNode | null, val: number): number {
        let current = head;
        let index = 0;

        while (current !== null) {
            if (current.val === val) {
                return index;
            }
            current = current.next;
            index++;
        }

        return -1; // 若找不到則回傳 -1
    }
}
`;

const testCodeString = `
const l1 = ListNode.create([2, 3, 4]); // ListNode.print(l1); // 2 -> 3 -> 4 (432)
const l2 = ListNode.create([5, 6, 4]); // ListNode.print(l2); // 5 -> 6 -> 4 (465)
const result = ListNode.addTwoNumbers(l1, l2);
ListNode.print(result); // Expected output: 7 -> 9 -> 8 (897)

// 測試插入
const inserted = ListNode.insert(l1, 1, 10);
ListNode.print(inserted); // Expected: 2 -> 10 -> 3 -> 4

// 測試刪除
const deleted = ListNode.delete(inserted, 1);
ListNode.print(deleted); // Expected: 2 -> 3 -> 4

// 測試更新
const updated = ListNode.update(deleted, 1, 99);
ListNode.print(updated); // Expected: 2 -> 99 -> 4

// 測試搜尋
console.log(ListNode.search(updated, 99)); // Expected: 1
console.log(ListNode.search(updated, 100)); // Expected: -1
`;
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
