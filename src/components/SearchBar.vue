<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    type="text"
    placeholder="Search problems..."
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
      required: true
    }
  }
});
</script>

<style scoped>
.search-bar {
  width: 60%;
  padding: 15px;
  margin-bottom: 25px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
