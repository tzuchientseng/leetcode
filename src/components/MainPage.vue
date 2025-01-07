<template>
  <div class="main-page">
    <h1>我的刷題目筆記</h1>
    
    <!-- Search Bar -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search problems..."
      class="search-bar"
    />

    <!-- Filters -->
    <div class="filters">
      <button @click="filterByDifficulty('easy')">Easy</button>
      <button @click="filterByDifficulty('medium')">Medium</button>
      <button @click="filterByDifficulty('hard')">Hard</button>
    </div>

    <!-- Problem List -->
    <ul class="problem-list">
      <li v-for="problem in filteredProblems" :key="problem.id">
        <span :class="problem.difficulty">{{ problem.id }}. {{ problem.title }}</span>
        <span class="difficulty">{{ problem.difficulty }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "MainPage",
  setup() {
    // Problem List
    const problems = ref([
      { id: 1, title: "Two Sum", difficulty: "easy" },
      { id: 2, title: "Add Two Numbers", difficulty: "medium" },
      { id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "medium" },
      { id: 4, title: "Median of Two Sorted Arrays", difficulty: "hard" },
      { id: 5, title: "Valid Parentheses", difficulty: "easy" },
    ]);

    // Search Query
    const searchQuery = ref("");

    // Filter Logic
    const filteredProblems = computed(() => {
      return problems.value.filter((problem) => {
        return (
          problem.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      });
    });

    // Filter by Difficulty
    const filterByDifficulty = (difficulty: string) => {
      problems.value = problems.value.filter(
        (problem) => problem.difficulty === difficulty
      );
    };

    return {
      problems,
      searchQuery,
      filteredProblems,
      filterByDifficulty,
    };
  },
});
</script>

<style scoped>
.main-page {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.search-bar {
  width: 40%;
  padding: 10px;
  margin-bottom: 20px;
}

.filters {
  margin-bottom: 20px;
}

.filters button {
  margin-right: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.filters button:hover {
  background-color: #0056b3;
}

.problem-list {
  list-style: none;
  padding: 0;
}

.problem-list li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.problem-list li span.difficulty {
  float: right;
  text-transform: capitalize;
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
</style>
