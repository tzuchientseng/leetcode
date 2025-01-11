<template>
<input
  :value="modelValue"
  @input="handleInput"
  type="text"
  placeholder="   Search ..."
  class="search-bar"
/>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput(event: Event) {
      const target = event.target as HTMLInputElement;
      if (target) {
        this.$emit('update:modelValue', target.value);
      }
    },
  },
});
</script>

<style scoped>
.search-bar {
  width: 100px;
  padding: 15px;
  margin: 25px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 12px;
}

@media (max-width: 480px) {
  .search-bar {
    padding: 4px;
    margin: 20px auto;
    border-radius: 10px;
  }
}
</style>
