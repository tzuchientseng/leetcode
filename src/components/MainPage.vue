<template>
  <div class="main-page">
    <h1 style="font-size: 2.0rem;">Notes / Records</h1>

    <!-- 搜尋區 -->
    <SearchBar v-model="searchQuery" />

    <!-- 題目列表 -->
    <ProblemList :problems="filteredProblems" @selectProblem="selectProblem" />

    <!-- 動態載入題目詳情 -->
    <component
      :is="selectedProblemComponent"
      v-if="selectedProblemComponent"
      @close="closeDetail"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { defineAsyncComponent } from 'vue';

// 引入題目
const TwoSum = defineAsyncComponent(() => import('./problems/TwoSum.vue'));

// 其他元件
import SearchBar from './SearchBar.vue';
import ProblemList from './ProblemList.vue';

// 定義 Problem 類型
interface Problem {
  id: number;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  component?: any;
}

export default defineComponent({
  name: 'MainPage',
  components: { SearchBar, ProblemList },
  setup() {
    // 題目清單
    const problems = ref<Problem[]>([
      {
        id: 1,
        title: 'Two Sum',
        difficulty: 'easy',
        component: TwoSum,
      },
    ]);

    // 搜尋關鍵字
    const searchQuery = ref('');

    // 依據搜尋關鍵字篩選題目
    const filteredProblems = computed(() => {
      return problems.value.filter((problem) =>
        problem.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    // 選中的題目
    const selectedProblem = ref<Problem | null>(null);

    // 目前顯示的題目元件
    const selectedProblemComponent = ref<any>(null);

    // 點擊某個題目時
    const selectProblem = (problem: Problem) => {
      selectedProblem.value = problem;
      selectedProblemComponent.value = problem.component;
    };

    // 關閉詳情
    const closeDetail = () => {
      selectedProblem.value = null;
      selectedProblemComponent.value = null;
    };

    return {
      searchQuery,
      filteredProblems,
      selectedProblem,
      selectedProblemComponent,
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
  background-color: gray;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
}

/* 標題字體大小 */
h1 {
  font-size: 2rem;
  text-align: center;
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
