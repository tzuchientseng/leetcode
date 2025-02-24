<template>
  <div class="problem-detail">
    <!-- 關閉按鈕 -->
    <button class="close-btn" @click="$emit('close')">&times;</button>

    <!-- 題目標題 -->
    <h2>3_Longest Substring (medium)</h2>
    <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/description/" target="_blank">
      leetcode_3
    </a>

    <!-- 題目敘述 -->
    <p>
      <strong>問題:</strong>
      找出最長無重複字符的子字串
      給定一個字串 str，找出其中不包含重複字符的最長子字串的長度。
    </p>

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

const buttonText = ref('Copy')

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
    Time complexity: O(n) - Here, n is the length of the string s.
    Space complexity: O(min(m, n)) - Here, m is the size of the character set, and n is the length of the string s.
*/

const lengthOfLongestSubstring = (str: string): number => {
    const n: number = str.length;
    let maxLength = 0;

    // Map to store the most recent index of each character (Map -> [X: str[index], Y: index])
    const charIndexMap = new Map<string, number>();

    // "start" is the beginning of the current substring
    for (let end = 0, start = 0; end < n; end++) {
        if (charIndexMap.has(str[end])) {
            // Move "start" to the right of the last occurrence of the character
            start = Math.max(charIndexMap.get(str[end])! + 1, start);
        }

        // Update the maximum length of the substring
        maxLength = Math.max(maxLength, end - start + 1);

        // Record the current index of the character
        charIndexMap.set(str[end], end);
    }

    return maxLength;
};

/* Explain:
  例如: str = "abcabcbb";
  初始: start = 0, ans = 0, charIndexMap = {}

  遍歷 'a' (index 0):
  - charIndexMap = {'a': 0}
  - ans = 1
  - start 仍是 0

  遍歷 'b' (index 1):
  - charIndexMap = {'a': 0, 'b': 1}
  - ans = 2
  - start 仍是 0

  遍歷 'c' (index 2):
  - charIndexMap = {'a': 0, 'b': 1, 'c': 2}
  - ans = 3
  - start 仍是 0

  遍歷第二個 'a' (index 3):
  - 發現 'a' 已存在
  - charIndexMap.get('a') 是 0
  - charIndexMap.get('a')! + 1 是 1
  - start 變成 Max(1, 0) = 1
  - ans 變成 3
  - charIndexMap 更新為 {'a': 3, 'b': 1, 'c': 2}
*/
`;

const testCodeString = `
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1`;
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
