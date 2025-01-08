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
}

.problem-list li:hover {
  background-color: #e8e8e8;
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

.difficulty {
  margin-left: 10px;
  font-style: italic;
  font-size: 0.9rem;
}
</style>
