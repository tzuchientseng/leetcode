<template>
  <div class="main-page">
    <h1 style="font-size: 2.0rem;">Notes / Records</h1>

    <!-- 搜尋區 -->
    <SearchBar v-model="searchQuery" />

    <!-- 題目列表 -->
    <ProblemList :problems="filteredProblems" @selectProblem="selectProblem" />

    <!-- 動態載入題目詳情 -->
    <transition name="popup" mode="out-in">
      <template v-if="isLoading">
        <LoadingSpinner />
      </template>
      <template v-else>
        <component
          :is="selectedProblemComponent"
          v-if="selectedProblemComponent"
          @close="closeDetail"
        />
      </template>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { defineAsyncComponent } from 'vue';

// 定義 Problem 介面
interface Problem {
  id: number;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'other';
  component?: any;
}

// 動態載入題目元件
const Euclidean = defineAsyncComponent(() => import('./problems/EuclideanAlgorithm.vue'));
const FibonacciSequences = defineAsyncComponent(() => import('./problems/FibonacciSequences.vue'));
const BFSAndDFS = defineAsyncComponent(() => import('./problems/BFSAndDFS.vue'))
const QuickSort = defineAsyncComponent(() => import('./problems/QuickSort.vue'));
const PriorityQueue = defineAsyncComponent(() => import('./problems/PriorityQueue.vue'));
const TwoSum = defineAsyncComponent(() => import('./problems/TwoSum.vue'));
const AddTwoNumbers = defineAsyncComponent(() => import('./problems/AddTwoNumbers.vue'));
const LongestSubstring = defineAsyncComponent(() => import('./problems/LongestSubstring.vue'));
const BinarySearch = defineAsyncComponent(() => import('./problems/BinarySearch.vue'));
const SortList = defineAsyncComponent(() => import('./problems/SortList.vue'));

// 其他元件
import SearchBar from './SearchBar.vue';
import ProblemList from './ProblemList.vue';
import LoadingSpinner from './LoadingSpinner.vue';

export default defineComponent({
  name: 'MainPage',
  components: { SearchBar, ProblemList, LoadingSpinner },
  setup() {
    // 題目清單
    const problems = ref<Problem[]>([
      { id: 1, title: 'Euclidean Algorithm', difficulty: 'other', component:  Euclidean},
      { id: 2, title: 'Fibonacci Sequences', difficulty: 'other', component: FibonacciSequences },
      { id: 3, title: 'BFS & DFS', difficulty: 'other', component: BFSAndDFS },
      { id: 4, title: 'Quick Sort', difficulty: 'other', component: QuickSort},
      { id: 5, title: 'Priority Queue', difficulty: 'other', component: PriorityQueue},
      { id: 6, title: '1_Two Sum', difficulty: 'easy', component: TwoSum },
      { id: 7, title: '2_Add Two Numbers (Linked-Lists)', difficulty: 'medium', component: AddTwoNumbers},
      { id: 8, title: '3_Longest Substring (Map<>())', difficulty: 'medium', component: LongestSubstring},
      { id: 9, title: '704_Binary Search', difficulty: 'easy', component: BinarySearch},
      { id: 10, title: '148_Sort Linked-Lists (Merge-sort)', difficulty: 'medium', component: SortList},
    ]);

    // 搜尋關鍵字
    const searchQuery = ref('');

    // 選中的題目
    const selectedProblem = ref<Problem | null>(null);
    const selectedProblemComponent = ref<any>(null);

    // 控制 Loading 狀態
    const isLoading = ref(false);

    // 點擊某個題目時
    const selectProblem = (problem: Problem) => {
      isLoading.value = true;
      selectedProblem.value = problem;

      // 模擬載入元件的延遲
      setTimeout(() => {
        selectedProblemComponent.value = problem.component;
        isLoading.value = false;
      }, 1000);
    };

    // 關閉詳情
    const closeDetail = () => {
      selectedProblem.value = null;
      selectedProblemComponent.value = null;
    };

    return {
      searchQuery,
      filteredProblems: computed(() =>
        problems.value.filter((problem) =>
          problem.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
      ),
      selectedProblem,
      selectedProblemComponent,
      isLoading,
      selectProblem,
      closeDetail,
    };
  },
});
</script>

<style scoped>
.main-page {
  padding: 20px;
  height: 70vh;
  width: 90vw;
  font-family: Arial, sans-serif;
  /* background-color: gray; */
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); */
  /* border-radius: 12px; */
  margin: 0 auto;
}

/* 標題字體大小 */
h1 {
  font-size: 2rem;
  text-align: center;
}

/* 過渡效果：由中間向外彈開 */
.popup-enter-active,
.popup-leave-active {
  transition: all 0.3s ease-out;
}

.popup-enter-from,
.popup-leave-to {
  transform: scale(0);
  opacity: 0;
}

.popup-enter-to,
.popup-leave-from {
  transform: scale(1);
  opacity: 1;
}

/* 手機版的優化 */
@media (max-width: 768px) {
  .main-page {
    padding: 20px;
    width: 87vw;
    border-radius: 20px;
  }

  h1 {
    font-size: 1.5rem;
  }
}

/* 更小的螢幕，例如手機橫放或更小的裝置 */
@media (max-width: 480px) {
  .main-page {
    padding: 15px;
    width: 87vw;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    border-radius: 37px;
  }

  h1 {
    font-size: 1.25rem;
  }
}
</style>
