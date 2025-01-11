<template>
  <ul class="problem-list">
    <li
      v-for="problem in problems"
      :key="problem.id"
      :class="problem.difficulty"
      @click="$emit('selectProblem', problem)"
    >
      <span>
        <!-- {{ problem.id }}. {{ problem.title }} -->
        {{ problem.title }}
      </span>
      <span v-if="problem.difficulty" class="difficulty">{{ problem.difficulty }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

// 修改 Problem 介面，讓 component 屬性為可選的
interface Problem {
  id: number;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'other';
  component?: any; // Vue 元件的引用
}

export default defineComponent({
  name: 'ProblemList',
  props: {
    problems: {
      type: Array as PropType<Problem[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
/* 問題列表樣式 */
.problem-list {
  list-style: none;
  width: 70%;
  padding: 0;
  margin: 1px auto; /* 垂直置中 上下增加間距 */
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  background-color: #fafafa;
}

/* 單個列表項樣式 */
.problem-list li {
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  cursor: pointer;
  background-color: #ffffff;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

/* 最後一個列表項不需要底部邊框 */
.problem-list li:last-child {
  border-bottom: none;
}

/* 🖱️ Hover 效果：放大、陰影、背景色變化 */
.problem-list li:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #f4f4f4;
}

/* 難度標籤的顏色和字型樣式 */
.easy {
  color: #27ae60;
  font-weight: bold;
}

.medium {
  color: #e67e22;
  font-weight: bold;
}

.hard {
  color: #c0392b;
  font-weight: bold;
}

.other {
  color: gray;
  font-weight: bold;
}

/* 難度文字樣式 */
.difficulty {
  margin-left: 12px;
  color: black;
  font-style: italic;
  font-size: 0.9rem;
  transition: opacity 0.2s ease, transform 0.2s ease;
  opacity: 0.8;
}

/* 點擊效果 */
.problem-list li:active {
  transform: translateY(0);
  box-shadow: none;
  background-color: #ececec;
}

/* 🖱️ Hover 時難度標籤的細微動畫效果 */
.problem-list li:hover .difficulty {
  transform: scale(1.02);
  opacity: 1;
}

/* 🔄 RWD：針對平板裝置的調整 */
@media (max-width: 768px) {
  .problem-list li {
    padding: 16px;
    font-size: 1rem;
  }

  .difficulty {
    margin-top: 6px;
    font-size: 0.85rem;
  }
}

/* 📱 RWD：針對手機裝置的調整 */
@media (max-width: 480px) {
  .problem-list{
    width: 97%;
  }
  .problem-list li {
    padding: 14px;
    font-size: 0.95rem;
  }

  .difficulty {
    margin-top: 4px;
    font-size: 0.8rem;
  }
}
</style>
