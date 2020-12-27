<template>
  <div>
    <h3>Sidebar</h3>

    <input type="text" v-model="search.text" />
    <p>{{ search.text }}</p>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue';
export default {
  setup() {
    const search = reactive({
      text: 'abc'
    });
    return {
      search
    };
  }
};
</script>

