<template>
  <ul class="problem-list">
    <li v-for="problem in problems" :key="problem.id">
      <span :class="problem.difficulty" @click="$emit('selectProblem', problem)">
        {{ problem.id }}. {{ problem.title }}
      </span>
      <span class="difficulty">{{ problem.difficulty }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProblemList',
  props: {
    problems: {
      type: Array,
      required: true
    }
  }
});
</script>

<style scoped>
.problem-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.problem-list li {
  padding: 15px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.problem-list li:hover {
  background-color: #e8e8e8;
}

/* 難度顏色 */
.easy {
  color: green;
}

.medium {
  color: orange;
}

.hard {
  color: red;
}

/* 顯示難度的文字樣式 */
.difficulty {
  margin-left: 10px;
  font-style: italic;
  font-size: 0.9rem;
}

/* RWD：針對平板和小螢幕進行優化 */
@media (max-width: 768px) {
  .problem-list li {
    padding: 12px;
    font-size: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .difficulty {
    margin-top: 5px;
    font-size: 0.85rem;
  }
}

/* RWD：針對手機或更小的裝置進行優化 */
@media (max-width: 480px) {
  .problem-list li {
    padding: 10px;
    font-size: 0.9rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .difficulty {
    margin-top: 3px;
    font-size: 0.8rem;
  }
}
</style>
