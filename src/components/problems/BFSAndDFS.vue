<template>
  <div class="problem-detail">
    <!-- 關閉按鈕 -->
    <button class="close-btn" @click="$emit('close')">&times;</button>
    
    <!-- 題目標題 -->
    <h2>BFS / DFS</h2>
    <a href="https://en.wikipedia.org/wiki/Breadth-first_search" target="_blank">
      (wiki - BFS)
    </a>
    <a href="https://en.wikipedia.org/wiki/Depth-first_search" target="_blank">
      (wiki - DFS)
    </a>
    <p>
      <strong>問題:</strong>
      Graph Traversal
    </p>
    <div v-if="showMore">
      <p>根據節點圖，從節點 1 開始，以下面兩種走訪方式印出節點。</p>
      <p>1. 廣度優先 (Breadth-First Search, BFS)</p>
      <p>2.深度優先 (Depth-First Search, DFS)</p>
    </div>
    <button id="toggleShowMoreButton" @click="toggleShowMore">
      {{ showMore ? '(Hide)' : 'Click to Show More ↓' }}
    </button>

    <br>
    <!-- <img src="../../assets/BFSAndDFS.png"> -->
    <button id="showModalButton" @click="openModal">節點圖</button>

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

    <!-- Modal -->
    <!-- 節點圖片顯示 -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <!-- Loading 狀態 -->
        <div v-if="isLoading" class="loading-spinner">Loading...</div>
        <!-- 顯示圖片 -->
        <img 
          v-show="!isLoading"
          :src="imageSrc" 
          alt="node-picture" 
          @load="onLoadSuccess"
          @error="onLoadError"
        >
        <button class="close-button" @click="closeModal">Close</button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Prism from 'prismjs';

// 直接載入圖片
import BFSAndDFS from '@/assets/BFSAndDFS.png';

onMounted(() => {
  // Activate Prism.js syntax highlighting
  Prism.highlightAll();
});

// Reactive references
const showMore = ref(false);
const showModal = ref(false);
const isLoading = ref(false);
const imageSrc = ref<string>("");

// Toggle show more/less content
const toggleShowMore = (): void => {
  showMore.value = !showMore.value;
};

// Close the modal and reset states
const closeModal = (): void => {
  showModal.value = false;
  isLoading.value = false;
  imageSrc.value = ""; // Reset the image source
};

// Handle successful image loading
const onLoadSuccess = (): void => {
  isLoading.value = false; // Disable loading indicator
};

// Handle image loading errors
const onLoadError = (): void => {
  isLoading.value = false; // Disable loading indicator
  imageSrc.value = "https://via.placeholder.com/600x400?text=Image+Not+Found"; // Fallback image
};

// Open modal and set the image source
const openModal = (): void => {
  showModal.value = true;
  isLoading.value = true;
  imageSrc.value = BFSAndDFS;
};

const codeString = `
/* 
  模仿 API 資料串接
  fetchNeighbours(1).then((data) => {console.log(data);}).catch((error) => {console.error(error);});
  -> Output; [ 2, 3, 4 ]
*/
const fakeData: Record<string, number[]> = {
    "1": [2, 3, 4],
    "2": [1, 5],
    "3": [1, 5],
    "4": [1, 6],
    "5": [2, 3, 7],
    "6": [4, 7],
    "7": [5, 6],
};

async function fetchNeighbours(node: number): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeData[node] || []); // Return an empty array if the node doesn't exist
        }, 500); // Simulate network delay
    });
}

/*
  Assuming the graph has V vertices and E edges:
  Time complexity: O(V + E)
  Space complexity: O(V)
*/

// BFS 遍歷函數
const BFS = async (start: number) => {
    const queue = [start];
    const visited = new Set<number>();
    visited.add(start);

    while (queue.length > 0) {
        const currentNode = queue.shift();
        if (currentNode !== undefined) {
            console.log(currentNode);

            const neighbours = await fetchNeighbours(currentNode);

            for (const neighbour of neighbours) {
                if (!visited.has(neighbour)) {
                    queue.push(neighbour);
                    visited.add(neighbour);
                }
            }
            /* FP:
              neighbours.forEach(neighbour => {
                  if (!visited.has(neighbour)) {
                      visited.add(neighbour);
                      queue.push(neighbour);
                  }
              });
            */
        }
    }
};

// DFS 遍歷函數
const DFS = async (start: number) => {
    const stack = [start];
    const visited = new Set<number>();
    visited.add(start);

    while (stack.length > 0) {
        const currentNode = stack.pop();
        console.log(currentNode);

        const neighbours = await fetchNeighbours(currentNode);
        for (let neighbour of neighbours) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour);
                stack.push(neighbour);
            }
        }
    }
};

/* 若含失敗率的方式: Fetch API 要配合 try-catch */
async function fetchNodeNeighborsWithFailure(node) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!(node in simulatedData)) {
                reject(new Error("The specified node does not exist in the dataset"));
            } else if (Math.random() < 0.2) {
                reject(new Error("A random error occurred while fetching the node data"));
            } else {
                resolve(simulatedData[node] || []);
            }
        }, 500);
    });
}
`;

const testCodeString = `
BFS(1); // 測試 BFS 從節點 1 開始 Output: 1, 2, 3, 4, 5, 6, 7
DFS(1); // 測試 BFS 從節點 1 開始 Output: 1, 4, 6, 7, 5, 3, 2`;
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


/* Modal Content */
#showModalButton {
    background-color: #007BFF;
    color: white;
    padding: 2px 4px;
    margin-top: 4px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
}

#showModalButton:hover {
    background-color: #0056b3;
}


.problem-detail button:focus {
  outline: 2px solid #ff9900;
}

/* Modal Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* 更深的背景色 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease; /* 添加淡入動畫 */
}

/* Modal Content */
.modal-content {
  background: linear-gradient(135deg, #047baa, #02919b); /* 添加柔和的漸變背景 */
  border-radius: 15px; /* 圓角調整 */
  padding: 10px;
  max-width: 600px; /* 限制寬度 */
  width: 90%; /* 響應式設計 */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* 增加深度陰影 */
  text-align: center;
  transform: scale(0.8); /* 初始放大比例 */
  opacity: 0; /* 初始透明度 */
  animation: zoomIn 0.3s ease forwards; /* 添加放大動畫 */
}

/* Modal Image */
.modal-content img {
  max-width: 100%; /* 確保圖片在小屏幕上正常顯示 */
  height: auto;
  margin: 20px 0;
  border-radius: 10px; /* 增加圖片圓角 */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* 添加陰影 */
}

/* Close Button */
.close-button {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 9px 12px; /* 增加按鈕尺寸 */
  cursor: pointer;
  border-radius: 30px; /* 按鈕更圓潤 */
  font-size: 18px;
  transition: background-color 0.3s ease, transform 0.3s ease; /* 添加動態效果 */
}

.close-button:hover {
  background-color: #c0392b;
  transform: scale(1.1); /* 懸停時放大 */
}

.loading-spinner {
  color: #000;
  font-size: 24px;
  margin: 20px 0;
  text-align: center;
}

/* Fade-in Animation */
@keyframes fadeIn {
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.8);
  }
}

/* Zoom-in Animation */
@keyframes zoomIn {
  from {
    transform: scale(0.8); /* 從縮小狀態開始 */
    opacity: 0; /* 從透明開始 */
  }
  to {
    transform: scale(1); /* 放大至正常大小 */
    opacity: 1; /* 顯示 */
  }
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
