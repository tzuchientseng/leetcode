<template>
  <div v-if="problem" class="problem-detail">
    <!-- 關閉按鈕 -->
    <button class="close-btn" @click="$emit('close')">&times;</button>

    <!-- 題目標題與難度 -->
    <h2>{{ problem.title }}</h2>
    <p>
      <strong>難度:</strong>
      <span :class="problem.difficulty">{{ problem.difficulty }}</span>
    </p>

    <!-- 我的解答 -->
    <h3>我的解答</h3>
    <pre class="code-block">{{ problem.solution }}</pre>

    <!-- 相關解法 -->
    <h3 v-if="problem.relatedSolutions && problem.relatedSolutions.length">相關解法</h3>
    <ul>
      <li
        v-for="(related, index) in problem.relatedSolutions"
        :key="index"
      >
        {{ related }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProblemDetail',
  props: {
    problem: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        difficulty: '',
        solution: '',
        relatedSolutions: []
      })
    }
  }
});
</script>

<style scoped>
.problem-detail {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #222121;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
  color: #ffffff;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
}

.easy {
  color: green;
}

.medium {
  color: orange;
}

.hard {
  color: red;
}

.code-block {
  background: #070606;
  padding: 10px;
  border-radius: 5px;
  white-space: pre-wrap;
  font-family: 'Courier New', monospace;
  color: #fff;
}
</style>
