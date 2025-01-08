<template>
  <div class="main-page">
    <h1 style="font-size: 2.0rem;">我的刷題記錄筆記</h1>

    <!-- 搜尋區 -->
    <SearchBar v-model="searchQuery" />

    <!-- 題目列表 -->
    <ProblemList :problems="filteredProblems" @selectProblem="selectProblem" />

    <!-- 動態載入題目詳情：component 即為 TwoSum (或其他) -->
    <component
      :is="selectedProblemComponent"
      v-if="selectedProblemComponent"
      @close="closeDetail"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

// 引入題目
import { defineAsyncComponent } from 'vue';
const TwoSum = defineAsyncComponent(() => import('./problems/TwoSum.vue'));

// 其他元件
import SearchBar from './SearchBar.vue';
import ProblemList from './ProblemList.vue';
import ProblemDetail from './ProblemDetail.vue';

export default defineComponent({
  name: 'MainPage',
  components: { SearchBar, ProblemList, ProblemDetail },
  setup() {
    // 將引入的元件(題目)放到 problems 清單中
    // 這裡可以放一個或多個題目
    const problems = ref([
      // 你可以給它一個必要的屬性，如 title, componentName 等
      {
        title: 'Two Sum',
        component: TwoSum, // 指向匯入的 Vue 元件
      },
      // 未來可再加入更多題目
    ]);

    // 搜尋關鍵字
    const searchQuery = ref('');

    // 依據搜尋字串篩選
    const filteredProblems = computed(() => {
      return problems.value.filter((problem) =>
        problem.title.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    // 「選中的題目」相關狀態
    const selectedProblem = ref<any>(null);

    // 目前顯示的「題目元件」
    const selectedProblemComponent = ref<any>(null);

    // 點擊某個題目時
    const selectProblem = (problem: any) => {
      selectedProblem.value = problem;
      // 直接把對應的 Vue 元件指派給 selectedProblemComponent
      selectedProblemComponent.value = problem.component;
    };

    // 關閉彈窗
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
    width: 97vw;
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
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    border-radius: 37px;
  }

  h1 {
    font-size: 1.25rem;
  }
}
</style>
